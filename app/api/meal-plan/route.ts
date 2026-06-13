import { NextRequest, NextResponse } from "next/server";
import { buildGeminiPrompt } from "@/lib/gemini-prompt";
import { mockMealPlan } from "@/lib/mock-meal-plan";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.warn("GEMINI_API_KEY is missing. Returning mock data.");
      return NextResponse.json(mockMealPlan);
    }

    const prompt = buildGeminiPrompt(body);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: "application/json",
          },
        }),
      }
    );

    if (!response.ok) {
      console.error("Gemini API error:", await response.text());
      return NextResponse.json(mockMealPlan);
    }

    const data = await response.json();
    const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textContent) {
      console.error("Invalid response from Gemini");
      return NextResponse.json(mockMealPlan);
    }

    try {
      // Extract just the JSON object to handle markdown blocks or trailing text
      const jsonMatch = textContent.match(/\{[\s\S]*\}/);
      const cleanText = jsonMatch ? jsonMatch[0] : textContent;
      
      const parsed = JSON.parse(cleanText);
      return NextResponse.json(parsed);
    } catch (parseError) {
      console.error("Failed to parse Gemini JSON output:", parseError);
      return NextResponse.json(mockMealPlan);
    }
  } catch (error) {
    console.error("Error in meal-plan route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
