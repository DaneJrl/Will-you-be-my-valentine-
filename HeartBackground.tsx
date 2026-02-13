
import React, { useEffect, useState } from 'react';
import { HeartData } from '../types';

const HeartBackground: React.FC = () => {
  const [hearts, setHearts] = useState<HeartData[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart: HeartData = {
        id: Date.now(),
        left: Math.random() * 100 + '%',
        size: Math.random() * (30 - 10) + 10 + 'px',
        duration: Math.random() * (10 - 5) + 5 + 's',
        color: ['#f472b6', '#ec4899', '#db2777', '#fbcfe8'][Math.floor(Math.random() * 4)],
      };
      setHearts(prev => [...prev.slice(-20), newHeart]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart flex items-center justify-center"
          style={{
            left: heart.left,
            animationDuration: heart.duration,
            color: heart.color,
          }}
        >
          <svg
            width={heart.size}
            height={heart.size}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default HeartBackground;
