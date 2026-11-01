"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { lessonContent } from "@/data/lessons";
import Mascot from "@/components/Mascot";
import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ProgressBar";
import OptionButton from "@/components/OptionButton";
import Button from "@/components/Button";
import ExplanationCard from "@/components/ExplanationCard";
import ToggleGroup from "@/components/ToggleGroup";

// Explanation style options for the ToggleGroup.
const STYLE_OPTIONS = [
  { value: "steps", label: "Steps" },
  { value: "picture", label: "Picture" },
  { value: "story", label: "Story" },
];

// The lesson practice page: question, options, feedback, explanation.
export default function LessonPage({ params }) {
  const router = useRouter();
  const {
    ready,
    activeStudent,
    setLanguage,
    setStyle,
    currentQuestion,
    questionNumber,
    totalQuestions,
    feedback,
    submitAnswer,
    nextQuestion,
    isFinished,
  } = useApp();

  const [localStyle, setLocalStyle] = useState("steps");

  // Redirect if no active student once ready.
  useEffect(() => {
    if (ready && !activeStudent) router.replace("/");
  }, [ready, activeStudent, router]);

  // Sync localStyle with the student's saved preference.
  useEffect(() => {
    if (activeStudent?.style) setLocalStyle(activeStudent.style);
  }, [activeStudent?.style]);

  // Navigate to results when the lesson finishes.
  useEffect(() => {
    if (isFinished) router.push("/result");
  }, [isFinished, router]);

  if (!ready || !activeStudent) return null;

  const lang = activeStudent.language ?? "en";
  const content = lessonContent[params.lessonId];

  if (!content || !currentQuestion) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar language={lang} studentName={activeStudent.name} />
        <main className="flex-1 max-w-[1100px] mx-auto px-6 py-12">
          <p className="text-[18px] text-muted">
            {lang === "hi"
              ? "कोई सवाल नहीं मिला। पाठ पहले शुरू करें।"
              : "No question found. Please start the lesson from the subject page."}
          </p>
          <Button
            variant="secondary"
            onClick={() => router.push("/")}
            className="mt-4"
          >
            {lang === "hi" ? "होम पर जाएं" : "Go to home"}
          </Button>
        </main>
      </div>
    );
  }

  // Toggle language for the active student.
  function handleToggleLang() {
    setLanguage(lang === "hi" ? "en" : "hi");
  }

  // Change explanation style both locally and in context.
  function handleStyleChange(s) {
    setLocalStyle(s);
    setStyle(s);
  }

  // Determine the visual state for each option after answering.
  function optionState(opt) {
    if (!feedback) return "default";
    if (opt.id === feedback.correctOptionId) return "correct";
    if (opt.id === feedback.chosenOptionId && !feedback.correct) return "wrong";
    return "disabled";
  }

  // Build a localised misconception object for ExplanationCard.
  function getMisconception() {
    if (!feedback?.misconceptionId) return null;
    const m = content.misconceptions[feedback.misconceptionId];
    if (!m) return null;
    return {
      name: m.name[lang] ?? m.name.en,
      explanation: {
        steps: m.explanation.steps[lang] ?? m.explanation.steps.en,
        picture: m.explanation.picture[lang] ?? m.explanation.picture.en,
        story: m.explanation.story[lang] ?? m.explanation.story.en,
      },
    };
  }

  const misconception = getMisconception();
  const mascotPage = feedback && !feedback.correct ? "wrong" : "lesson";

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar
        language={lang}
        studentName={activeStudent.name}
        onToggleLanguage={handleToggleLang}
      />

      <main className="flex-1 max-w-[1100px] mx-auto w-full px-6 py-10">

        {/* Progress bar */}
        <div className="mb-8">
          <ProgressBar current={questionNumber - 1} total={totalQuestions} />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left column: question + options */}
          <div>
            <p className="text-[13px] font-medium text-muted uppercase tracking-wide mb-3">
              {lang === "hi"
                ? `सवाल ${questionNumber} / ${totalQuestions}`
                : `Question ${questionNumber} of ${totalQuestions}`}
            </p>

            <h2 className="font-heading text-[26px] font-semibold text-ink leading-snug mb-7">
              {currentQuestion.text[lang] ?? currentQuestion.text.en}
            </h2>

            <div className="flex flex-col gap-3 mb-6">
              {currentQuestion.options.map((opt) => (
                <OptionButton
                  key={opt.id}
                  state={optionState(opt)}
                  onClick={() => submitAnswer(opt.id)}
                >
                  {opt.text[lang] ?? opt.text.en}
                </OptionButton>
              ))}
            </div>

            {/* Encouraging line on correct */}
            {feedback?.correct && (
              <p className="text-[17px] text-success font-medium mb-4">
                {lang === "hi" ? "बहुत बढ़िया!" : "Well done!"}
              </p>
            )}

            {/* Next button after answering */}
            {feedback && (
              <Button variant="primary" onClick={nextQuestion}>
                {lang === "hi" ? "अगला सवाल" : "Next question"}
              </Button>
            )}
          </div>

          {/* Right column: mascot + explanation */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-center lg:justify-start">
              <Mascot page={mascotPage} />
            </div>

            {/* Explanation only shown after a wrong answer */}
            {feedback && !feedback.correct && misconception && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[15px] font-medium text-ink">
                    {lang === "hi" ? "समझाते हैं:" : "Let me explain:"}
                  </p>
                  <ToggleGroup
                    options={STYLE_OPTIONS}
                    value={localStyle}
                    onChange={handleStyleChange}
                  />
                </div>
                <ExplanationCard
                  misconception={misconception}
                  style={localStyle}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
