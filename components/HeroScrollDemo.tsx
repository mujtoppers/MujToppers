"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden w-full">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Enjoy Your Life At <br />
              <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none">
                Manipal University Jaipur
              </span>
            </h1>
          </>
        }
      >
        <div className="w-full h-full rounded-2xl overflow-hidden">
          <video
            src="https://res.cloudinary.com/dndyofbi8/video/upload/v1741888947/h7dgqeyut8ooxeqwgak7.mp4"
            className="w-full h-full object-cover"
            style={{
              minHeight: "100%",
              minWidth: "100%",
            }}
            draggable={false}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </ContainerScroll>
    </div>
  );
}
