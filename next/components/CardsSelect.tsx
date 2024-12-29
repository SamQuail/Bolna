"use client"
import { useState } from "react";
import { Button } from "./ui/button";
import { Status } from "@/common/types";
import Link from "next/link";

interface ICardsSelect {
  language: Status | null
}

const CardsSelect = ({language}: ICardsSelect) => {
    const [activeSection, setActiveSection] = useState<number | null>(null);

    const sections = [
      { title: 'Learn symbols', description: 'Understand the symbols used in this language', link: "/symbols" },
      { title: 'Learn words', description: 'Build your vocabulary with key words',link: "/symbols" },
      { title: 'Grammar rules', description: 'Learn the rules that govern sentence structure',link: "/symbols" },
      { title: 'Sentences', description: 'Learn how to form meaningful sentences',link: "/symbols" },
    ]

    return (
        <div className="flex flex-col gap-8 justify-center items-center text-center py-12 ">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 ">
          Explore the Language Learning Journey
        </h1>
  
        {/* Interactive Pills (ShadCN Button) */}
        <div className="flex gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveSection(index)}
              onMouseLeave={() => setActiveSection(null)}
            >
             <Link href={{
              pathname: `${section.link}`,
              query: {
                language: `${language?.value}`
              }

             }}>
              <Button
                className={`px-8 py-4 rounded-full text-white transition-all duration-300 ${
                  activeSection === index
                    ? 'bg-[#14532d] scale-110' // Darker green for active state
                    : 'bg-[#16a34a] hover:bg-[#15803d]' // Base green and darker on hover
                }`}
              >
                {section.title}
              </Button>
              </Link>
            </div>
          ))}
        </div>
  
        {/* Bottom Text */}
        <div className="text-lg mt-8 text-gray-700">
          Click a section to start learning ✨
        </div>
      </div>
    );
            
    
}

export default CardsSelect;