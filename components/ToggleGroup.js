"use client";

// A group of toggle buttons for switching between explanation styles.
export default function ToggleGroup({ options, value, onChange }) {
  return (
    <div className="inline-flex border-[1.5px] border-ink/10 rounded-[10px] overflow-hidden">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-4 min-h-[40px] text-[15px] font-medium transition-colors cursor-pointer ${
            value === opt.value
              ? "bg-primary text-white"
              : "bg-surface text-ink hover:bg-[#F0ECE3]"
          } ${opt.value !== options[0].value ? "border-l-[1.5px] border-ink/10" : ""}`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
