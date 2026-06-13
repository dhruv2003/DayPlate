import React from "react";
import { MealPlanResponse } from "@/lib/meal-types";
import { ShoppingCart } from "lucide-react";

export function GroceryList({ grocery }: { grocery: MealPlanResponse["groceryList"] }) {
  const hasItems = grocery.mustBuy.length > 0 || grocery.niceToHave.length > 0;
  
  if (!hasItems) return null;

  return (
    <div className="neo-box p-6 bg-white">
      <div className="flex items-center gap-3 mb-6">
        <ShoppingCart size={28} />
        <h3 className="text-2xl font-black">Grocery List</h3>
      </div>
      
      {grocery.mustBuy.length > 0 && (
        <div className="mb-6">
          <h4 className="font-black uppercase mb-3 text-[#ff6b6b]">Must Buy</h4>
          <ul className="space-y-3">
            {grocery.mustBuy.map((item, i) => (
              <li key={i} className="flex justify-between items-start pb-2 border-b-2 border-dashed border-gray-300">
                <div>
                  <p className="font-bold">{item.item}</p>
                  <p className="text-xs font-medium text-gray-600">{item.reason}</p>
                </div>
                <div className="font-black text-sm whitespace-nowrap ml-4">
                  ₹{item.estimatedCost}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {grocery.niceToHave.length > 0 && (
        <div className="mb-6">
          <h4 className="font-black uppercase mb-3 text-[#ff7a00]">Nice to Have</h4>
          <ul className="space-y-3">
            {grocery.niceToHave.map((item, i) => (
              <li key={i} className="flex justify-between items-start pb-2 border-b-2 border-dashed border-gray-300">
                <div>
                  <p className="font-bold">{item.item}</p>
                  <p className="text-xs font-medium text-gray-600">{item.reason}</p>
                </div>
                <div className="font-black text-sm whitespace-nowrap ml-4">
                  ₹{item.estimatedCost}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {grocery.alreadyAvailable.length > 0 && (
        <div>
          <h4 className="font-black uppercase mb-3 text-[#2ecc71]">Already Have</h4>
          <div className="flex flex-wrap gap-2">
            {grocery.alreadyAvailable.map((item, i) => (
              <span key={i} className="text-xs font-bold uppercase bg-[#fff9db] border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_#111111]">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
