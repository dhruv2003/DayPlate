import React from "react";
import { Meal } from "@/lib/meal-types";
import { StatusBadge } from "./status-badge";
import { Clock, IndianRupee, Flame } from "lucide-react";

export function MealCard({ meal }: { meal: Meal }) {
  const isCook = meal.source === "cook";

  return (
    <div className="neo-box bg-white overflow-hidden flex flex-col">
      <div className={`p-3 border-b-3 border-black flex justify-between items-center ${isCook ? "bg-[#4ecdc4]" : "bg-[#ff7a00]"}`}>
        <h4 className="font-black text-xl uppercase capitalize">{meal.mealType}</h4>
        <StatusBadge status="neutral" text={meal.source} />
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h5 className="text-2xl font-black leading-tight mb-4">{meal.name}</h5>
        
        <div className="flex gap-4 mb-4 text-sm font-bold border-b-2 border-dashed border-gray-300 pb-4">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            {isCook ? `${meal.prepTimeMinutes}m prep` : `${meal.estimatedDeliveryMinutes}m del`}
          </div>
          <div className="flex items-center gap-1">
            <IndianRupee size={16} />
            {meal.estimatedCost} est
          </div>
          {meal.difficulty && (
            <div className="flex items-center gap-1 capitalize">
              <Flame size={16} />
              {meal.difficulty}
            </div>
          )}
        </div>

        <p className="font-medium italic mb-4 bg-[#fff9db] p-2 border-2 border-black">
          {meal.whyItFits}
        </p>

        {isCook && meal.ingredients.length > 0 && (
          <div className="mb-4 flex-1">
            <h6 className="font-black text-sm uppercase mb-1">Ingredients</h6>
            <div className="flex flex-wrap gap-1">
              {meal.ingredients.map((ing, i) => (
                <span key={i} className="text-xs bg-gray-100 border border-black px-2 py-1 rounded-sm">
                  {ing}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto">
          <h6 className="font-black text-sm uppercase mb-1">{isCook ? "Prep Steps" : "Ordering Guidance"}</h6>
          {isCook ? (
            <ul className="text-sm list-disc pl-4 font-medium space-y-1">
              {meal.todos.map((todo, i) => <li key={i}>{todo}</li>)}
            </ul>
          ) : (
            <p className="text-sm font-medium">{meal.orderingGuidance || "Order from your preferred app."}</p>
          )}
        </div>
      </div>

      <div className="p-3 bg-gray-100 border-t-3 border-black text-xs font-bold flex flex-wrap gap-x-4 gap-y-2 justify-between uppercase">
        <span>{meal.macros.calories} Cal</span>
        <span>{meal.macros.proteinGrams}g P</span>
        <span>{meal.macros.carbsGrams}g C</span>
        <span>{meal.macros.fatGrams}g F</span>
      </div>
    </div>
  );
}
