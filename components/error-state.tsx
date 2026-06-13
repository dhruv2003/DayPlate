import React from "react";
import { Flame } from "lucide-react";

export function ErrorState({ message, onRetry }: { message?: string, onRetry: () => void }) {
  return (
    <div className="neo-box p-12 flex flex-col items-center justify-center text-center bg-[#ff6b6b] text-white h-64">
      <Flame size={48} className="mb-4" />
      <h3 className="text-2xl font-black mb-2">Kitchen smoke detected!</h3>
      <p className="text-lg font-medium mb-6">{message || "Something went wrong. Try again."}</p>
      <button onClick={onRetry} className="neo-btn px-6 py-2 bg-white text-black text-lg">
        Retry
      </button>
    </div>
  );
}
