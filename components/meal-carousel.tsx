"use client";

import React, { useState } from "react";
import { Meal } from "@/lib/meal-types";
import { MealCard } from "./meal-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function MealCarousel({ meals }: { meals: Meal[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % meals.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + meals.length) % meals.length);

  if (!meals || meals.length === 0) return null;

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between items-end gap-4 mb-4">
        <h3 className="text-3xl font-black uppercase border-b-4 border-black pb-2 inline-block">The Plate</h3>
        
        <div className="flex items-center gap-4 bg-[#fff9db] border-3 border-black p-2 shadow-[2px_2px_0px_0px_#111111]">
          <button 
            onClick={prev} 
            className="neo-btn p-1 bg-white hover:bg-gray-100 flex items-center justify-center"
            aria-label="Previous meal"
          >
            <ChevronLeft size={24} className="text-black" />
          </button>
          
          <span className="font-black w-24 text-center uppercase tracking-wider">
            {meals[currentIndex].mealType}
          </span>
          
          <button 
            onClick={next} 
            className="neo-btn p-1 bg-[#ff7a00] hover:bg-[#e66d00] flex items-center justify-center"
            aria-label="Next meal"
          >
            <ChevronRight size={24} className="text-black" />
          </button>
        </div>
      </div>
      
      <div className="animate-in fade-in slide-in-from-right-4 duration-300" key={currentIndex}>
        <MealCard meal={meals[currentIndex]} />
      </div>
      
      <div className="flex justify-center mt-6 gap-3">
        {meals.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            className={`h-4 w-4 rounded-full border-2 border-black transition-all ${
              i === currentIndex ? 'bg-[#ff7a00] scale-125 shadow-[2px_2px_0px_0px_#111111]' : 'bg-white hover:bg-gray-200'
            }`}
            aria-label={`Go to meal ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
