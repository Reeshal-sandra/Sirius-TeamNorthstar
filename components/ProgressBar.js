// A horizontal progress bar showing how far through a lesson the student is.
export default function ProgressBar({ current, total, className = "" }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between text-[13px] text-muted mb-1.5">
        <span>
          {current} / {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div className="w-full h-2 bg-ink/8 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
