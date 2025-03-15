"use client";

import { Carousel } from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "First Year",
      button: "Explore",
      src: "/AboutUsCards/7.png",
      link: "/branch/first",
    },
    {
      title: "Second Year",
      button: "Explore Component",
      src: "/AboutUsCards/9.png",
      link: "/branch/second",
    },
    {
      title: "Third Year",
      button: "Explore ",
      src: "/AboutUsCards/5.png",
      link: "/branch/third",
    },
    {
      title: "Fourth Year",
      button: "Explore",
      src: "/AboutUsCards/6.png",
      link: "/branch/fourth",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
