"use client";

import * as React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

/**
 * Props:
 * - subjectName: string (name of the subject to display)
 * - subjectImage: string (URL to the subject image)
 * - pyqLink: string
 * - notesLink: string
 * - playlistLink: string
 * - roadmap: string (URL to roadmap image)
 */
export default function CardWithSelect({
  subjectName,
  subjectImage,
  pyqLink,
  notesLink,
  playlistLink,
  roadmap,
}: {
  subjectName: string;
  subjectImage: string;
  pyqLink: string;
  notesLink: string;
  playlistLink: string;
  roadmap: string;
}) {
  const [selectedValue, setSelectedValue] = React.useState<string | null>(null);
  const [isRoadmapOpen, setIsRoadmapOpen] = React.useState(false);
  const [isImageLoading, setIsImageLoading] = React.useState(true);

  const handleSelection = (value: string) => {
    setSelectedValue(value);

    if (value === "roadmap") {
      setIsRoadmapOpen(true);
      setIsImageLoading(true);
    } else {
      const links: Record<string, string> = {
        pyq: pyqLink,
        notes: notesLink,
        playlist: playlistLink,
      };

      if (links[value]) {
        window.open(links[value], "_blank");
        setSelectedValue(null); // Reset selection so user can select the same option again
      }
    }
  };

  // Reset selection when dialog closes
  const handleDialogClose = () => {
    setIsRoadmapOpen(false);
    setSelectedValue(null);
  };

  return (
    <>
      <div className="group relative w-72 cursor-pointer border border-gray-300 rounded-xl bg-white p-4 shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
        {/* Subject Name Header with Animated Underline triggered on card hover */}
        <h2
          className="
            text-center text-xl font-semibold mb-3 text-gray-800 
            relative inline-block w-full
            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-black after:w-full 
            after:scale-x-0 after:origin-right after:transition-transform after:duration-300
            group-hover:after:scale-x-100 group-hover:after:origin-left
          "
        >
          {subjectName}
        </h2>

        {/* Image Section (Rounded + Border) */}
        <div className="relative w-full h-40 mb-4 rounded-xl border border-gray-300 shadow-sm overflow-hidden">
          <Image
            src={subjectImage}
            alt={subjectName}
            fill
            className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
        </div>

        {/* Resource Selector */}
        <Select
          onValueChange={(value) => handleSelection(value)}
          value={selectedValue ?? ""}
        >
          <SelectTrigger className="w-full border border-gray-300 rounded-md bg-gray-50 shadow-sm hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 transition-colors duration-200">
            <SelectValue placeholder="📚 Select a Resource" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg">
            <SelectGroup>
              <SelectItem
                value="pyq"
                className="cursor-pointer transition-colors hover:bg-gray-50"
              >
                📜 PYQ (Past Year Papers)
              </SelectItem>
              <SelectItem
                value="notes"
                className="cursor-pointer transition-colors hover:bg-gray-50"
              >
                📖 Toppers Notes
              </SelectItem>
              <SelectItem
                value="playlist"
                className="cursor-pointer transition-colors hover:bg-gray-50"
              >
                🎥 Video Playlist
              </SelectItem>
              <SelectItem
                value="roadmap"
                className="cursor-pointer transition-colors hover:bg-gray-50"
              >
                🛣️ Road Map
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Roadmap Image Dialog */}
      <Dialog open={isRoadmapOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-1 sm:p-6">
          <DialogHeader className="px-4 pt-4">
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <span className="text-lg">🛣️</span>
              {subjectName} Roadmap
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              A comprehensive learning path for mastering {subjectName}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 relative">
            {/* Loading spinner */}
            {isImageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
                <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
            )}

            {/* Roadmap image with zoom capabilities */}
            <div className="relative overflow-auto max-h-[70vh] flex justify-center">
              <img
                src={roadmap}
                alt={`${subjectName} Roadmap`}
                className="max-w-full object-contain"
                onLoad={() => setIsImageLoading(false)}
                style={{ maxHeight: "70vh" }}
              />
            </div>

            {/* Download button */}
            <div className="mt-4 flex justify-end px-4">
              <a
                href={roadmap}
                download={`${subjectName
                  .replace(/\s+/g, "-")
                  .toLowerCase()}-roadmap.png`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Roadmap
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
