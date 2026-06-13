import React from "react";

export function StatusBadge({ status, text }: { status: "success" | "warning" | "danger" | "neutral", text: string }) {
  const colors = {
    success: "bg-[#2ecc71] text-black",
    warning: "bg-[#ffe66d] text-black",
    danger: "bg-[#ff6b6b] text-white",
    neutral: "bg-white text-black"
  };

  return (
    <span className={`px-2 py-1 text-xs font-bold uppercase tracking-wider border-2 border-[#111111] shadow-[2px_2px_0px_0px_#111111] rounded-sm ${colors[status]}`}>
      {text}
    </span>
  );
}
