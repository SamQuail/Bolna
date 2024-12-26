"use client"
import { useState } from "react";
import { Button } from "./ui/button";


const CardsSelect = () => {
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
      { title: 'Learn symbols', description: 'Understand the symbols used in this language' },
      { title: 'Learn words', description: 'Build your vocabulary with key words' },
      { title: 'Grammar rules', description: 'Learn the rules that govern sentence structure' },
      { title: 'Sentences', description: 'Learn how to form meaningful sentences' },
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
              {/* ShadCN Button with Custom Green Color */}
              <Button
                className={`px-8 py-4 rounded-full text-white transition-all duration-300 ${
                  activeSection === index
                    ? 'bg-[#14532d] scale-110' // Darker green for active state
                    : 'bg-[#16a34a] hover:bg-[#15803d]' // Base green and darker on hover
                }`}
              >
                {section.title}
              </Button>
  
              {/* Description Pop-Up */}
              {activeSection === index && (
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 p-4 rounded-lg shadow-lg max-w-xs">
                  <p>{section.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
  
        {/* Bottom Text */}
        <div className="text-lg mt-8 text-gray-700">
          Hover over the pills to explore different sections ✨
        </div>
      </div>
    );
            
    
}

export default CardsSelect;