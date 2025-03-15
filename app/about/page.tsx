
import { InfiniteMovingCardsDemoTwo } from "@/components/InfiniteMovingCardsDemoTwo";
import { TimelineDemo } from "@/components/TimeLineDemo";


export default function About() {
  return (
    <div>
      <TimelineDemo />
      <div className="bg-white">
        <p className="text-center text-4xl font-bold text-[rgb(115,115,115)]">
          You Can Find Us Here
        </p>
        <InfiniteMovingCardsDemoTwo />
      </div>
    </div>
  );
}
