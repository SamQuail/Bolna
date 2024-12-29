declare module 'react-speech-kit' {
    interface SpeakOptions {
      text: string;
      voice?: SpeechSynthesisVoice;
      rate?: number;
      pitch?: number;
    }
  
    interface UseSpeechSynthesisReturn {
      speak: (options: SpeakOptions) => void;
      cancel: () => void;
      speaking: boolean;
      supported: boolean;
      voices: SpeechSynthesisVoice[];
    }
  
    export function useSpeechSynthesis(): UseSpeechSynthesisReturn;
  }