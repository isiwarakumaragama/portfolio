import React from 'react';

interface TimelineEvent {
  date: string;
  title: string;
  company: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[#36BCF7]/50 to-transparent" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-[#36BCF7] rounded-full border-4 border-[#0A0A0A]" />

            {/* Content */}
            <div className="md:w-1/2 pl-8 md:pl-0">
              <div className="p-6 bg-[#121212] rounded-lg hover:bg-[#1A1A1A] transition-colors duration-300">
                <span className="text-[#36BCF7] text-sm font-semibold">{event.date}</span>
                <h4 className="text-xl font-bold mt-2">{event.title}</h4>
                <h5 className="text-gray-400 mt-1">{event.company}</h5>
                <p className="text-gray-400 mt-4">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}