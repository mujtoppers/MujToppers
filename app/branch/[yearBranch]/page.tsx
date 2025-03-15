"use client";

import AnimatedHeader from "@/components/AnimatedHeader";
import { FocusCards } from "@/components/ui/focus-cards";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ yearBranch: string }>;
}) {
  const router = useRouter();
  const [yearBranch, setYearBranch] = useState("");

  useEffect(() => {
    async function fetchParams() {
      const { yearBranch } = await params;
      setYearBranch(yearBranch);
    }
    fetchParams();
  }, [params]);

  const cards1 = [
    {
      title: "Physics Cycle",
      src: "/Physics_Cycle.png",
      href: "IT",
      onClick: () => router.push(`/branch/${yearBranch}/subjects/PhysicsCycle`),
    },
    {
      title: "Chemistry Cycle",
      src: "/Chemistry_Cycle.png",
      href: "DSE",
      onClick: () => router.push(`/branch/${yearBranch}/subjects/ChemistryCycle`),
    },
  ];

   const cards2 = [
     {
       title: "Information Technology",
       src: "/IT_Branch.png",
       href: "IT",
       onClick: () => router.push(`/branch/${yearBranch}/subjects/IT`),
     },
     {
       title: "Data Science",
       src: "/DataScienceBranch.png",
       href: "DSE",
       onClick: () => router.push(`/branch/${yearBranch}/subjects/DSE`),
     },
     {
       title: "Computer Science",
       src: "/CSE_CORE_Branch.png",
       href: "CSE",
       onClick: () => router.push(`/branch/${yearBranch}/subjects/CSE`),
     },
     {
       title: "Internet of Things",
       src: "/IOT_Branch.png",
       href: "IOT",
       onClick: () => router.push(`/branch/${yearBranch}/subjects/IOT`),
     },
     {
       title: "Computer & Communication Engineering",
       src: "/CCE_Branch.png",
       href: "CCE",
       onClick: () => router.push(`/branch/${yearBranch}/subjects/CCE`),
     },
     {
       title: "Aritifical Intelligence & Machine Learning",
       src: "/AIML_Branch.png",
       href: "AIML",
       onClick: () => router.push(`/branch/${yearBranch}/subjects/AIML`),
     },
   ];

  return (
    <div className="min-h-screen px-4 py-4 bg-[url('/heroImage.webp')] bg-cover bg-center">
      <div className="flex flex-col gap-y-6 mt-20 p-10">
        <AnimatedHeader title={yearBranch} />
        <FocusCards cards={yearBranch === "first"? cards1 : cards2} />
      </div>
    </div>
  );
}
