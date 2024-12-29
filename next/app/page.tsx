"use client"
import { Status } from "@/common/types";
import CardsSelect from "@/components/CardsSelect";
import SelectLanguage from "@/components/SelectLanguage";
import { useState } from "react";



export default function Home() {
  // level 1 = flash cards
  // level 2 = multiple choice
  // level 3 = match it
  // level 4 = write the answer
  // each level should be generic so they can be re-used for everything
  const [language, setLanguage] = useState<Status | null>(null)
  return (
    <div className="flex flex-col justify-center gap-4 w-screen items-center justify-evenly h-screen">
      <SelectLanguage setValue={setLanguage} value={language}/>
      <CardsSelect language={language} />
      
    </div>
  );
}
