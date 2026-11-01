"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { subjects } from "@/data/subjects";
import Mascot from "@/components/Mascot";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import SubjectCard from "@/components/SubjectCard";

// Compute how many lessons a student has completed in a subject.
function completedCount(subject, progress) {
  return subject.lessons.filter(
    (l) => (progress[l.id]?.attempts ?? 0) > 0
  ).length;
}

// Compute the most recently attempted lesson name across all subjects for a student.
function recentLessonName(progress, lang) {
  let latest = null;
  let latestAttempts = 0;
  for (const subj of subjects) {
    for (const lesson of subj.lessons) {
      const p = progress[lesson.id];
      if (p && p.attempts > latestAttempts) {
        latestAttempts = p.attempts;
        latest = lesson.name[lang] ?? lesson.name.en;
      }
    }
  }
  return latest;
}

// The home page: student creation form OR dashboard for the active student.
export default function HomePage() {
  const router = useRouter();
  const {
    ready,
    students,
    activeStudent,
    createStudent,
    switchStudent,
    signOutStudent,
    setLanguage,
  } = useApp();

  const [name, setName] = useState("");
  const [classNo, setClassNo] = useState("6");
  const [language, setLang] = useState("en");
  const [error, setError] = useState("");

  // Don't render until localStorage has loaded.
  if (!ready) return null;

  // Handle new student form submission.
  function handleCreate(e) {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter a name.");
      return;
    }
    createStudent({ name: name.trim(), classNo, language });
    setError("");
  }

  // Toggle language for the active student.
  function handleToggleLang() {
    const newLang = activeStudent.language === "hi" ? "en" : "hi";
    setLanguage(newLang);
  }

  const lang = activeStudent?.language ?? "en";
  const existingStudents = Object.values(students);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar
        language={activeStudent?.language}
        studentName={activeStudent?.name}
        onToggleLanguage={activeStudent ? handleToggleLang : null}
      />

      <main className="flex-1 max-w-[1100px] mx-auto w-full px-6 py-12">
        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Mascot */}
          <div className="flex justify-center lg:justify-start pt-4">
            <Mascot page="home" />
          </div>

          {/* Right: Content */}
          <div>
            {activeStudent ? (
              /* ── Dashboard ── */
              <div>
                <h1 className="font-heading text-[40px] font-semibold text-ink leading-tight mb-2">
                  {lang === "hi"
                    ? `नमस्ते, ${activeStudent.name}`
                    : `Hello, ${activeStudent.name}`}
                </h1>
                <p className="text-[18px] text-muted mb-8">
                  {lang === "hi"
                    ? `कक्षा ${activeStudent.classNo} · आज क्या पढ़ना है?`
                    : `Class ${activeStudent.classNo} · What would you like to study today?`}
                </p>

                {/* Subject cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {subjects.map((subj) => (
                    <SubjectCard
                      key={subj.id}
                      name={subj.name[lang] ?? subj.name.en}
                      lessonCount={subj.lessons.length}
                      completedCount={completedCount(subj, activeStudent.progress)}
                      color={subj.id}
                      onClick={() => router.push(`/subject/${subj.id}`)}
                    />
                  ))}
                </div>

                {/* Recent progress line */}
                {(() => {
                  const recent = recentLessonName(activeStudent.progress, lang);
                  return recent ? (
                    <p className="text-[15px] text-muted mb-8">
                      {lang === "hi"
                        ? `आखिरी बार पढ़ा: ${recent}`
                        : `Last studied: ${recent}`}
                    </p>
                  ) : null;
                })()}

                <Button variant="secondary" onClick={signOutStudent}>
                  {lang === "hi" ? "छात्र बदलें" : "Switch student"}
                </Button>
              </div>
            ) : (
              /* ── Welcome + create form ── */
              <div>
                <h1 className="font-heading text-[40px] font-semibold text-ink leading-tight mb-3">
                  Welcome to Sirius
                </h1>
                <p className="text-[18px] text-muted mb-8">
                  A calm place to practise Maths, Science and English.
                </p>

                <form onSubmit={handleCreate} className="mb-10">
                  <div className="mb-4">
                    <label className="block text-[15px] font-medium text-ink mb-1.5" htmlFor="student-name">
                      Your name
                    </label>
                    <input
                      id="student-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priya"
                      className="w-full border-[1.5px] border-ink/15 rounded-[10px] px-4 py-2.5 text-[17px] text-ink bg-surface focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-[15px] font-medium text-ink mb-1.5" htmlFor="class-select">
                        Class
                      </label>
                      <select
                        id="class-select"
                        value={classNo}
                        onChange={(e) => setClassNo(e.target.value)}
                        className="w-full border-[1.5px] border-ink/15 rounded-[10px] px-4 py-2.5 text-[17px] text-ink bg-surface focus:outline-none focus:border-primary"
                      >
                        <option value="6">Class 6</option>
                        <option value="7">Class 7</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[15px] font-medium text-ink mb-1.5" htmlFor="lang-select">
                        Language
                      </label>
                      <select
                        id="lang-select"
                        value={language}
                        onChange={(e) => setLang(e.target.value)}
                        className="w-full border-[1.5px] border-ink/15 rounded-[10px] px-4 py-2.5 text-[17px] text-ink bg-surface focus:outline-none focus:border-primary"
                      >
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                      </select>
                    </div>
                  </div>

                  {error && (
                    <p className="text-[15px] text-error mb-3">{error}</p>
                  )}

                  <Button type="submit" variant="primary">
                    Start learning
                  </Button>
                </form>

                {/* Existing students */}
                {existingStudents.length > 0 && (
                  <div>
                    <p className="text-[15px] font-medium text-muted mb-3 uppercase tracking-wide">
                      Students on this device
                    </p>
                    <div className="flex flex-col gap-2">
                      {existingStudents.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => switchStudent(s.id)}
                          className="text-left border-[1.5px] border-ink/10 rounded-[10px] px-4 py-3 bg-surface hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer"
                        >
                          <span className="text-[17px] text-ink font-medium">
                            {s.name}
                          </span>
                          <span className="text-[14px] text-muted ml-2">
                            Class {s.classNo}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
