import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SUMMIT_DATE = new Date('2025-03-14T09:00:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const difference = +SUMMIT_DATE - +new Date();
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Event Starts In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div key={key} className="bg-white rounded-xl p-4 shadow-lg">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-gray-600 capitalize">{key}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}