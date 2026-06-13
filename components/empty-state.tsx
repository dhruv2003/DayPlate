import React from "react";
import { Utensils } from "lucide-react";

export function EmptyState() {
  return (
    <div className="neo-box p-6 flex flex-col items-center justify-center text-center bg-white border-dashed h-64">
      <div className="w-16 h-16 bg-[#ffe66d] border-3 border-[#111111] rounded-full flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_#111111]">
        <Utensils size={32} />
      </div>
      <h3 className="text-2xl font-black mb-2">Ready to plan?</h3>
      <p className="text-lg font-medium text-gray-700">Tell us your day. We’ll build the plate.</p>
    </div>
  );
}
