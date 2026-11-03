
"use client";

import Link from "next/link";

// Top navigation bar with logo, language toggle, and student name.
export default function Navbar({ language, studentName, onToggleLanguage }) {
  return (
    <nav className="w-full border-b-[1.5px] border-ink/10 bg-surface">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 h-14">
        {/* Clickable logo leading back home */}
        <Link
          href="/"
          className="font-heading text-[22px] font-semibold text-primary tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
        >
          Sirius
        </Link>

        <div className="flex items-center gap-4">
          {onToggleLanguage && (
            <button
              onClick={onToggleLanguage}
              className="text-[15px] font-medium text-muted hover:text-ink border-[1.5px] border-ink/10 rounded-[10px] px-3 min-h-[36px] transition-colors cursor-pointer"
            >
              {language === "hi" ? "EN" : "हिं"}
            </button>
          )}

          {studentName && (
            <Link
              href="/profile"
              className="text-[15px] text-ink font-medium hover:underline cursor-pointer transition-colors"
            >
              {studentName}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}