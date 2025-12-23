"use client";
import Phase5 from "@/svg_components/Phase5";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Phase5Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  ">
      <div className="flex flex-wrap items-center justify-center gap-8 p-4 mb-8 bg-white/80 backdrop-blur-sm rounded-2xl   absolute bottom-0 ">
        <div className="flex items-center gap-3">
          <div className="w-10 h-6 rounded-sm bg-[#F87C63] shadow-sm ring-2 ring-[#F87C63]/20" />
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Sold</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-6 rounded-sm bg-[#EEF863] shadow-sm ring-2 ring-[#EEF863]/20" />
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Hold</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-6 rounded-sm bg-[#FFFBDB] shadow-sm ring-2 ring-[#EEF863]/20" />
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Available</h2>
        </div>
      </div>
      <TransformWrapper>
        <TransformComponent>
          <Phase5 />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
