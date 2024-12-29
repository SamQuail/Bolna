"use client"
import LevelOne from "@/components/levels/LevelOne"
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";
import { transliterate } from 'transliteration';

const Symbols = () => {
    const searchParams = useSearchParams()
    const [characters, setCharacters] = useState<string[]>([])
    const [languageIndex, setLanguageIndex] = useState<number>(0);
    const unicodeRanges = [
        { language: "Hindi", ranges: ["U+0900-U+097F"] },
        { language: "Arabic", ranges: ["U+0600-U+06FF", "U+0750-U+077F"] },
        { language: "Korean", ranges: ["U+AC00-U+D7AF", "U+1100-U+11FF", "U+3130-U+318F"] },
        { language: "Japanese", ranges: ["U+3040-U+309F", "U+30A0-U+30FF", "U+4E00-U+9FFF"] }
      ];
      useEffect(() => {
        // Get the 'language' query parameter
        const languageParam = searchParams.get('language');
        
        if (languageParam) {
            // Find the index of the language in the unicodeRanges array
            const index = unicodeRanges.findIndex(
                (entry) => entry.language.toLowerCase() === languageParam.toLowerCase()
            );
            if (index !== -1) {
                setLanguageIndex(index); // Set the language index based on the query parameter
            }
        }
    }, [searchParams]);

    useEffect(() => {
        // If languageIndex is valid, start fetching characters
        if (languageIndex !== null) {
            setCharacters([]); // Clear previous characters
            
            // Fetch characters for the selected language based on the languageIndex
            for (const range of unicodeRanges[languageIndex].ranges) {
                getCharacters(range);
            }
        }
    }, [languageIndex]); // Only run this effect when languageIndex changes

 
      const getCharacters = (range: string) => {
        const [start, end] = range.split("-");
        const startCode = parseInt(start.replace("U+", ""), 16);
        const endCode = parseInt(end.replace("U+", ""), 16);
        const seenTranslations = new Set<string>();
    
        const newCharacters: string[] = [];
        for (let code = startCode; code <= endCode; code++) {
            const transition = transliterate(String.fromCodePoint(code))
            if (transition !== "" && !seenTranslations.has(transition)) {
                newCharacters.push(String.fromCodePoint(code));
                seenTranslations.add(transition)
            }
           
        }
        
        setCharacters(prev => [...prev, ...newCharacters]);
    }

    return (
        <LevelOne values={characters} language={searchParams.get('language')}/>
    )
}

export default Symbols;