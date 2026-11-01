"use client";

import { useState } from "react";

// Shows the Sirius mascot image for the current page, hiding gracefully if missing.
export default function Mascot({ page = "home", className = "" }) {
  const [visible, setVisible] = useState(true);

  const fileMap = {
    home: "/mascot/home.png",
    subject: "/mascot/subject.png",
    lesson: "/mascot/lesson.png",
    result: "/mascot/result.png",
    wrong: "/mascot/wrong.png",
  };

  const src = fileMap[page] ?? fileMap.lesson;
  const size = page === "home" ? 200 : 140;

  if (!visible) return null;

  return (
    <img
      src={src}
      alt="Sirius mascot"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      onError={() => {
        if (page === "wrong") {
          setVisible(true);
          // Try lesson fallback — swap src directly
          const img = document.querySelector(`img[alt="Sirius mascot"]`);
          if (img && img.src.includes("wrong.png")) {
            img.src = fileMap.lesson;
            img.onerror = () => setVisible(false);
          }
        } else {
          setVisible(false);
        }
      }}
    />
  );
}
