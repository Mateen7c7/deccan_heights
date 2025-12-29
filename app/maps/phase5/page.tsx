"use client";
import Phase5 from "@/svg_components/Phase5";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function Phase5Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  ">
      <div className="flex flex-wrap items-center justify-center gap-8 p-4 mb-8 bg-white/80 backdrop-blur-sm rounded-2xl   absolute bottom-0 ">
        <div className="flex items-center gap-3">
          <div className="w-10 h-6 rounded-sm bg-[#F87C63] shadow-sm ring-2 ring-[#F87C63]/20" />
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
            Sold
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-6 rounded-sm bg-[#EEF863] shadow-sm ring-2 ring-[#EEF863]/20" />
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
            Hold
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-6 rounded-sm bg-[#FFFBDB] shadow-sm ring-2 ring-[#EEF863]/20" />
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
            Available
          </h2>
        </div>
        <div className="h-8 w-px bg-slate-200 mx-2 hidden md:block" />
        <Link
          href="https://maps.app.goo.gl/m7t1cq6kfHazYBAs9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-200"
        >
          <MapPin size={18} className="text-[#C6A15B]" />
          <span className="text-sm font-bold uppercase tracking-wider">
            View Location
          </span>
        </Link>
      </div>
      <TransformWrapper>
        <TransformComponent>
          <Phase5 />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
