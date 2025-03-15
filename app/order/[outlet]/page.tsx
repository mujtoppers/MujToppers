"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, X } from "lucide-react";
import Image from "next/image";

export default function Outlet({ params }: { params: Promise<{ outlet: string }> }) {
  const [phoneNumber] = useState("9257458723");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [outlet,setOutlet] = useState("")

  useEffect(() => {
    async function fetchParams() {
      const { outlet } = await params;
      setOutlet(outlet);
    }
    fetchParams();
  }, [params]);

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  if (outlet == "devine") {
    return (
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
            Divine Experience
            <span className="block mt-2 text-blue-400">For Everyone</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Eat at Divine - {`it's`} awesome and {`it's `}our sponsor
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
              onClick={openMenu}
            >
              View Menu <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="text-black border-white hover:bg-white hover:text-black px-8 py-6 text-lg"
              onClick={handleCallClick}
            >
              Call Divine <Phone className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative z-10 bg-blue-950 py-16 px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to elevate your dining experience?
          </h2>
          <Button
            className="bg-white text-blue-900 hover:bg-gray-200 px-8 py-6 text-lg"
            onClick={openMenu}
          >
            Explore Menu
          </Button>
        </div>

        {/* Menu Popover/Modal */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/80" onClick={closeMenu} />

            {/* Menu Content */}
            <div className="relative z-10 bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-auto">
              <div className="sticky top-0 flex justify-between items-center p-4 bg-white border-b">
                <h2 className="text-2xl font-bold text-blue-900">Divine Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeMenu}
                  className="rounded-full"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="p-6">
                {/* Menu image option */}
                <div className="mb-8">
                  <Image
                    src="/devineMenu.jpeg"
                    alt="Divine Restaurant Menu"
                    width={800}
                    height={1200}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>

                {/* Alternative: Menu items listed */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">
                      Appetizers
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium">Garlic Bread</h4>
                          <p className="text-gray-600 text-sm">
                            Freshly baked bread with garlic butter
                          </p>
                        </div>
                        <span className="font-medium">$5.99</span>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium">Bruschetta</h4>
                          <p className="text-gray-600 text-sm">
                            Toasted bread with diced tomatoes, basil and olive oil
                          </p>
                        </div>
                        <span className="font-medium">$7.99</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">
                      Main Courses
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium">Grilled Salmon</h4>
                          <p className="text-gray-600 text-sm">
                            Served with seasonal vegetables and lemon butter sauce
                          </p>
                        </div>
                        <span className="font-medium">$22.99</span>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium">Chicken Parmesan</h4>
                          <p className="text-gray-600 text-sm">
                            Breaded chicken with marinara sauce and melted
                            mozzarella
                          </p>
                        </div>
                        <span className="font-medium">$18.99</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
          Divine Experience
          <span className="block mt-2 text-blue-400">For Everyone</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
          Eat at Divine - {`it's`} awesome and {`it's `}our sponsor
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            onClick={openMenu}
          >
            View Menu <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="text-black border-white hover:bg-white hover:text-black px-8 py-6 text-lg"
            onClick={handleCallClick}
          >
            Call Divine <Phone className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 bg-blue-950 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to elevate your dining experience?
        </h2>
        <Button
          className="bg-white text-blue-900 hover:bg-gray-200 px-8 py-6 text-lg"
          onClick={openMenu}
        >
          Explore Menu
        </Button>
      </div>

      {/* Menu Popover/Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/80" onClick={closeMenu} />

          {/* Menu Content */}
          <div className="relative z-10 bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-auto">
            <div className="sticky top-0 flex justify-between items-center p-4 bg-white border-b">
              <h2 className="text-2xl font-bold text-blue-900">Divine Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
                className="rounded-full"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="p-6">
              {/* Menu image option */}
              <div className="mb-8">
                <Image
                  src="/devineMenu.jpeg"
                  alt="Divine Restaurant Menu"
                  width={800}
                  height={1200}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Alternative: Menu items listed */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">
                    Appetizers
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">Garlic Bread</h4>
                        <p className="text-gray-600 text-sm">
                          Freshly baked bread with garlic butter
                        </p>
                      </div>
                      <span className="font-medium">$5.99</span>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">Bruschetta</h4>
                        <p className="text-gray-600 text-sm">
                          Toasted bread with diced tomatoes, basil and olive oil
                        </p>
                      </div>
                      <span className="font-medium">$7.99</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900 border-b pb-2">
                    Main Courses
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">Grilled Salmon</h4>
                        <p className="text-gray-600 text-sm">
                          Served with seasonal vegetables and lemon butter sauce
                        </p>
                      </div>
                      <span className="font-medium">$22.99</span>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">Chicken Parmesan</h4>
                        <p className="text-gray-600 text-sm">
                          Breaded chicken with marinara sauce and melted
                          mozzarella
                        </p>
                      </div>
                      <span className="font-medium">$18.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
