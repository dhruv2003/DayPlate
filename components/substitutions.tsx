import React from "react";
import { MealPlanResponse } from "@/lib/meal-types";
import { RefreshCcw } from "lucide-react";

export function Substitutions({ subs }: { subs: MealPlanResponse["substitutions"] }) {
  if (!subs || subs.length === 0) return null;

  return (
    <div className="neo-box p-6 bg-[#4ecdc4]">
      <div className="flex items-center gap-3 mb-6">
        <RefreshCcw size={28} />
        <h3 className="text-2xl font-black">Substitutions</h3>
      </div>
      
      <div className="space-y-4">
        {subs.map((sub, i) => (
          <div key={i} className="bg-white border-3 border-black p-4 shadow-[4px_4px_0px_0px_#111111] rounded-sm">
            <div className="flex flex-wrap items-center gap-3 mb-2 font-black text-lg">
              <span className="line-through opacity-70">{sub.original}</span>
              <span>→</span>
              <span className="text-[#ff7a00]">{sub.alternatives.join(" or ")}</span>
            </div>
            <p className="text-sm font-medium italic">{sub.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
