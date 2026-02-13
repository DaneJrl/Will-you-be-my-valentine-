
import React from 'react';
import { Sparkles, Heart, Send, Loader2 } from 'lucide-react';

interface SuccessViewProps {
  loveNote: string | null;
  isGenerating: boolean;
  onGenerate: () => void;
}

const SuccessView: React.FC<SuccessViewProps> = ({ loveNote, isGenerating, onGenerate }) => {
  return (
    <div className="relative z-10 bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border-4 border-pink-400 max-w-lg w-full text-center animate-in zoom-in duration-500">
      <div className="mb-6">
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmRwZms1Mmd4ZXhpZ2h2ZHF6ZHFvbmZ0ZzR0YXJ1bWtzZW1pZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/iCv7Ecl77iS6K6k42y/giphy.gif" 
          alt="Celebration" 
          className="w-64 h-64 mx-auto rounded-2xl"
        />
      </div>
      
      <h2 className="text-5xl font-romantic text-pink-600 mb-4 animate-pulse">
        Yay!!! I knew it! ❤️
      </h2>
      <p className="text-gray-600 text-lg mb-8">
        You've made me the happiest person in the world!
      </p>

      <div className="space-y-4">
        {!loveNote ? (
          <button
            onClick={onGenerate}
            disabled={isGenerating}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 px-6 rounded-2xl font-bold shadow-xl hover:shadow-pink-300/50 transition-all flex items-center justify-center gap-2 group"
          >
            {isGenerating ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            )}
            {isGenerating ? "Whispering to Cupid..." : "Get a special Love Note"}
          </button>
        ) : (
          <div className="bg-pink-50 p-6 rounded-2xl border border-pink-200 text-pink-800 italic text-xl font-romantic shadow-inner animate-in fade-in slide-in-from-bottom-4">
            "{loveNote}"
          </div>
        )}

        <div className="flex justify-center gap-3 pt-4">
          <Heart className="text-pink-500 fill-pink-500 w-8 h-8 animate-bounce" />
          <Heart className="text-pink-400 fill-pink-400 w-8 h-8 animate-bounce delay-75" />
          <Heart className="text-pink-300 fill-pink-300 w-8 h-8 animate-bounce delay-150" />
        </div>
      </div>
    </div>
  );
};

export default SuccessView;
