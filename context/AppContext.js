"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { lessonContent } from "@/data/lessons";
import { subjects } from "@/data/subjects";
import {
  pickNextQuestion,
  nextLevel,
  buildStrengths,
  buildParentNote,
} from "@/lib/logic";

// ─── constants ────────────────────────────────────────────────
const STORAGE_KEY = "sirius-students";
const ACTIVE_KEY = "sirius-active-id";
const TOTAL_QUESTIONS = 6;

// ─── context ──────────────────────────────────────────────────
const AppContext = createContext(null);

// Return a new student object with a random id.
function makeStudent({ name, classNo, language }) {
  return {
    id: crypto.randomUUID(),
    name,
    classNo,
    language,
    style: "steps",
    progress: {},
  };
}

// Find the career sentence for a given lessonId across all subjects.
function findCareer(lessonId, lang) {
  for (const subj of subjects) {
    const lesson = subj.lessons.find((l) => l.id === lessonId);
    if (lesson) return lesson.career[lang] ?? lesson.career.en;
  }
  return "";
}

// Read the students map from localStorage, returning an empty object on any error.
function loadStudents() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

// Persist the students map to localStorage.
function saveStudents(map) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

// ─── provider ─────────────────────────────────────────────────
export function AppProvider({ children }) {
  const [ready, setReady] = useState(false);
  const [students, setStudents] = useState({});
  const [activeId, setActiveId] = useState(null);

  // Lesson runtime state
  const [lessonId, setLessonId] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [level, setLevel] = useState(1);
  const [usedIds, setUsedIds] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [results, setResults] = useState(null);
  const questionStartRef = useRef(null);

  // Load persisted data from localStorage once on mount.
  useEffect(() => {
    const stored = loadStudents();
    const storedId = localStorage.getItem(ACTIVE_KEY) || null;
    setStudents(stored);
    setActiveId(storedId && stored[storedId] ? storedId : null);
    setReady(true);
  }, []);

  // Derived: the currently active student object.
  const activeStudent = activeId ? students[activeId] ?? null : null;

  // Persist students map whenever it changes (skips before ready).
  useEffect(() => {
    if (!ready) return;
    saveStudents(students);
  }, [students, ready]);

  // Persist active id whenever it changes (skips before ready).
  useEffect(() => {
    if (!ready) return;
    if (activeId) {
      localStorage.setItem(ACTIVE_KEY, activeId);
    } else {
      localStorage.removeItem(ACTIVE_KEY);
    }
  }, [activeId, ready]);

  // Create a new student, make them active, and persist.
  function createStudent({ name, classNo, language }) {
    const s = makeStudent({ name, classNo, language });
    setStudents((prev) => ({ ...prev, [s.id]: s }));
    setActiveId(s.id);
    return s.id;
  }

  // Switch to a different existing student by id.
  function switchStudent(id) {
    if (students[id]) setActiveId(id);
  }

  // Clear the active student (sign-out) without deleting their data.
  function signOutStudent() {
    setActiveId(null);
    setLessonId(null);
    setCurrentQuestion(null);
    setFeedback(null);
    setAnswers([]);
    setIsFinished(false);
    setResults(null);
  }

  // Change the interface language for the active student.
  function setLanguage(lang) {
    if (!activeId) return;
    setStudents((prev) => ({
      ...prev,
      [activeId]: { ...prev[activeId], language: lang },
    }));
  }

  // Change the explanation style preference for the active student.
  function setStyle(style) {
    if (!activeId) return;
    setStudents((prev) => ({
      ...prev,
      [activeId]: { ...prev[activeId], style },
    }));
  }

  // Start a fresh lesson session for the given lesson id.
  function startLesson(id) {
    const content = lessonContent[id];
    if (!content) return;
    const firstQ = pickNextQuestion(content.questions, 1, []);
    setLessonId(id);
    setQuestionIndex(0);
    setLevel(1);
    setUsedIds(firstQ ? [firstQ.id] : []);
    setCurrentQuestion(firstQ);
    setFeedback(null);
    setAnswers([]);
    setIsFinished(false);
    setResults(null);
    questionStartRef.current = Date.now();
  }

  // Record the student's chosen option and produce immediate feedback.
  function submitAnswer(optionId) {
    if (!currentQuestion || feedback) return;
    const timeSec = Math.round((Date.now() - questionStartRef.current) / 1000);
    const chosenOption = currentQuestion.options.find((o) => o.id === optionId);
    const correctOption = currentQuestion.options.find((o) => o.correct);
    const correct = chosenOption?.correct ?? false;

    const fb = {
      correct,
      chosenOptionId: optionId,
      correctOptionId: correctOption?.id ?? null,
      misconceptionId: chosenOption?.misconceptionId ?? null,
    };
    setFeedback(fb);
    setAnswers((prev) => [
      ...prev,
      { correct, level, timeSec, misconceptionId: fb.misconceptionId },
    ]);
  }

  // Advance to the next question, or finish the lesson if all 6 are done.
  function nextQuestion() {
    if (!feedback) return;
    const newIndex = questionIndex + 1;

    if (newIndex >= TOTAL_QUESTIONS) {
      finishLesson([...answers]);
      return;
    }

    const newLevel = nextLevel(level, feedback.correct);
    const content = lessonContent[lessonId];
    const nextQ = pickNextQuestion(
      content.questions,
      newLevel,
      [...usedIds]
    );

    setQuestionIndex(newIndex);
    setLevel(newLevel);
    setCurrentQuestion(nextQ);
    setUsedIds((prev) => (nextQ ? [...prev, nextQ.id] : prev));
    setFeedback(null);
    questionStartRef.current = Date.now();
  }

  // Compute final results and update the student's progress in localStorage.
  function finishLesson(allAnswers) {
    const lang = activeStudent?.language ?? "en";
    const score = allAnswers.filter((a) => a.correct).length;
    const levelReached = Math.max(...allAnswers.map((a) => a.level));
    const misconceptionIds = [
      ...new Set(
        allAnswers
          .filter((a) => !a.correct && a.misconceptionId)
          .map((a) => a.misconceptionId)
      ),
    ];

    const content = lessonContent[lessonId];
    const misconceptionNames = misconceptionIds.map(
      (mid) => content.misconceptions[mid]?.name[lang] ?? mid
    );

    const strengths = buildStrengths(allAnswers, lang);
    const parentNote = buildParentNote(
      activeStudent?.name ?? "",
      score,
      TOTAL_QUESTIONS,
      misconceptionNames,
      lang
    );
    const career = findCareer(lessonId, lang);

    const lessonResults = {
      score,
      total: TOTAL_QUESTIONS,
      levelReached,
      misconceptionIds,
      strengths,
      parentNote,
      career,
    };

    setIsFinished(true);
    setResults(lessonResults);

    // Persist best score and accumulated misconceptions into student progress.
    if (activeId) {
      setStudents((prev) => {
        const student = prev[activeId];
        const existing = student.progress[lessonId] ?? {
          bestScore: 0,
          attempts: 0,
          misconceptionIds: [],
        };
        const merged = [
          ...new Set([...existing.misconceptionIds, ...misconceptionIds]),
        ];
        return {
          ...prev,
          [activeId]: {
            ...student,
            progress: {
              ...student.progress,
              [lessonId]: {
                bestScore: Math.max(existing.bestScore, score),
                attempts: existing.attempts + 1,
                misconceptionIds: merged,
              },
            },
          },
        };
      });
    }
  }

  // Compose the context value exposed to all consumers.
  const value = {
    // Meta
    ready,
    // Students
    students,
    activeStudent,
    createStudent,
    switchStudent,
    signOutStudent,
    setLanguage,
    setStyle,
    // Lesson
    lessonId,
    startLesson,
    currentQuestion,
    questionNumber: questionIndex + 1,
    totalQuestions: TOTAL_QUESTIONS,
    feedback,
    submitAnswer,
    nextQuestion,
    isFinished,
    results,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Hook to consume the app context; throws if used outside AppProvider.
export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
