# DayPlate 🍱

DayPlate is an AI-powered micro-app built for the AI Micro-App Challenge. It generates a personalized, hyper-realistic cooking and ordering to-do list based on your actual day, not just generic recipes.

## 🎯 Chosen Vertical
**Food, Health & Lifestyle (Personal Cooking Assistant)**
The challenge was to build an AI micro-app that generates a personal cooking to-do list based on a user's day. DayPlate solves the "what's for dinner" problem by treating meal planning as a logistics problem rather than just a recipe book.

## 🧠 Approach and Logic
Most meal planning apps assume you have infinite time and energy. DayPlate's logic operates on **Real-Life Feasibility**:
1. **Contextual Evaluation**: It evaluates your day type (WFH, office, travel), cooking ability, and available time. 
2. **Decision Matrix**: Before assigning recipes, the AI decides your **Day Diagnosis**: Should you `cook` everything, `order` everything, or use a `hybrid` approach (e.g., cook breakfast, order lunch)?
3. **Resource Management**: It maps what you already have in your fridge against the recipes, generating a targeted grocery list and suggesting smart substitutions to save money and time.
4. **Actionable Outputs**: Instead of just giving you a recipe, it provides a chronological timeline of when to cook, when to order, and specific search prompts to use when you *do* need to order out.

## ⚙️ How the Solution Works
- **Frontend**: A highly responsive, Neobrutalism-inspired dashboard built with Next.js, React, and Tailwind CSS.
- **Backend/AI**: Next.js API Routes interface directly with the **Google Gemini API**.
- **Data Flow**:
  1. The user fills out the sticky sidebar form with their daily constraints (budget, macros, ingredients, time).
  2. The server constructs a heavily engineered prompt instructing Gemini to return a strict, complex JSON structure.
  3. The server uses a regex-hardened parser to safely extract the JSON from Gemini's response, stripping out any markdown formatting.
  4. The UI dynamically renders the data into distinct cards: Macro Summary, Budget Feasibility, Chronological Timeline, Smart Grocery List, Ingredient Substitutions, and Order Suggestions with one-click Google search redirects.

## 🤔 Assumptions Made
- **Basic Pantry**: We assume the user has fundamental pantry staples (e.g., salt, pepper, cooking oil, basic regional spices) and water, so these are not explicitly added to the grocery lists unless critical to the dish.
- **Budgeting**: The budget estimates are generalized ranges based on typical fast-casual or grocery pricing and may vary by region or platform.
- **Macro Goals**: Macro targets (High Protein, Balanced, Weight Loss) are estimated based on general dietary guidelines rather than clinical, medically tailored values.
- **Time Estimates**: Prep and cooking times are estimated for an average home cook and assume basic kitchen equipment (stove, microwave, knife) is available.
