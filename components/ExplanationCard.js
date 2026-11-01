// Shows a misconception explanation in the selected style (steps, picture, or story).
export default function ExplanationCard({ misconception, style, className = "" }) {
  if (!misconception) return null;

  const explanation = misconception.explanation?.[style] ?? misconception.explanation?.steps ?? "";

  return (
    <div
      className={`bg-surface border-[1.5px] border-ink/10 rounded-[10px] p-5 ${className}`}
    >
      <p className="text-[13px] font-medium text-muted mb-2 uppercase tracking-wide">
        {style === "picture" ? "Picture" : style === "story" ? "Story" : "Steps"}
      </p>
      <p className="text-[15px] font-medium text-ink mb-3">
        {misconception.name}
      </p>
      <p className="text-[16px] leading-relaxed text-ink/85 whitespace-pre-line">
        {explanation}
      </p>
    </div>
  );
}
