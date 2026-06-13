import React from "react";
import { TimelineBlock } from "@/lib/meal-types";
import { CheckSquare } from "lucide-react";

export function Timeline({ timeline }: { timeline: TimelineBlock[] }) {
  return (
    <div className="neo-box p-6 bg-white">
      <h3 className="text-2xl font-black mb-6">Timeline & To-Dos</h3>
      <div className="space-y-6">
        {timeline.map((block, i) => (
          <div key={i} className="relative pl-6 border-l-4 border-[#ff7a00]">
            <div className="absolute w-4 h-4 rounded-full bg-[#ff7a00] border-2 border-black -left-[10px] top-1"></div>
            <h4 className="text-lg font-black uppercase mb-2 capitalize">{block.timeBlock}</h4>
            <ul className="space-y-2">
              {block.tasks.map((task, j) => (
                <li key={j} className="flex items-start gap-2 font-medium bg-[#fff9db] border-2 border-black p-2 rounded-sm shadow-[2px_2px_0px_0px_#111111]">
                  <CheckSquare className="w-5 h-5 flex-shrink-0 mt-0.5 text-black" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
