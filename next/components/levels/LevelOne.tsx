"use client"
import { useEffect, useState } from "react";
import {
    Card,
  } from "@/components/ui/card"
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { transliterate } from 'transliteration';
import TTSButton from "../TTSButton";



const LevelOne = ({values, language}: {values: string[]; language: string | null}) => {
    const [flipped, setFlipped] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      if (currentIndex < values.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setFlipped(false); // Reset flip state when moving to the next card
      }
    };
  
    const handleBack = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        setFlipped(false); // Reset flip state when moving to the previous card
      }
    }
    const progress = values.length > 0 
    ? ((currentIndex + 1) / values.length) * 100 
    : 0;

    useEffect(() => {
      console.log(transliterate(values[currentIndex]))
    })

    return (
        
        <div className="flex flex-col justify-center items-center h-screen text-center gap-20">
            
            <div>
                <p className="text-[#16a34a] text-2xl">{currentIndex+1}/{values.length+1}</p>
            <Progress value={progress} className="w-[60vh]" />
            </div>
        <motion.div
          className="relative w-[60vh] h-[30vh]"
          onClick={() => setFlipped(!flipped)} // Toggle flip on click
          style={{ perspective: "1000px" }} // Apply perspective for 3D effect
        >
          {/* Front Side */}
          <motion.div
            className="absolute w-full h-full bg-white rounded-lg shadow-lg flex justify-center items-center"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
          >
            <Card className="w-full h-full flex justify-center items-center">
              <p className="text-9xl text-[#16a34a]">{values[currentIndex]}</p>
            </Card>
          </motion.div>
  
          {/* Back Side */}
          <motion.div
            className="absolute w-full h-full bg-gray-100 rounded-lg shadow-lg flex justify-center items-center"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: flipped ? 0 : 180 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
          >
            <Card className="w-full h-full flex justify-center items-center flex flex-row gap-5">
              <p className="text-9xl text-[#16a34a]">{transliterate(values[currentIndex])}</p>
              <TTSButton lang={language}  text={values[currentIndex]}/>
              
            </Card>
          </motion.div>
        </motion.div>
        <div className="flex flex-row justify-between w-[60vh]">
        <Button variant="outline" onClick={() => handleBack()}>Back</Button>
        <Button variant="outline" onClick={() => handleNext()}>Next</Button>



        </div>
      </div>
    )
}

export default LevelOne