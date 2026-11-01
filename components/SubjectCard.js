import Badge from "./Badge";

// A subject card showing the subject name, lesson count, colored strip, and progress.
export default function SubjectCard({
  name,
  lessonCount,
  completedCount = 0,
  color = "muted",
  onClick,
  className = "",
}) {
  const stripColors = {
    maths: "bg-maths",
    science: "bg-science",
    english: "bg-english",
  };

  return (
    <button
      onClick={onClick}
      className={`w-full text-left bg-surface border-[1.5px] border-ink/10 rounded-[10px] overflow-hidden transition-colors hover:border-ink/25 cursor-pointer ${className}`}
    >
      <div className={`h-[6px] ${stripColors[color] ?? "bg-muted"}`} />
      <div className="p-5">
        <h3 className="font-heading text-[20px] font-semibold text-ink mb-2">
          {name}
        </h3>
        <div className="flex items-center gap-3">
          <span className="text-[15px] text-muted">
            {lessonCount} {lessonCount === 1 ? "lesson" : "lessons"}
          </span>
          {completedCount > 0 && (
            <Badge color="success">
              {completedCount} done
            </Badge>
          )}
        </div>
      </div>
    </button>
  );
}
