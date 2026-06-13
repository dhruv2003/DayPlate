import { MealPlanResponse } from "./meal-types";

export const mockMealPlan: MealPlanResponse = {
  dayDiagnosis: {
    summary: "Busy WFH day with limited cooking time.",
    dayType: "wfh",
    cookingFeasibility: "hybrid",
    recommendedStrategy: "hybrid",
    reason: "You have a busy morning but some time in the evening, so we recommend a quick breakfast, an ordered lunch, and a cooked dinner."
  },
  budget: {
    currency: "INR",
    dailyBudget: 500,
    estimatedTotalCost: 420,
    status: "feasible",
    reason: "Mix of home cooking and budget ordering keeps you under the limit.",
    savingTips: ["Order lunch from a local thali place to save delivery fees."]
  },
  macroSummary: {
    estimatedCalories: 1850,
    proteinGrams: 85,
    carbsGrams: 220,
    fatGrams: 55,
    fiberGrams: 25,
    verdict: "Well balanced, meeting your protein goals.",
    notes: ["Estimated values only", "Macro estimates vary by portion size"]
  },
  meals: [
    {
      mealType: "breakfast",
      source: "cook",
      name: "Masala Oats & Eggs",
      prepTimeMinutes: 10,
      estimatedDeliveryMinutes: null,
      difficulty: "easy",
      estimatedCost: 40,
      macros: {
        calories: 350,
        proteinGrams: 20,
        carbsGrams: 40,
        fatGrams: 12,
        fiberGrams: 5
      },
      whyItFits: "Super fast and uses your available ingredients.",
      ingredients: ["Oats", "Eggs", "Onion", "Tomato"],
      todos: ["Chop veggies", "Boil oats", "Scramble eggs"],
      orderingGuidance: null
    },
    {
      mealType: "lunch",
      source: "order",
      name: "High Protein Veg Thali",
      prepTimeMinutes: null,
      estimatedDeliveryMinutes: 40,
      difficulty: null,
      estimatedCost: 200,
      macros: {
        calories: 600,
        proteinGrams: 25,
        carbsGrams: 80,
        fatGrams: 20,
        fiberGrams: 10
      },
      whyItFits: "No time to cook at lunch, ordering a balanced thali is best.",
      ingredients: [],
      todos: ["Order around 12:30 PM"],
      orderingGuidance: "Search for 'homestyle veg thali' on Zomato/Swiggy."
    },
    {
      mealType: "dinner",
      source: "cook",
      name: "Dal Khichdi with Curd",
      prepTimeMinutes: 25,
      estimatedDeliveryMinutes: null,
      difficulty: "easy",
      estimatedCost: 60,
      macros: {
        calories: 500,
        proteinGrams: 18,
        carbsGrams: 70,
        fatGrams: 10,
        fiberGrams: 8
      },
      whyItFits: "Comforting evening meal that is light on the stomach.",
      ingredients: ["Rice", "Moong Dal", "Curd"],
      todos: ["Wash rice and dal", "Cook in pressure cooker", "Prepare tadka"],
      orderingGuidance: null
    }
  ],
  groceryList: {
    mustBuy: [
      {
        item: "Oats",
        estimatedCost: 60,
        usedFor: ["breakfast"],
        reason: "Primary carb for morning."
      }
    ],
    niceToHave: [
      {
        item: "Papad",
        estimatedCost: 30,
        reason: "Good side for khichdi."
      }
    ],
    alreadyAvailable: ["Rice", "Moong Dal", "Eggs", "Onion", "Tomato", "Curd"]
  },
  orderOptions: [
    {
      mealType: "lunch",
      searchQuery: "homestyle veg thali near me",
      recommendedDishType: "Veg Thali",
      estimatedCostRange: "₹150-₹220",
      macroEstimate: {
        calories: 600,
        proteinGrams: 25,
        carbsGrams: 80,
        fatGrams: 20
      },
      selectionRules: [
        "Avoid extra oily curries",
        "Prefer plain roti over naan",
        "Add a side of curd"
      ]
    }
  ],
  substitutions: [
    {
      original: "Eggs",
      alternatives: ["Paneer Bhurji", "Tofu Scramble"],
      reason: "If you want a vegetarian breakfast alternative."
    }
  ],
  timeline: [
    {
      timeBlock: "morning",
      tasks: ["Make Masala Oats & Eggs", "Eat breakfast"]
    },
    {
      timeBlock: "lunch",
      tasks: ["Order Thali at 12:30 PM", "Receive order and eat"]
    },
    {
      timeBlock: "evening",
      tasks: ["Soak rice and dal", "Cook Khichdi", "Eat dinner"]
    }
  ],
  healthNote: "General nutrition estimate only. Not medical advice."
};
