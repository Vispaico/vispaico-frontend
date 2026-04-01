"use client";

import Image from 'next/image';
import React from 'react';

interface FounderNoteProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const FounderNoteCourse: React.FC<FounderNoteProps> = ({
  title = 'From Niels',
  className = ''
}) => {
  return (
    <div
      className={`mx-auto flex max-w-4xl flex-wrap items-start gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-left shadow-lg sm:flex-nowrap sm:p-8 ${className}`.trim()}
    >
      <div className="flex-shrink-0">
        <Image
          src="/images/niels_coffee.webp"
          alt="Niels enjoying coffee"
          width={112}
          height={112}
          className="h-20 w-20 rounded-full object-cover shadow-md md:h-24 md:w-24"
          priority={false}
        />
      </div>
      <div className="space-y-4 text-gray-800">
        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
          {title}
        </div>
        <div className="space-y-4 text-base leading-relaxed md:text-lg">
          <p>Hi</p>
        <p>
                AI moves fast. Most people respond by consuming more content. This course is built for people who want real, practical capability — not just another pile of notes, prompts, and unfinished ideas.
              </p>
              <p>
                You won’t just watch prompts. You’ll use real tools, build something real, deploy it, and leave with a repeatable system you can use again.
              </p>
              <p>
                If that sounds like the right kind of pressure and the right kind of momentum, apply now and we’ll send you the full details by email.
              </p>
              <p>
                Questions? Email me at <span className="text-orange-600">niels@vispaico.com</span>
              </p>
              <p>
                Or call me: <span className="text-orange-600">+84 (0)936 166 892</span> - WhatsApp | Zalo | WeChat
              </p>
        </div>
      </div>
    </div>
  );
};

export default FounderNoteCourse;
