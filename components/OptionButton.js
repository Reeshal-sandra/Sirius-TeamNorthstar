"use client";

// A selectable answer option that shows default, correct, wrong or disabled states.
export default function OptionButton({
  children,
  state = "default",
  onClick,
  disabled = false,
}) {
  const states = {
    default:
      "bg-surface border-ink/15 text-ink hover:border-primary hover:bg-primary/5 cursor-pointer",
    correct:
      "bg-success/8 border-success text-success cursor-default",
    wrong:
      "bg-error/8 border-error text-error cursor-default",
    disabled:
      "bg-surface border-ink/8 text-muted cursor-not-allowed opacity-60",
  };

  return (
    <button
      onClick={state === "default" && !disabled ? onClick : undefined}
      disabled={disabled || state !== "default"}
      className={`w-full text-left px-5 py-3.5 min-h-[44px] rounded-[10px] border-[1.5px] text-[17px] leading-relaxed transition-colors ${states[state] ?? states.default}`}
    >
      {children}
    </button>
  );
}
