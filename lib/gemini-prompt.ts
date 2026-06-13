import { MealPlanRequest } from "./meal-types";

export function buildGeminiPrompt(requestData: MealPlanRequest): string {
  return `You are an AI meal planning assistant. Create a personal cooking or ordering to-do list based on the user's real day. Return only valid JSON.

USER DAY DATA:
- Day type: ${requestData.dayType}
- Cooking ability: ${requestData.cookingAbility}
- Budget: ${requestData.budget} INR
- Health goal: ${requestData.healthGoal}
- Diet preference: ${requestData.dietPreference}
- Available ingredients: ${requestData.availableIngredients}
- Allergies / Avoid: ${requestData.allergies}
- Time available: ${requestData.morningMinutes}m morning, ${requestData.lunchMinutes}m lunch, ${requestData.eveningMinutes}m evening
- Location/Area: ${requestData.location || 'Not provided'}

RULES:
- Prefer meals that fit the user's schedule.
- Respect diet preference and allergies.
- Include estimated macros for every meal.
- Include daily macro totals.
- Include exactly one breakfast, one lunch, and one dinner in the meals array.
- Include grocery list, substitutions, and budget feasibility details.
- Prefer available ingredients.
- Keep meals realistic and simple.
- If user cannot cook, recommend ordering strategy instead of recipes.
- If ordering options need location, generate search queries using the area if provided.
- Stay within budget where possible.
- If budget is too low, show tradeoffs.
- Avoid unsafe health claims.
- Return JSON only.
- No markdown formatting in output. Return raw JSON string.

JSON OUTPUT SHAPE MUST BE EXACTLY:
{
  "dayDiagnosis": {
    "summary": "short summary of user's day",
    "dayType": "wfh | office | travel | college | free_day",
    "cookingFeasibility": "full_cooking | quick_cooking | hybrid | cannot_cook",
    "recommendedStrategy": "cook | order | hybrid",
    "reason": "why this strategy fits"
  },
  "budget": {
    "currency": "INR",
    "dailyBudget": 300,
    "estimatedTotalCost": 260,
    "status": "feasible | tight | over_budget",
    "reason": "short explanation",
    "savingTips": ["tip 1", "tip 2"]
  },
  "macroSummary": {
    "estimatedCalories": 1850,
    "proteinGrams": 85,
    "carbsGrams": 220,
    "fatGrams": 55,
    "fiberGrams": 25,
    "verdict": "short health verdict",
    "notes": ["estimated values only", "macro estimates vary by portion size"]
  },
  "meals": [
    {
      "mealType": "breakfast | lunch | dinner",
      "source": "cook | order",
      "name": "meal name",
      "prepTimeMinutes": 20,
      "estimatedDeliveryMinutes": null,
      "difficulty": "easy | medium | hard",
      "estimatedCost": 80,
      "macros": {
        "calories": 420,
        "proteinGrams": 24,
        "carbsGrams": 45,
        "fatGrams": 14,
        "fiberGrams": 6
      },
      "whyItFits": "short reason",
      "ingredients": ["item 1", "item 2"],
      "todos": ["step 1", "step 2", "step 3"],
      "orderingGuidance": null
    }
  ],
  "groceryList": {
    "mustBuy": [
      {
        "item": "item name",
        "estimatedCost": 40,
        "usedFor": ["breakfast", "dinner"],
        "reason": "why needed"
      }
    ],
    "niceToHave": [
      {
        "item": "item name",
        "estimatedCost": 20,
        "reason": "why useful"
      }
    ],
    "alreadyAvailable": ["item 1", "item 2"]
  },
  "orderOptions": [
    {
      "mealType": "lunch",
      "searchQuery": "high protein vegetarian lunch bowl near me",
      "recommendedDishType": "paneer rice bowl",
      "estimatedCostRange": "₹180-₹240",
      "macroEstimate": {
        "calories": 650,
        "proteinGrams": 28,
        "carbsGrams": 75,
        "fatGrams": 22
      },
      "selectionRules": [
        "prefer grilled or dal-based options",
        "avoid sugary drinks",
        "add curd or salad if available"
      ]
    }
  ],
  "substitutions": [
    {
      "original": "paneer",
      "alternatives": ["tofu", "eggs", "soya chunks"],
      "reason": "protein source substitution"
    }
  ],
  "timeline": [
    {
      "timeBlock": "morning",
      "tasks": ["task 1", "task 2"]
    },
    {
      "timeBlock": "lunch",
      "tasks": ["task 1", "task 2"]
    },
    {
      "timeBlock": "evening",
      "tasks": ["task 1", "task 2"]
    }
  ],
  "healthNote": "General nutrition estimate only. Not medical advice."
}`;
}
