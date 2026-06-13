import React from "react";

export function HeroSection() {
  return (
    <div className="neo-box p-8 md:p-12 mb-8 bg-[#ffe66d] flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
        What should I <span className="text-[#ff7a00]">eat</span> today?
      </h2>
      <p className="text-lg md:text-xl font-medium max-w-2xl border-2 border-[#111111] bg-white p-3 rounded-md shadow-[4px_4px_0px_0px_#111111] rotate-1">
        Tell us your day. Get meals, groceries, swaps, macros, and a budget-safe cooking list.
      </p>
    </div>
  );
}
