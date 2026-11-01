import Badge from "./Badge";
import Button from "./Button";

// A single lesson row showing name, best score, and a start button.
export default function LessonRow({ name, bestScore, onStart, className = "" }) {
  return (
    <div
      className={`flex items-center justify-between py-4 border-b-[1.5px] border-ink/8 last:border-b-0 ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="text-[17px] text-ink">{name}</span>
        {bestScore != null && bestScore > 0 && (
          <Badge color="success">Best: {bestScore}/6</Badge>
        )}
      </div>
      <Button variant="primary" onClick={onStart}>
        Start
      </Button>
    </div>
  );
}
