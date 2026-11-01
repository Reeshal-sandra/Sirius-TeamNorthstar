// Reusable button with primary and secondary variants.
export default function Button({
  children,
  variant = "primary",
  onClick,
  disabled = false,
  className = "",
  type = "button",
}) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-[10px] border-[1.5px] px-6 min-h-[44px] text-[15px] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary border-primary text-white hover:bg-[#174A39] hover:border-[#174A39]",
    secondary:
      "bg-surface border-ink text-ink hover:bg-[#F0ECE3]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
    >
      {children}
    </button>
  );
}
