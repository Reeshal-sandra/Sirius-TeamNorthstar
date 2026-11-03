"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";

const LANGUAGE_LABELS = { en: "English", hi: "हिन्दी (Hindi)" };
const STYLE_LABELS = { steps: "Step by step" };

export default function ProfilePage() {
  const { ready, activeStudent } = useApp();

  // Wait for localStorage to load, otherwise the page flashes "no student"
  if (!ready) return null;

  if (!activeStudent) {
    return (
      <main className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm border border-ink/10 mt-6">
        <p className="text-ink mb-4">No student profile found yet.</p>
        <Link href="/" className="text-sm font-medium text-primary hover:underline">
          ← Back to Home
        </Link>
      </main>
    );
  }

  const { name, classNo, language, style, progress } = activeStudent;
  const lessonsAttempted = Object.keys(progress ?? {}).length;

  const rows = [
    ["Name", name],
    ["Class", classNo ? `Class ${classNo}` : "—"],
    ["Preferred Language", LANGUAGE_LABELS[language] ?? language ?? "—"],
    ["Learning Style", STYLE_LABELS[style] ?? style ?? "—"],
    ["Lessons Attempted", lessonsAttempted],
  ];

  return (
    <main className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm border border-ink/10 mt-6">
      <Link
        href="/"
        className="inline-block mb-4 text-sm font-medium text-primary hover:underline cursor-pointer"
      >
        ← Back to Home
      </Link>

      <h1 className="text-2xl font-bold mb-4 text-ink">Student Profile</h1>

      <div className="space-y-3 text-sm text-gray-700">
        {rows.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 border-b pb-2">
            <span className="font-medium text-muted">{label}:</span>
            <span className="font-semibold text-ink">{value}</span>
          </div>
        ))}
      </div>
    </main>
  );
}