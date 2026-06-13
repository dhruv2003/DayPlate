# DayPlate

"Plan your food around your real day."

An AI micro-app that generates a personal cooking to-do list based on your day's schedule, cooking ability, budget, and goals.

Built for the AI Micro-App Challenge.

## Tech Stack
- Next.js (App Router)
- React
- Tailwind CSS v4 (Neobrutalism Design)
- TypeScript
- Gemini API (Server-side)

## Running Locally

1. Install dependencies
```bash
npm install
```

2. Set up your environment variables
```bash
cp .env.example .env.local
```
Then add your `GEMINI_API_KEY` to `.env.local`. If you don't have a key, the app will gracefully fall back to a mock demo state.

3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Testing Expectations / Manual Test Checklist

- [ ] **Form submits with valid data**: Filling the form and clicking "Plan My Plate" sends the request.
- [ ] **Empty form shows validation**: HTML5 required fields block submission if empty.
- [ ] **Missing Gemini key returns mock data**: If `GEMINI_API_KEY` is omitted, the app displays a "Demo mode" warning and renders mock data.
- [ ] **Meal cards render**: Breakfast, lunch, and dinner cards appear with correct data and badges.
- [ ] **Budget card renders**: Shows budget feasibility and saving tips with appropriate styling.
- [ ] **Macro card renders**: Displays estimated macros and health verdict.
- [ ] **Error state works**: In case of a network error or malformed JSON, the error state component catches it.
- [ ] **Mobile layout works**: The grid collapses into a single column on mobile devices.
