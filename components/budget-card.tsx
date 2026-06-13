import React from "react";
import { StatusBadge } from "./status-badge";
import { MealPlanResponse } from "@/lib/meal-types";

export function BudgetCard({ budget }: { budget: MealPlanResponse["budget"] }) {
  let badgeStatus: "success" | "warning" | "danger" = "success";
  if (budget.status === "tight") badgeStatus = "warning";
  if (budget.status === "over_budget") badgeStatus = "danger";

  return (
    <div className="neo-box p-6 bg-white flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-black">Budget</h3>
        <StatusBadge status={badgeStatus} text={budget.status.replace("_", " ")} />
      </div>
      <div className="flex justify-between items-end mb-4 border-b-2 border-black pb-4">
        <div>
          <p className="text-sm font-bold uppercase text-gray-600">Daily Limit</p>
          <p className="text-3xl font-black">₹{budget.dailyBudget}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold uppercase text-gray-600">Est. Total</p>
          <p className="text-3xl font-black">₹{budget.estimatedTotalCost}</p>
        </div>
      </div>
      <p className="font-medium mb-4 flex-1">{budget.reason}</p>
      {budget.savingTips.length > 0 && (
        <div className="bg-[#fff9db] border-2 border-black p-3 shadow-[2px_2px_0px_0px_#111111]">
          <p className="font-bold mb-1">Saving Tips:</p>
          <ul className="list-disc list-inside text-sm">
            {budget.savingTips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
