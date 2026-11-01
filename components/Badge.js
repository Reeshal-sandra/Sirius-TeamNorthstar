// A small inline label showing a status or category.
export default function Badge({ children, color = "muted", className = "" }) {
  const colors = {
    muted: "bg-muted/10 text-muted border-muted/20",
    success: "bg-success/10 text-success border-success/20",
    error: "bg-error/10 text-error border-error/20",
    accent: "bg-accent/10 text-accent border-accent/20",
    primary: "bg-primary/10 text-primary border-primary/20",
  };

  return (
    <span
      className={`inline-block text-[13px] font-medium px-2.5 py-0.5 rounded-[6px] border-[1.5px] ${colors[color] ?? colors.muted} ${className}`}
    >
      {children}
    </span>
  );
}
