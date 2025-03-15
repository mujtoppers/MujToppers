import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-6xl w-full px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "1st Year",
    description: "Check This Out",
    link: "/branch/first",
  },
  {
    title: "2nd Year ",
    description: "Check This Out",
    link: "/branch/second",
  },
  {
    title: "3rd Year",
    description: "Check this out",
    link: "/branch/third",
  },
  {
    title: "4th Year",
    description: "Check This Out",
    link: "/branch/fourth",
  },
];
