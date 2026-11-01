"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useParams } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { subjects } from "@/data/subjects";
import Mascot from "@/components/Mascot";
import Navbar from "@/components/Navbar";
import LessonRow from "@/components/LessonRow";
import Button from "@/components/Button";

// Subject page: shows subject name and a row per lesson with best score and start button.
export default function SubjectPage() {
  return (
    <Suspense>
      <SubjectPageInner />
    </Suspense>
  );
}

// Inner component reads URL params — must be inside Suspense for cacheComponents.
function SubjectPageInner() {
  const router = useRouter();
  const params = useParams();
  const { ready, activeStudent, setLanguage, startLesson } = useApp();

  // Wait for context then redirect if no active student.
  useEffect(() => {
    if (ready && !activeStudent) router.replace("/");
  }, [ready, activeStudent, router]);

  if (!ready || !activeStudent) return null;

  const lang = activeStudent.language ?? "en";
  const subjectId = params?.subjectId ?? "";
  const subject = subjects.find((s) => s.id === subjectId);

  if (!subject) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar language={lang} studentName={activeStudent.name} />
        <main className="flex-1 max-w-[1100px] mx-auto px-6 py-12">
          <p className="text-[18px] text-muted">Subject not found.</p>
          <Button variant="secondary" onClick={() => router.push("/")} className="mt-4">
            Back to home
          </Button>
        </main>
      </div>
    );
  }

  // Toggle language and stay on page.
  function handleToggleLang() {
    setLanguage(lang === "hi" ? "en" : "hi");
  }

  // Start a lesson and navigate to its page.
  function handleStart(lessonId) {
    startLesson(lessonId);
    router.push(`/lesson/${lessonId}`);
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar
        language={lang}
        studentName={activeStudent.name}
        onToggleLanguage={handleToggleLang}
      />

      <main className="flex-1 max-w-[1100px] mx-auto w-full px-6 py-12">
        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Mascot */}
          <div className="flex justify-center lg:justify-start pt-4">
            <Mascot page="subject" />
          </div>

          {/* Right: Lessons */}
          <div>
            <p className="text-[15px] text-muted mb-2">
              {lang === "hi" ? "विषय" : "Subject"}
            </p>
            <h1 className="font-heading text-[40px] font-semibold text-ink leading-tight mb-8">
              {subject.name[lang] ?? subject.name.en}
            </h1>

            <div className="bg-surface border-[1.5px] border-ink/10 rounded-[10px] px-5">
              {subject.lessons.map((lesson) => {
                const progress = activeStudent.progress[lesson.id];
                return (
                  <LessonRow
                    key={lesson.id}
                    name={lesson.name[lang] ?? lesson.name.en}
                    bestScore={progress?.bestScore ?? null}
                    onStart={() => handleStart(lesson.id)}
                  />
                );
              })}
            </div>

            <Button
              variant="secondary"
              onClick={() => router.push("/")}
              className="mt-6"
            >
              {lang === "hi" ? "वापस जाएं" : "Back to home"}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
