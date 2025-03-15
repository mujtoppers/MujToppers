import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Linkedin, Mail } from "lucide-react";


export function TimelineDemo() {
  const data = [
    {
      title: "Mission",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
            {`To centralize the entire MUJ student experience by providing
            everything in one place—academics (PYQs, toppers’ notes, study
            tips), placements, internships, startup opportunities, projects,
            food ordering, and more. A one-stop platform to make college life
            easier and more efficient.`}
          </p>
          <div className="grid grid-cols-1">
            <Image
              src="https://res.cloudinary.com/dndyofbi8/image/upload/v1742031794/wzx4i6mz9jwxnijqf3sx.png"
              alt="startup template"
              width={750}
              height={750}
              className="rounded-lg h-[200px] md:h-44 lg:h-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "The Team",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
            We are a group of passionate students who believe in collaborative
            learning.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
            Our team consists of developers, content curators, and contributors
            who work together to ensure you get the best academic resources.
          </p>
          <div className="grid grid-cols-1">
            <Image
              src="https://res.cloudinary.com/dndyofbi8/image/upload/v1742031794/oehrlfxavvvvot5mvafr.png"
              alt="hero template"
              width={1000}
              height={1000}
              className="rounded-lg h-[200px] md:h-44 lg:h-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <div>
          <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-4">
            We’d love to hear from you! Whether you want to contribute notes,
            share feedback, or report an issue, feel free to reach out.
            <p className="flex gap-x-5">
              <a
                href="https://www.linkedin.com/company/muj-toppers/about/?viewAsMember=true"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition-colors duration-200 border border-blue-200 hover:border-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
                <span>Connect with us on LinkedIn</span>
              </a>

              <a
                href="mailto:mujtoppers@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition-colors duration-200 border border-blue-200 hover:border-blue-300"
              >
                <Mail size={20} />
                <span>Contact us via Gmail</span>
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1">
            <Image
              src="https://res.cloudinary.com/dndyofbi8/image/upload/v1742031794/zrz9mhx59ezgzmm3pcqt.png"
              alt="hero template"
              width={1000}
              height={1000}
              className="rounded-lg h-[200px] md:h-44 lg:h-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
