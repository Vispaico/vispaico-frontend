'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';
import { dur, ease } from '@/lib/motion';

type CountUpProps = {
  value: string;
  className?: string;
};

// Parses values like "70%", "10x", "100%", "24/7", or a plain integer.
// Animates the numeric portion; prefix and suffix render statically around it.
function parseValue(raw: string): { target: number; prefix: string; suffix: string } | null {
  const m = raw.match(/^(\D*?)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  const [, prefix, numStr, suffix] = m;
  return { target: parseFloat(numStr), prefix, suffix };
}

function formatNumber(n: number): string {
  if (Number.isInteger(n)) return String(Math.round(n));
  return n.toFixed(1);
}

export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const mv = useMotionValue(0);
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(parsed ? formatNumber(0) : value);

  useEffect(() => {
    if (!parsed || !inView) return;
    const controls = animate(mv, parsed.target, {
      duration: dur.slow * 2.2,
      ease,
    });
    const unsub = mv.on('change', (v) => setDisplay(formatNumber(v)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, parsed, mv]);

  if (!parsed) {
    // Non-numeric string (e.g. "24/7") — render as-is.
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  );
}
