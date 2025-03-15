// pages/index.tsx
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

// Sample data: list of videos with YouTube IDs and additional metadata
const videos = [
  {
    id: "1",
    title: "Placement at Microsoft",
    youtubeId: "boJSxHw7XtI",
    description: "How to Crack Microsoft Placement",
    logo: "/images/microsoft-logo.png",
    backgroundColor: "bg-amber-50",
    borderColor: "border-amber-300",
    accentColor: "bg-amber-500",
    link: "https://www.linkedin.com/in/dwivedi-diksha/",
  },
  {
    id: "2",
    title: "Placement at Dell",
    youtubeId: "IudRxlx3peQ",
    description: "FROM MUJ TO DELL (SDE-2)",
    logo: "/images/dell-logo.png",
    backgroundColor: "bg-orange-50",
    borderColor: "border-orange-300",
    accentColor: "bg-orange-500",
    link: "https://www.linkedin.com/in/adityagoliya/",
  },
  {
    id: "3",
    title: "Placement at Philips",
    youtubeId: "cjtRtQgYKQs",
    description: "FROM MUJ TO PHILIPS",
    logo: "/images/philips-logo.png",
    backgroundColor: "bg-yellow-50",
    borderColor: "border-yellow-300",
    accentColor: "bg-yellow-500",
    link: "https://www.linkedin.com/in/mahirrohatgi/",
  },
  {
    id: "4",
    title: "Placement at Paypal",
    youtubeId: "8zwxLsOofCU",
    description: "From Muj To Paypal",
    logo: "/images/google-logo.png",
    backgroundColor: "bg-amber-50",
    borderColor: "border-amber-300",
    accentColor: "bg-amber-500",
    link: "https://www.linkedin.com/in/sanya-dureja-13960122a/",
  },
  {
    id: "5",
    title: "Placement at Philips",
    youtubeId: "nOpAA_Wr-xM",
    description: "FROM MUJ TO Philips",
    logo: "/images/amazon-logo.png",
    backgroundColor: "bg-orange-50",
    borderColor: "border-orange-300",
    accentColor: "bg-orange-500",
    link: "https://www.linkedin.com/in/parichayy/",
  },
  {
    id: "6",
    title: "Placement at Atlassian",
    youtubeId: "HmVer2FBw2Q",
    description: "How to Crack Atlassian Placement",
    logo: "/images/microsoft-logo.png",
    backgroundColor: "bg-amber-50",
    borderColor: "border-amber-300",
    accentColor: "bg-amber-500",
    link: "https://www.linkedin.com/in/dwivedi-diksha/",
  },
];

interface Video {
  id: string;
  title: string;
  youtubeId: string;
  description: string;
  logo?: string;
  backgroundColor: string;
  borderColor: string;
  accentColor: string;
  link: string;
}

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <Card
      className={`w-full shadow-lg transition-all duration-300 hover:shadow-xl border-2 ${video.borderColor} ${video.backgroundColor} overflow-hidden`}
    >
      <div className={`h-2 ${video.accentColor} w-full`}></div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-800">
            {video.title}
          </CardTitle>
        </div>
        <p className="text-sm text-gray-600 mt-1">{video.description}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            allowFullScreen
          />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-amber-100 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-orange-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm text-gray-600">Watch Now</span>
          </div>
          <Link
          href={video.link}
            className={`px-3 py-1 rounded-full text-white text-sm ${video.accentColor} hover:opacity-90 transition-opacity`}
          >
            Connect With Them
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

const PlacementVideosPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Placement Success Stories</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Watch how Manipal University Jaipur students secured placements at top tech companies and
            learn from their experiences.
          </p>
        </div>
      </div>

      {/* Main content with video cards */}
      <main className="py-12 px-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Featured Videos</h2>
        
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* Additional section */}
        <div className="mt-16 bg-amber-50 rounded-xl p-8 border border-amber-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Want to share your success story?
              </h3>
              <p className="text-gray-600 mb-6">
                If you&apos;re a MUJ student who recently got placed, we&apos;d love to
                feature your journey! Inspire juniors and help them prepare for
                their placements.
              </p>
              <Link
                href="https://www.linkedin.com/company/muj-toppers/?viewAsMember=true"
                className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 font-medium"
              >
                Send Us A Message
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="rounded-full bg-amber-100 p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default PlacementVideosPage;
