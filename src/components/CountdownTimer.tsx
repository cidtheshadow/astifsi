import React, { useState, useEffect } from 'react';
import { Clock, Calendar, AlertCircle } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC = () => {
  const [targetType, setTargetType] = useState<'abstract' | 'conference'>('abstract');
  
  const targets = {
    abstract: {
      name: "Abstract Submission Deadline",
      dateStr: "2026-10-04T23:59:59",
      formatted: "October 4, 2026"
    },
    conference: {
      name: "Conference Inauguration",
      dateStr: "2026-10-15T09:00:00",
      formatted: "October 15, 2026"
    }
  };

  const calculateTimeLeft = (targetDate: string): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targets[targetType].dateStr));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targets[targetType].dateStr));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetType]);

  return (
    <div className="bg-[#FAF6F0] rounded-2xl p-5 border border-[#E8DEC8] shadow-md max-w-xl mx-auto">
      {/* Target selector tabs */}
      <div className="flex items-center justify-between gap-2 bg-[#F5EFE6] p-1.5 rounded-xl mb-4 border border-[#E8DEC8]">
        <button
          onClick={() => setTargetType('abstract')}
          className={`flex-1 text-xs font-semibold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            targetType === 'abstract'
              ? 'bg-[#E67E22] text-white font-bold shadow-xs'
              : 'text-[#52373D] hover:text-[#580B1E]'
          }`}
        >
          <AlertCircle className="w-3.5 h-3.5" />
          <span className="whitespace-nowrap">Abstract Deadline (Oct 4)</span>
        </button>
        <button
          onClick={() => setTargetType('conference')}
          className={`flex-1 text-xs font-semibold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            targetType === 'conference'
              ? 'bg-[#580B1E] text-white font-bold shadow-xs'
              : 'text-[#52373D] hover:text-[#580B1E]'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span className="whitespace-nowrap">Conference Start (Oct 15)</span>
        </button>
      </div>

      <div className="text-center mb-3">
        <p className="text-[11px] sm:text-xs uppercase tracking-wider text-[#52373D] font-semibold flex flex-wrap items-center justify-center gap-1">
          <Clock className="w-3.5 h-3.5 text-[#6B0F24] shrink-0" />
          <span>Countdown to {targets[targetType].name}</span>
          <span className="whitespace-nowrap font-bold text-[#580B1E]">({targets[targetType].formatted})</span>
        </p>
      </div>

      {/* Counter Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item, idx) => (
          <div 
            key={idx} 
            className="bg-[#FDFBF7] rounded-xl p-3 text-center border border-[#E8DEC8] shadow-2xs hover:border-[#6B0F24]/50 transition-colors"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-[#580B1E] font-serif-editorial">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs font-bold text-[#52373D] uppercase tracking-wider mt-0.5 font-heading">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
