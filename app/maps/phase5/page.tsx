"use client";
import Phase5 from "@/svg_components/Phase5";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Phase5Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <TransformWrapper >
        <TransformComponent>
          {/* <img src="/phase5wids.svg" alt="test" /> */}
          <Phase5 />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
