"use client";

import React, { useState } from "react";
import { MealPlanRequest } from "@/lib/meal-types";

export function DayForm({ 
  onSubmit, 
  onLoadDemo, 
  onClear, 
  isLoading 
}: { 
  onSubmit: (data: MealPlanRequest) => void;
  onLoadDemo: () => void;
  onClear: () => void;
  isLoading: boolean;
}) {
  const [formData, setFormData] = useState<MealPlanRequest>({
    dayType: "wfh",
    cookingAbility: "hybrid",
    budget: 300,
    healthGoal: "balanced",
    dietPreference: "no_preference",
    availableIngredients: "",
    allergies: "",
    morningMinutes: 15,
    lunchMinutes: 30,
    eveningMinutes: 45,
    location: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: ["budget", "morningMinutes", "lunchMinutes", "eveningMinutes"].includes(name) 
        ? Number(value) 
        : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="neo-box p-6 md:p-8 bg-white mb-8">
      <h3 className="text-3xl font-black mb-6 uppercase border-b-4 border-black pb-4 inline-block">Tell us your day</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block font-black uppercase text-sm mb-2" htmlFor="dayType">Day Type</label>
          <select name="dayType" id="dayType" value={formData.dayType} onChange={handleChange} className="neo-input w-full p-3 font-bold">
            <option value="wfh">WFH</option>
            <option value="office">Office</option>
            <option value="travel">Travel</option>
            <option value="college">College</option>
            <option value="free_day">Free Day</option>
          </select>
        </div>

        <div>
          <label className="block font-black uppercase text-sm mb-2" htmlFor="cookingAbility">Cooking Ability</label>
          <select name="cookingAbility" id="cookingAbility" value={formData.cookingAbility} onChange={handleChange} className="neo-input w-full p-3 font-bold">
            <option value="full_cooking">Full Cooking</option>
            <option value="quick_cooking">Quick Cooking Only</option>
            <option value="hybrid">Hybrid</option>
            <option value="cannot_cook">Cannot Cook</option>
          </select>
        </div>

        <div>
          <label className="block font-black uppercase text-sm mb-2" htmlFor="healthGoal">Health Goal</label>
          <select name="healthGoal" id="healthGoal" value={formData.healthGoal} onChange={handleChange} className="neo-input w-full p-3 font-bold">
            <option value="balanced">Balanced</option>
            <option value="high_protein">High Protein</option>
            <option value="weight_loss">Weight Loss</option>
            <option value="muscle_gain">Muscle Gain</option>
            <option value="light_meals">Light Meals</option>
            <option value="budget_meals">Budget Meals</option>
          </select>
        </div>

        <div>
          <label className="block font-black uppercase text-sm mb-2" htmlFor="dietPreference">Diet Preference</label>
          <select name="dietPreference" id="dietPreference" value={formData.dietPreference} onChange={handleChange} className="neo-input w-full p-3 font-bold">
            <option value="vegetarian">Vegetarian</option>
            <option value="non_vegetarian">Non-Vegetarian</option>
            <option value="eggetarian">Eggetarian</option>
            <option value="vegan">Vegan</option>
            <option value="jain">Jain</option>
            <option value="no_preference">No Preference</option>
          </select>
        </div>

        <div>
          <label className="block font-black uppercase text-sm mb-2" htmlFor="budget">Daily Budget (INR)</label>
          <input type="number" name="budget" id="budget" value={formData.budget} onChange={handleChange} placeholder="300" className="neo-input w-full p-3 font-bold" min="50" required />
        </div>

        <div>
          <label className="block font-black uppercase text-sm mb-2" htmlFor="location">Area/Location (Optional)</label>
          <input type="text" name="location" id="location" value={formData.location || ""} onChange={handleChange} placeholder="Indiranagar, Bengaluru" className="neo-input w-full p-3 font-bold" />
        </div>
      </div>

      <div className="mb-6 bg-[#fff9db] p-4 border-3 border-black shadow-[4px_4px_0px_0px_#111111]">
        <h4 className="font-black uppercase mb-4 flex items-center gap-2">
          Time Available (Minutes)
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold mb-1" htmlFor="morningMinutes">Morning</label>
            <input type="number" name="morningMinutes" id="morningMinutes" value={formData.morningMinutes} onChange={handleChange} className="neo-input w-full p-2 font-bold text-center" min="0" required />
          </div>
          <div>
            <label className="block text-xs font-bold mb-1" htmlFor="lunchMinutes">Lunch</label>
            <input type="number" name="lunchMinutes" id="lunchMinutes" value={formData.lunchMinutes} onChange={handleChange} className="neo-input w-full p-2 font-bold text-center" min="0" required />
          </div>
          <div>
            <label className="block text-xs font-bold mb-1" htmlFor="eveningMinutes">Evening</label>
            <input type="number" name="eveningMinutes" id="eveningMinutes" value={formData.eveningMinutes} onChange={handleChange} className="neo-input w-full p-2 font-bold text-center" min="0" required />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block font-black uppercase text-sm mb-2" htmlFor="availableIngredients">Available Ingredients</label>
          <textarea name="availableIngredients" id="availableIngredients" value={formData.availableIngredients} onChange={handleChange} placeholder="rice, dal, eggs, bread, curd, tomato" className="neo-input w-full p-3 font-bold h-24 resize-none" />
        </div>
        <div>
          <label className="block font-black uppercase text-sm mb-2" htmlFor="allergies">Avoid / Allergies</label>
          <textarea name="allergies" id="allergies" value={formData.allergies} onChange={handleChange} placeholder="peanuts, dairy, onion, garlic, spicy food" className="neo-input w-full p-3 font-bold h-24 resize-none" />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 pt-4 border-t-3 border-black">
        <button type="submit" disabled={isLoading} className="neo-btn px-8 py-4 text-xl flex-1 min-w-[200px]">
          {isLoading ? "Planning..." : "Plan My Plate"}
        </button>
        <button type="button" onClick={onLoadDemo} disabled={isLoading} className="neo-btn px-6 py-4 bg-[#ffe66d] text-black border-black border-3">
          Load Demo Day
        </button>
        <button type="button" onClick={() => {
          setFormData({
            dayType: "wfh", cookingAbility: "hybrid", budget: 300, healthGoal: "balanced", dietPreference: "no_preference", availableIngredients: "", allergies: "", morningMinutes: 15, lunchMinutes: 30, eveningMinutes: 45, location: ""
          });
          onClear();
        }} disabled={isLoading} className="neo-btn px-6 py-4 bg-white text-black border-black border-3">
          Clear
        </button>
      </div>
    </form>
  );
}
