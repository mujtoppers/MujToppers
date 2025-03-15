"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MinimalComingSoon from "../comingExp/page";

// Type for a place/activity
type Item = {
  name: string;
  image: string;
  desc: string;
  link: string; // relevant link (e.g., Zomato for cafes, official tourism site for attractions)
  isBest?: boolean;
};

// Curated Data: Top 20 Cafés in Jaipur (Example data, replace with actual curated items)
const cafes: Item[] = [
  {
    name: "Tapri Central",
    image:
      "https://b.zmtcdn.com/data/pictures/2/101212/18a8a6d5a56434d02ef5915da77b19b8.jpg",
    desc: "A beloved rooftop café offering great chai and stunning views of the Pink City.",
    link: "https://www.zomato.com/jaipur/tapri-central-c-scheme",
    isBest: true,
  },
  {
    name: "The Magnolia-Coffee & InBetween",
    image:
      "https://b.zmtcdn.com/data/pictures/1/20288821/23adafdfc950d1bbdc94759e03a85bb0.jpeg",
    desc: "",
    link: "https://www.zomato.com/jaipur/the-magnolia-coffee-inbetween-malviya-nagar/order",
    isBest: true,
  },
  {
    name: "Bar Palladio",
    image:
      "https://b.zmtcdn.com/data/reviews_photos/43d/1fea3f1bd6ff47b5588948daad38243d_1608207604.jpg",
    desc: "A chic Italian café with lavish interiors serving delicious pasta and cocktails.",
    link: "https://www.zomato.com/jaipur/bar-palladio-jaipur-narayan-singh-circle",
  },
  {
    name: "The Swinton House",
    image:
      "https://b.zmtcdn.com/data/pictures/7/20984257/d654350598e85f20d68e24776a689888.jpg",
    desc: "A cozy spot focusing on organic ingredients and a relaxed, homely ambiance.",
    link: "https://www.zomato.com/jaipur/the-swinton-house-mi-road/info",
    isBest: true,
  },
  {
    name: "Cafe LazyMojo",
    image: "/images/cafe-lazymojo.jpg",
    desc: "A laid-back café known for creative snacks and a vibrant, youthful atmosphere.",
    link: "https://www.zomato.com/jaipur/cafe-lazymojo",
  },
  {
    name: "Cafe Noirwood",
    image: "/images/cafe-noirwood.jpg",
    desc: "A black-and-white themed café offering a unique cinematic vibe and delicious fare.",
    link: "https://www.zomato.com/jaipur/cafe-noirwood",
  },
  {
    name: "Zolocrust",
    image:
      "https://b.zmtcdn.com/data/pictures/8/18209498/77af894341893ff6ca5c336567ee9cb4.jpg",
    desc: "A trendy hangout serving gourmet pizzas, desserts, and artisan breads.",
    link: "https://www.zomato.com/jaipur/zolocrust-hotel-clarks-amer-malviya-nagar/order",
    isBest: true,
  },
  {
    name: "Wind View Café",
    image: "/images/wind-view-cafe.jpg",
    desc: "A rooftop café with spectacular views of Hawa Mahal and the bustling Pink City streets.",
    link: "https://www.zomato.com/jaipur/wind-view-cafe",
  },
  {
    name: "Cafe Bae",
    image:
      "https://b.zmtcdn.com/data/reviews_photos/61f/0e626192d3405b19e1e8bb4e86b4461f_1479994438.jpg",
    desc: "A stylish café perfect for a romantic date, offering creative menu options and a cozy vibe.",
    link: "https://www.zomato.com/jaipur/caf%C3%A9-bae-bais-godam/order",
    isBest: true,
  },

  {
    name: "Nothing Before Coffee",
    image: "/images/nothing-before-coffee.jpg",
    desc: "A small yet popular café known for its excellent coffee and laid-back, welcoming atmosphere.",
    link: "https://www.zomato.com/jaipur/nothing-before-coffee",
  },
];

// Curated Data: Top 20 Tourist Spots in Jaipur
const touristSpots: Item[] = [
  {
    name: "Amber Fort",
    image:
      "https://content-tourist.rajasthan.gov.in/uploads/amber_fort_2e768658bb.jpg",
    desc: "A UNESCO World Heritage Site and an iconic fort with breathtaking views of Maota Lake.",
    link: "https://obms-tourist.rajasthan.gov.in/place-details/Amber-Fort",
    isBest: true,
  },
  {
    name: "Hawa Mahal",
    image:
      "https://content-tourist.rajasthan.gov.in/uploads/thumbnail_Hawa_Mahal_d73b5e3bac_e2cce540a1.png",
    desc: "Known as the Palace of Winds, featuring 953 intricately carved windows that keep the breeze flowing.",
    link: "https://obms-tourist.rajasthan.gov.in/place-details/Hawa-mahal",
    isBest: true,
  },
  {
    name: "City Palace",
    image: "/images/city-palace.jpg",
    desc: "A splendid complex blending Rajput and Mughal architecture, located in the heart of Jaipur.",
    link: "https://www.tripadvisor.com/Attraction_Review-g304555-d317414-Reviews-City_Palace-Jaipur_Jaipur_District_Rajasthan.html",
  },
  {
    name: "Jantar Mantar",
    image: "/images/jantar-mantar.jpg",
    desc: "A UNESCO-listed astronomical observatory showcasing historic instruments used to measure time and celestial positions.",
    link: "https://www.tripadvisor.com/Attraction_Review-g304555-d317415-Reviews-Jantar_Mantar-Jaipur_Jaipur_District_Rajasthan.html",
  },
  {
    name: "Jaigarh Fort",
    image: "/images/jaigarh-fort.jpg",
    desc: "Overlooking Amber Fort, this impressive fort is famed for its massive cannon and robust defensive architecture.",
    link: "https://www.tripadvisor.com/Attraction_Review-g304555-d317416-Reviews-Jaigarh_Fort-Jaipur_Jaipur_District_Rajasthan.html",
  },
  {
    name: "Nahargarh Fort",
    image:
      "https://content-tourist.rajasthan.gov.in/uploads/nahargarh_fort_0dbb0b7d49.jpg",
    desc: "Offers panoramic views of Jaipur and is a popular spot for sunset photography and evening outings.",
    link: "https://obms-tourist.rajasthan.gov.in/place-details/Nahagarh-Fort",
    isBest: true,
  },
  {
    name: "Jal Mahal",
    image: "/images/jal-mahal.jpg",
    desc: "A picturesque palace seemingly floating on Man Sagar Lake, offering a serene escape from the city bustle.",
    link: "https://www.tripadvisor.com/Attraction_Review-g304555-d317418-Reviews-Jal_Mahal-Jaipur_Jaipur_District_Rajasthan.html",
  },
  {
    name: "Birla Mandir",
    image: "/images/birla-mandir.jpg",
    desc: "A stunning white marble temple dedicated to Lord Vishnu and Goddess Lakshmi, known for its elegant carvings.",
    link: "https://www.tripadvisor.com/Attraction_Review-g304555-d317419-Reviews-Birla_Mandir-Jaipur_Jaipur_District_Rajasthan.html",
  },
  {
    name: "Galtaji Temple",
    image: "/images/galtaji-temple.jpg",
    desc: "Also known as the Monkey Temple, it features natural springs and ancient water tanks in a peaceful setting.",
    link: "https://www.tripadvisor.com/Attraction_Review-g304555-d317420-Reviews-Galtaji_Temple-Jaipur_Jaipur_District_Rajasthan.html",
  },
  {
    name: "Sisodia Rani Garden",
    image: "/images/sisodia-rani-garden.jpg",
    desc: "A beautifully landscaped garden with fountains, murals, and vibrant flower beds, perfect for a leisurely stroll.",
    link: "https://www.tripadvisor.com/Attraction_Review-g304555-d317421-Reviews-Sisodia_Rani_Garden-Jaipur_Jaipur_District_Rajasthan.html",
    isBest: true,
  },
];

// Curated Data: Best Activities in Jaipur
const activities: Item[] = [
  {
    name: "Elephant Ride at Amer Fort",
    image: "/images/elephant-ride.jpg",
    desc: "Experience a majestic elephant ride to explore the historic Amer Fort.",
    link: "https://www.getyourguide.com/jaipur-l257/elephant-ride-at-amer-fort-t187495/",
    isBest: true,
  },
  {
    name: "Hot Air Balloon Ride",
    image: "/images/hot-air-balloon.jpg",
    desc: "Soar over Jaipur and enjoy breathtaking views of the city and its forts.",
    link: "https://www.getyourguide.com/jaipur-l257/hot-air-balloon-ride-t194321/",
    isBest: true,
  },
  {
    name: "Cultural Walk in Old Jaipur",
    image: "/images/cultural-walk.jpg",
    desc: "Join a guided walk to explore hidden gems and historic streets of Old Jaipur.",
    link: "https://www.tripadvisor.com/Attraction_Review-g304555-d317415-Reviews-Cultural_Walk-Jaipur_Jaipur_District_Rajasthan.html",
  },
  {
    name: "Rajasthani Cooking Class",
    image: "/images/cooking-class.jpg",
    desc: "Learn to cook authentic Rajasthani dishes with local chefs in a hands-on class.",
    link: "https://www.getyourguide.com/jaipur-l257/rajasthani-cooking-class-t234567/", // replace with actual link
  },
  {
    name: "Puppet Show at Chokhi Dhani",
    image: "/images/puppet-show.jpg",
    desc: "Enjoy a traditional puppet show and folk dance performance at Chokhi Dhani.",
    link: "https://www.getyourguide.com/jaipur-l257/chokhi-dhani-tours-t187499/",
    isBest: true,
  },
  {
    name: "Camel Safari",
    image: "/images/camel-safari.jpg",
    desc: "Embark on a camel safari on the outskirts of Jaipur and embrace desert vibes.",
    link: "https://www.tripadvisor.com/Attraction_Review-g304555-d317422-Reviews-Camel_Safari-Jaipur_Jaipur_District_Rajasthan.html",
  },
  {
    name: "Folk Music & Dance Performance",
    image: "/images/folk-performance.jpg",
    desc: "Immerse yourself in Jaipur’s vibrant culture with a live folk music and dance show.",
    link: "https://www.getyourguide.com/jaipur-l257/folk-music-dance-performance-t187500/", // replace with actual link
  },
  {
    name: "Heritage Cycle Tour",
    image: "/images/cycle-tour.jpg",
    desc: "Discover Jaipur’s history on a guided cycling tour through historic sites and markets.",
    link: "https://www.getyourguide.com/jaipur-l257/heritage-cycle-tour-jaipur-t234568/", // replace with actual link
  },
  {
    name: "Shopping Tour in Johari Bazaar",
    image: "/images/johari-bazaar.jpg",
    desc: "Experience the vibrant local culture with a guided shopping tour in Johari Bazaar.",
    link: "https://www.getyourguide.com/jaipur-l257/johari-bazaar-shopping-tour-t187501/", // replace with actual link
  },
  {
    name: "Photography Tour",
    image: "/images/photography-tour.jpg",
    desc: "Capture Jaipur’s stunning architecture and lively street scenes on a photography tour.",
    link: "https://www.getyourguide.com/jaipur-l257/jaipur-photography-tour-t187502/", // replace with actual link
    isBest: true,
  },
];

// Tab Buttons Component
function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full font-semibold transition-colors ${
        active ? "bg-blue-600 text-white" : "bg-white text-gray-700 border"
      } hover:bg-blue-600 hover:text-white`}
    >
      {label}
    </button>
  );
}

// Card Component
function Card({ item, clickable }: { item: Item; clickable?: boolean }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer"
      onClick={() => {
        if (clickable) window.open(item.link, "_blank");
      }}
    >
      <div className="relative w-full h-44">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function AfterExamsPage() {
  const [activeTab, setActiveTab] = useState<"cafes" | "spots" | "activities">(
    "cafes"
  );

  // Get sorted data to show BEST items first
  const getSorted = (data: Item[]) => {
    return [...data.filter((i) => i.isBest), ...data.filter((i) => !i.isBest)];
  };

  let displayedData: Item[] = [];
  let isClickable = false;
  if (activeTab === "cafes") {
    displayedData = getSorted(cafes);
    isClickable = true; // clicking opens Zomato page
  } else if (activeTab === "spots") {
    displayedData = getSorted(touristSpots);
  } else {
    displayedData = getSorted(activities);
  }

  return (
        <MinimalComingSoon/>
    // <div className="py-24 min-h-screen bg-gray-100 px-4 md:px-10">
    //   {/* Top Tab Bar */}
    //   <div className="max-w-5xl mx-auto mb-6 flex justify-center gap-4 py-8">
    //     <TabButton
    //       label="Cafés & Restaurants"
    //       active={activeTab === "cafes"}
    //       onClick={() => setActiveTab("cafes")}
    //     />
    //     <TabButton
    //       label="Tourist Spots"
    //       active={activeTab === "spots"}
    //       onClick={() => setActiveTab("spots")}
    //     />
    //     <TabButton
    //       label="Activities"
    //       active={activeTab === "activities"}
    //       onClick={() => setActiveTab("activities")}
    //     />
    //   </div>

    //   {/* Title */}
    //   <h1 className="text-3xl font-bold text-center mb-8">
    //     {activeTab === "cafes"
    //       ? "Top 20 Cafés in Jaipur"
    //       : activeTab === "spots"
    //       ? "Top 20 Tourist Spots in Jaipur"
    //       : "Best Activities in Jaipur"}
    //   </h1>

    //   {/* Card Grid */}
    //   <motion.div
    //     className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ duration: 0.5 }}
    //   >
    //     {displayedData.map((item) => (
    //       <Card key={item.name} item={item} clickable={isClickable} />
    //     ))}
    //   </motion.div>
    // </div>
  );
}
