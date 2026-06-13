import React from "react";
import { MealPlanResponse } from "@/lib/meal-types";
import { MapPin, ExternalLink } from "lucide-react";

export function OrderSuggestions({ options }: { options: MealPlanResponse["orderOptions"] }) {
  if (!options || options.length === 0) return null;

  return (
    <div className="neo-box p-6 bg-white border-t-8 border-[#ff6b6b]">
      <div className="flex items-center gap-3 mb-6">
        <MapPin size={28} className="text-[#ff6b6b]" />
        <h3 className="text-2xl font-black">Order Suggestions</h3>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        {options.map((opt, i) => (
          <div key={i} className="bg-[#fff9db] border-3 border-black p-4 shadow-[4px_4px_0px_0px_#111111]">
            <h4 className="font-black text-xl mb-1 uppercase text-[#ff6b6b]">{opt.mealType}</h4>
            <p className="text-lg font-bold mb-4">{opt.recommendedDishType}</p>
            
            <div className="bg-white border-2 border-black p-3 mb-4 flex justify-between items-center text-sm font-bold">
              <span>{opt.estimatedCostRange}</span>
              <span>{opt.macroEstimate.calories} Cal | {opt.macroEstimate.proteinGrams}g P</span>
            </div>

            <div className="mb-4">
              <p className="text-xs font-black uppercase mb-2">Search Prompt</p>
              <div className="bg-gray-100 p-2 font-mono text-sm border border-black flex justify-between items-center">
                {opt.searchQuery}
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase mb-2">Rules</p>
              <ul className="list-disc list-inside text-sm font-medium space-y-1">
                {opt.selectionRules.map((rule, j) => (
                  <li key={j}>{rule}</li>
                ))}
              </ul>
            </div>
            
            <button className="w-full mt-4 neo-btn py-2 flex justify-center items-center gap-2" onClick={() => alert("Zomato/Swiggy integration coming soon!")}>
              Order Now <ExternalLink size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
