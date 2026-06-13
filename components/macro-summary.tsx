import React from "react";
import { MealPlanResponse } from "@/lib/meal-types";

export function MacroSummary({
  macros,
  healthNote,
}: {
  macros: MealPlanResponse["macroSummary"];
  healthNote: MealPlanResponse["healthNote"];
}) {
  return (
    <div className="neo-box p-6 bg-[#ffe66d] flex flex-col">
      <h3 className="text-2xl font-black mb-4">Estimated Macros</h3>
      <div className="grid grid-cols-2 gap-4 mb-6 flex-1">
        <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_#111111]">
          <p className="text-xs font-bold uppercase">Calories</p>
          <p className="text-2xl font-black">{macros.estimatedCalories}</p>
        </div>
        <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_#111111]">
          <p className="text-xs font-bold uppercase">Protein</p>
          <p className="text-2xl font-black">{macros.proteinGrams}g</p>
        </div>
        <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_#111111]">
          <p className="text-xs font-bold uppercase">Carbs</p>
          <p className="text-2xl font-black">{macros.carbsGrams}g</p>
        </div>
        <div className="bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_#111111]">
          <p className="text-xs font-bold uppercase">Fat / Fiber</p>
          <p className="text-2xl font-black">{macros.fatGrams}g / {macros.fiberGrams}g</p>
        </div>
      </div>
      <p className="font-bold bg-white border-2 border-black p-2 mb-2">Verdict: {macros.verdict}</p>
      <div className="text-xs font-medium opacity-80 mt-auto">
        {macros.notes.map((note, i) => (
          <p key={i}>* {note}</p>
        ))}
        <p>* {healthNote}</p>
      </div>
    </div>
  );
}
