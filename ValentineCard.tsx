
import React from 'react';
import { Heart } from 'lucide-react';

interface ValentineCardProps {
  noCount: number;
  noMessage: string;
  yesButtonSize: number;
  onNoClick: () => void;
  onYesClick: () => void;
}

const ValentineCard: React.FC<ValentineCardProps> = ({
  noCount,
  noMessage,
  yesButtonSize,
  onNoClick,
  onYesClick,
}) => {
  return (
    <div className="relative z-10 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border border-pink-100 max-w-md w-full text-center transition-all duration-500 hover:shadow-pink-200/50">
      <h1 className="text-4xl md:text-5xl font-romantic text-pink-600 mb-12 leading-tight pt-4">
        Will you be my Valentine?
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-4 min-h-[120px]">
        <button
          onClick={onYesClick}
          style={{ fontSize: `${yesButtonSize}px` }}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
        >
          <Heart className="w-5 h-5 fill-current" />
          Yes
        </button>
        
        <button
          onClick={onNoClick}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-6 rounded-full transition-all duration-200"
        >
          {noMessage}
        </button>
      </div>
    </div>
  );
};

export default ValentineCard;
