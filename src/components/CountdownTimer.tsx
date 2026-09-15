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
      formatted: "Oct 4, 2026"
    },
    conference: {
      name: "Conference Inauguration",
      dateStr: "2026-10-15T09:00:00",
      formatted: "Oct 15, 2026"
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
    <div className="editorial-card rounded-2xl p-4 sm:p-6 border border-stone-200 shadow-sm max-w-xl mx-auto">
      {/* Target selector tabs */}
      <div className="flex items-center justify-between gap-2 bg-stone-100 p-1 rounded-xl mb-4 border border-stone-200">
        <button
          onClick={() => setTargetType('abstract')}
          className={`flex-1 text-xs font-semibold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            targetType === 'abstract'
              ? 'bg-[#E86024] text-white font-bold shadow-sm'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Abstract Deadline (Oct 4)</span>
        </button>
        <button
          onClick={() => setTargetType('conference')}
          className={`flex-1 text-xs font-semibold py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
            targetType === 'conference'
              ? 'bg-amber-600 text-white font-bold shadow-sm'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Conference Start (Oct 15)</span>
        </button>
      </div>

      <div className="text-center mb-3">
        <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold flex items-center justify-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-amber-600" />
          Countdown to {targets[targetType].name} ({targets[targetType].formatted})
        </p>
      </div>

      {/* Counter Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-xl p-2.5 sm:p-3 text-center border border-stone-200 shadow-sm hover:border-amber-500/50 transition-colors"
          >
            <div className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-editorial">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs font-medium text-stone-500 uppercase tracking-wider mt-0.5">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
