// A white surface card with a thin border and rounded corners.
export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-surface border-[1.5px] border-ink/10 rounded-[10px] p-6 ${className}`}
    >
      {children}
    </div>
  );
}
