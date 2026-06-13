import React from "react";
import { Loader2 } from "lucide-react";

export function LoadingState() {
  return (
    <div className="neo-box p-12 flex flex-col items-center justify-center text-center bg-[#4ecdc4] animate-pulse h-64">
      <Loader2 size={48} className="animate-spin mb-4" />
      <h3 className="text-2xl font-black mb-2">Cooking up a plan...</h3>
      <p className="text-lg font-medium">Balancing taste, time, macros, and budget…</p>
    </div>
  );
}
