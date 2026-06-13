import React from "react";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="border-b-[3px] border-[#111111] bg-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#ff7a00] border-2 border-[#111111] flex items-center justify-center font-bold text-white shadow-[2px_2px_0px_0px_#111111]">
            DP
          </div>
          <h1 className="text-2xl font-black tracking-tight">DayPlate</h1>
        </div>
        <nav className="hidden md:flex gap-4 font-bold text-sm">
          <a href="#" className="hover:text-[#ff7a00] transition-colors">About</a>
          <a href="#" className="hover:text-[#ff7a00] transition-colors">How it works</a>
        </nav>
      </header>
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-8">
        {children}
      </main>
      <footer className="border-t-[3px] border-[#111111] bg-white p-6 mt-12 text-center font-bold text-sm">
        <p>Built for the AI Micro-App Challenge.</p>
      </footer>
    </div>
  );
}
