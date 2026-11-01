"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { subjects } from "@/data/subjects";
import Mascot from "@/components/Mascot";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";

// Find the subject id that contains a given lesson id.
function findSubjectId(lessonId) {
  for (const subj of subjects) {
    if (subj.lessons.some((l) => l.id === lessonId)) return subj.id;
  }
  return null;
}

// Result page: score, strengths, misconceptions, career line, parent note, retry.
export default function ResultPage() {
  const router = useRouter();
  const {
    ready,
    activeStudent,
    results,
    lessonId,
    setLanguage,
    startLesson,
  } = useApp();

  // Snapshot the lessonId so Try Again works even after context transitions.
  const lessonIdRef = useRef(null);
  useEffect(() => {
    if (lessonId) lessonIdRef.current = lessonId;
  }, [lessonId]);

  // Redirect if no active student.
  useEffect(() => {
    if (ready && !activeStudent) router.replace("/");
  }, [ready, activeStudent, router]);

  // Redirect if there are no results to show.
  useEffect(() => {
    if (ready && activeStudent && !results) router.replace("/");
  }, [ready, activeStudent, results, router]);

  if (!ready || !activeStudent || !results) return null;

  const lang = activeStudent.language ?? "en";

  function handleToggleLang() {
    setLanguage(lang === "hi" ? "en" : "hi");
  }

  function handleTryAgain() {
    const id = lessonIdRef.current;
    if (id) {
      startLesson(id);
      router.push(`/lesson/${id}`);
    } else {
      router.push("/");
    }
  }

  const subjectId = lessonIdRef.current
    ? findSubjectId(lessonIdRef.current)
    : null;

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

          {/* Left: Mascot + score */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <Mascot page="result" />

            <div>
              <p className="text-[15px] text-muted mb-1">
                {lang === "hi" ? "तुम्हारा स्कोर" : "Your score"}
              </p>
              <p className="font-heading text-[56px] font-semibold text-ink leading-none">
                {results.score}
                <span className="text-[28px] text-muted font-normal">
                  /{results.total}
                </span>
              </p>
              <p className="text-[15px] text-muted mt-1">
                {lang === "hi"
                  ? `सबसे ऊंचा स्तर: ${results.levelReached}`
                  : `Highest level reached: ${results.levelReached}`}
              </p>
            </div>
          </div>

          {/* Right: Details */}
          <div>
            {/* Strengths */}
            <section className="mb-8">
              <h2 className="font-heading text-[28px] font-semibold text-ink mb-4">
                {lang === "hi" ? "अच्छा किया" : "What you did well"}
              </h2>
              <div className="flex flex-wrap gap-2">
                {results.strengths.map((s, i) => (
                  <Badge key={i} color="success">
                    {s}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Misconceptions */}
            {results.misconceptionIds.length > 0 && (
              <section className="mb-8">
                <h2 className="font-heading text-[22px] font-semibold text-ink mb-3">
                  {lang === "hi" ? "थोड़ा और अभ्यास करें" : "Worth more practice"}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {results.misconceptionIds.map((mid) => (
                    <Badge key={mid} color="accent">
                      {/* Show the misconception id as a human-readable hint */}
                      {mid.replace(/_/g, " ")}
                    </Badge>
                  ))}
                </div>
              </section>
            )}

            {/* Career line */}
            {results.career && (
              <section className="mb-8">
                <p className="text-[16px] text-muted italic leading-relaxed border-l-[3px] border-accent pl-4">
                  {results.career}
                </p>
              </section>
            )}

            {/* Parent note */}
            <section className="mb-8">
              <Card className="bg-background border-primary/30">
                <p className="text-[13px] font-medium text-muted uppercase tracking-wide mb-3">
                  {lang === "hi" ? "माता-पिता के लिए नोट" : "For parents"}
                </p>
                <p className="text-[16px] text-ink leading-relaxed">
                  {results.parentNote}
                </p>
              </Card>
            </section>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" onClick={handleTryAgain}>
                {lang === "hi" ? "फिर से कोशिश करें" : "Try again"}
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  router.push(subjectId ? `/subject/${subjectId}` : "/")
                }
              >
                {lang === "hi" ? "पाठ पर वापस जाएं" : "Back to subjects"}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
