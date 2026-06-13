export type DayType = "wfh" | "office" | "travel" | "college" | "free_day";
export type CookingAbility = "full_cooking" | "quick_cooking" | "hybrid" | "cannot_cook";
export type HealthGoal = "balanced" | "high_protein" | "weight_loss" | "muscle_gain" | "light_meals" | "budget_meals";
export type DietPreference = "vegetarian" | "non_vegetarian" | "eggetarian" | "vegan" | "jain" | "no_preference";

export interface MealPlanRequest {
  dayType: DayType;
  cookingAbility: CookingAbility;
  budget: number;
  healthGoal: HealthGoal;
  dietPreference: DietPreference;
  availableIngredients: string;
  allergies: string;
  morningMinutes: number;
  lunchMinutes: number;
  eveningMinutes: number;
  location?: string;
}

export interface Macros {
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  fiberGrams?: number;
}

export interface Meal {
  mealType: "breakfast" | "lunch" | "dinner";
  source: "cook" | "order";
  name: string;
  prepTimeMinutes: number | null;
  estimatedDeliveryMinutes: number | null;
  difficulty: "easy" | "medium" | "hard" | null;
  estimatedCost: number;
  macros: Macros;
  whyItFits: string;
  ingredients: string[];
  todos: string[];
  orderingGuidance: string | null;
}

export interface OrderOption {
  mealType: "breakfast" | "lunch" | "dinner";
  searchQuery: string;
  recommendedDishType: string;
  estimatedCostRange: string;
  macroEstimate: Macros;
  selectionRules: string[];
}

export interface GroceryItem {
  item: string;
  estimatedCost: number;
  usedFor?: string[];
  reason?: string;
}

export interface Substitution {
  original: string;
  alternatives: string[];
  reason: string;
}

export interface TimelineBlock {
  timeBlock: "morning" | "lunch" | "evening";
  tasks: string[];
}

export interface MealPlanResponse {
  dayDiagnosis: {
    summary: string;
    dayType: string;
    cookingFeasibility: string;
    recommendedStrategy: "cook" | "order" | "hybrid";
    reason: string;
  };
  budget: {
    currency: string;
    dailyBudget: number;
    estimatedTotalCost: number;
    status: "feasible" | "tight" | "over_budget";
    reason: string;
    savingTips: string[];
  };
  macroSummary: {
    estimatedCalories: number;
    proteinGrams: number;
    carbsGrams: number;
    fatGrams: number;
    fiberGrams: number;
    verdict: string;
    notes: string[];
  };
  meals: Meal[];
  groceryList: {
    mustBuy: GroceryItem[];
    niceToHave: GroceryItem[];
    alreadyAvailable: string[];
  };
  orderOptions?: OrderOption[];
  substitutions?: Substitution[];
  timeline: TimelineBlock[];
  healthNote: string;
}
