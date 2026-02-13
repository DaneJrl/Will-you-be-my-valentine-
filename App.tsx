
import React, { useState, useEffect, useCallback } from 'react';
import { Heart, Sparkles, Music, Send } from 'lucide-react';
import HeartBackground from './components/HeartBackground';
import ValentineCard from './components/ValentineCard';
import SuccessView from './components/SuccessView';
import { GoogleGenAI } from "@google/genai";

const NO_MESSAGES = [
  "No",
  "Are you sure?",
  "Really sure??",
  "Think again! 🥺",
  "Last chance!",
  "Surely not?",
  "You might regret this!",
  "Give it another thought!",
  "Are you absolutely certain?",
  "This could be a mistake!",
  "Have a heart! ❤️",
  "Don't be so cold!",
  "Change of heart?",
  "Is that your final answer?",
  "You're breaking my heart... ;(",
  "I'm gonna cry... 😭",
  "Wait! Click the other one!",
  "Okay, now you're just being mean!",
  "Pwease? 👉👈",
  "I'll buy you chocolate!",
];

const App: React.FC = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [loveNote, setLoveNote] = useState<string | null>(null);

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(prev => prev + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);
  };

  const generateLoveNote = async () => {
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Write a short, extremely cute, and cheesy 2-sentence love note for a Valentine. Keep it sweet and romantic.",
      });
      setLoveNote(response.text || "You make my heart skip a beat every single day. I'm so lucky to have you!");
    } catch (error) {
      console.error("Error generating note:", error);
      setLoveNote("You are the highlight of my every day. I love you!");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <HeartBackground />
      
      {!yesPressed ? (
        <ValentineCard 
          noCount={noCount}
          noMessage={NO_MESSAGES[Math.min(noCount, NO_MESSAGES.length - 1)]}
          yesButtonSize={yesButtonSize}
          onNoClick={handleNoClick}
          onYesClick={handleYesClick}
        />
      ) : (
        <SuccessView 
          loveNote={loveNote} 
          isGenerating={isGenerating} 
          onGenerate={generateLoveNote} 
        />
      )}

      {/* Footer Branding */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-pink-400 text-sm opacity-60">
        Made with Love & Code
      </div>
    </div>
  );
};

export default App;
