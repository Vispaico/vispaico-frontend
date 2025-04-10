// src/components/HeroBackground.tsx (Restored Particle Logic + ESLint Fixes)
"use client";

import React, { useRef, useEffect } from 'react';
import type p5Types from 'p5';
import debounce from 'lodash/debounce';

// --- Particle Class Definition ---
class Particle {
  p: p5Types;
  pos: p5Types.Vector;
  vel: p5Types.Vector;
  acc: p5Types.Vector;
  maxSpeed: number = 2;
  color: p5Types.Color;
  history: p5Types.Vector[] = [];

  constructor(pInstance: p5Types, x: number, y: number, color: p5Types.Color) {
    this.p = pInstance;
    this.pos = this.p.createVector(x, y);
    // Velocity needs to change, keep as property
    this.vel = this.p.createVector(this.p.random(-1, 1), this.p.random(-1, 1)).normalize().mult(this.p.random(0.5, 1.5));
    // Acceleration needs to change, keep as property
    this.acc = this.p.createVector(0, 0);
    this.color = color;
  }

   update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0); // Reset acceleration each frame
    this.history.push(this.pos.copy());
    if (this.history.length > 50) { this.history.splice(0, 1); }
  }

  applyForce(force: p5Types.Vector) {
    this.acc.add(force); // Modify acceleration
  }

  avoid(target: p5Types.Vector, P5Vector: typeof p5Types.Vector) { // Pass P5Vector static methods if needed
      const desired = P5Vector.sub(this.pos, target); // Use static method
      const d = desired.mag();
       if (d < 100 && d > 0) {
          desired.setMag(this.maxSpeed);
          const steer = P5Vector.sub(desired, this.vel); // Use static method
          steer.limit(0.3);
          this.applyForce(steer);
       }
  }

  edges(width: number, height: number) {
    // Position needs to change, so use 'this.pos.x =' etc.
    if (this.pos.x > width + 10) this.pos.x = -10;
    if (this.pos.x < -10) this.pos.x = width + 10;
    if (this.pos.y > height + 10) this.pos.y = -10;
    if (this.pos.y < -10) this.pos.y = height + 10;
   }

  show() {
    this.p.stroke(this.color);
    this.p.strokeWeight(2);
    this.p.point(this.pos.x, this.pos.y);
   }
}
// --- End Particle Class ---


const HeroBackground: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let canvasInstance: p5Types | null = null;
    let p5Library: typeof p5Types | null = null;
    let debouncedResizer: ReturnType<typeof debounce> | null = null;

    const initP5 = async () => {
      p5Library = (await import('p5')).default;
      if (!p5Library || !sketchRef.current) return;

      const p5 = p5Library; // Alias for convenience

      const sketch = (p: p5Types) => {
         let particles: Particle[] = []; // Keep let as it's reassigned in setup
         let canvasWidth: number;
         let canvasHeight: number;
         let numParticles: number;
         let color1: p5Types.Color, color2: p5Types.Color, bgColor: p5Types.Color;

         const calculateDimensions = () => {
            canvasWidth = sketchRef.current?.offsetWidth || window.innerWidth;
            canvasHeight = sketchRef.current?.offsetHeight || window.innerHeight;
            numParticles = Math.min(150, Math.floor(canvasWidth / 10));
         };

        p.setup = () => {
          calculateDimensions();
          p.createCanvas(canvasWidth, canvasHeight).parent(sketchRef.current!);
          p.frameRate(30);
          color1 = p.color(165, 180, 252, 150);
          color2 = p.color(148, 163, 184, 150);
          bgColor = p.color(30, 41, 59);
          particles = []; // Reassign array
          for (let i = 0; i < numParticles; i++) {
              const particleColor = p.random() > 0.5 ? color1 : color2; // Use const here
              particles.push(new Particle(p, p.random(p.width), p.random(p.height), particleColor));
          }
        };

        p.draw = () => {
          p.background(bgColor);
          const P5Vector = p5.Vector; // Get static Vector methods via alias

          // Use const for particle in loop if not reassigning particle itself
          for (const particle of particles) {
                const targetVector = p.createVector(p.mouseX, p.mouseY); // Use const
                // Pass P5Vector to avoid method
                particle.avoid(targetVector, P5Vector);

                particle.update(); // These methods modify internal state, which is fine
                particle.show();
                particle.edges(p.width, p.height);
          }
        };

        const handleResizeLogic = () => { /* ... */ };
        debouncedResizer = debounce(handleResizeLogic, 250);
        p.windowResized = () => { if (debouncedResizer) { debouncedResizer(); } };
      }; // End sketch function

      canvasInstance = new p5(sketch);
    }; // End initP5

    if (typeof window !== 'undefined') { initP5(); }

    return () => { /* ... cleanup ... */ };
  }, []);

  return <div ref={sketchRef} className="absolute inset-0 z-[-1] overflow-hidden bg-slate-800 min-h-screen" />;
};

export default HeroBackground;

// Ensure calculateDimensions is defined ONLY inside the scope where sketchRef/window are accessible
// (It's correctly inside initP5 -> sketch above)