"use client";

import React, { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { HeroSection } from "@/components/hero-section";
import { DayForm } from "@/components/day-form";
import { EmptyState } from "@/components/empty-state";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { MealCarousel } from "@/components/meal-carousel";
import { MacroSummary } from "@/components/macro-summary";
import { BudgetCard } from "@/components/budget-card";
import { Timeline } from "@/components/timeline";
import { GroceryList } from "@/components/grocery-list";
import { Substitutions } from "@/components/substitutions";
import { OrderSuggestions } from "@/components/order-suggestions";
import { StatusBadge } from "@/components/status-badge";
import { MealPlanRequest, MealPlanResponse } from "@/lib/meal-types";

export default function Home() {
  const [plan, setPlan] = useState<MealPlanResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDemo, setIsDemo] = useState(false);

  const fetchMealPlan = async (requestData: MealPlanRequest) => {
    setIsLoading(true);
    setError(null);
    setPlan(null);
    setIsDemo(false);
    
    try {
      const res = await fetch("/api/meal-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData)
      });
      
      if (!res.ok) {
        throw new Error("Failed to fetch plan");
      }
      
      const data = await res.json();
      setPlan(data);
      
      // Simple check to see if it's the mock data
      if (data.dayDiagnosis.summary === "Busy WFH day with limited cooking time.") {
        setIsDemo(true);
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadDemo = () => {
    // Submit a dummy request that might hit the real API or mock depending on API key, 
    // but typically demo means we just want to see the mock fast, or prepopulate.
    // The prompt says "If GEMINI_API_KEY is missing or API fails, show mock result and a small warning".
    // Let's prepopulate the form with a WFH day and submit.
    const demoData: MealPlanRequest = {
      dayType: "wfh",
      cookingAbility: "hybrid",
      budget: 500,
      healthGoal: "high_protein",
      dietPreference: "vegetarian",
      availableIngredients: "rice, moong dal, eggs, onion, tomato, curd",
      allergies: "none",
      morningMinutes: 15,
      lunchMinutes: 0,
      eveningMinutes: 45,
      location: "Indiranagar, Bengaluru"
    };
    fetchMealPlan(demoData);
  };

  const handleClear = () => {
    setPlan(null);
    setError(null);
    setIsDemo(false);
  };

  return (
    <AppShell>
      <HeroSection />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-24 z-10">
          <DayForm 
            onSubmit={fetchMealPlan} 
            onLoadDemo={handleLoadDemo} 
            onClear={handleClear}
            isLoading={isLoading} 
          />
        </div>
        
        <div className="lg:col-span-7">
          {!plan && !isLoading && !error && <EmptyState />}
          {isLoading && <LoadingState />}
          {error && <ErrorState message={error} onRetry={() => setError(null)} />}
          
          {plan && !isLoading && !error && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {isDemo && (
                <div className="bg-[#ffe66d] border-3 border-black p-3 font-bold text-center uppercase tracking-wider shadow-[4px_4px_0px_0px_#111111]">
                  Demo mode: using mock meal plan.
                </div>
              )}

              {/* Day Diagnosis */}
              <div className="neo-box p-6 bg-white">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <h3 className="text-2xl font-black">Day Diagnosis</h3>
                  <div className="flex gap-2">
                    <StatusBadge status="neutral" text={plan.dayDiagnosis.dayType} />
                    <StatusBadge status="warning" text={plan.dayDiagnosis.recommendedStrategy} />
                  </div>
                </div>
                <p className="text-xl font-bold mb-2">{plan.dayDiagnosis.summary}</p>
                <p className="font-medium bg-gray-100 p-3 border-l-4 border-[#ff7a00]">
                  {plan.dayDiagnosis.reason}
                </p>
              </div>

              {/* Meal Plan Carousel */}
              <MealCarousel meals={plan.meals} />

              {/* Macros and Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MacroSummary macros={plan.macroSummary} healthNote={plan.healthNote} />
                <BudgetCard budget={plan.budget} />
              </div>

              {/* Timeline & Grocery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Timeline timeline={plan.timeline} />
                <div className="space-y-6">
                  <GroceryList grocery={plan.groceryList} />
                  {plan.substitutions && plan.substitutions.length > 0 && (
                    <Substitutions subs={plan.substitutions} />
                  )}
                </div>
              </div>

              {/* Order Suggestions */}
              {plan.orderOptions && plan.orderOptions.length > 0 && (
                <OrderSuggestions options={plan.orderOptions} />
              )}
              
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
