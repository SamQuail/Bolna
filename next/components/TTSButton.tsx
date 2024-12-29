"use client"
import React, { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { Button } from "@/components/ui/button"

const TTSButton = ({ text, lang }: { text: string; lang: string | null }) => {
    const { speak, voices } = useSpeechSynthesis();
    const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

    const languageMap: { [key: string]: string } = {
        Hindi: "hi-IN",
        Arabic: "ar-SA",
        Korean: "ko-KR",
        Japanese: "ja-JP",
      };
      const languageCode = languageMap[lang || "hi-IN"]

    useEffect(() => {
        
        // Filter for a voice that matches the desired language
        const matchingVoice = voices.find((v) => v.lang.startsWith(languageCode));
        setVoice(matchingVoice || null);
      }, [voices, lang]);

      
      const selectedVoice = voice || undefined

      return (
        <div>
        <Button
          onClick={(e) => {
            speak({ text, voice: selectedVoice })
            e.stopPropagation()

          }
        
            }

          className="text-6xl" variant={"ghost"}
        >
          🔊
        </Button>
        </div>
      );
}

export default TTSButton;