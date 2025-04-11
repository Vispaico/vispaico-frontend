// src/components/HeroBackground.tsx (Restoring Working Particle Logic)
"use client";

import React, { useRef, useEffect } from 'react';
import type p5Types from 'p5'; // Use type import (ensure @types/p5 installed)
import debounce from 'lodash/debounce'; // Keep debounce for resize

// --- Particle Class Definition (ONLY ONCE) ---
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
    this.vel = this.p.createVector(this.p.random(-1, 1), this.p.random(-1, 1)).normalize().mult(this.p.random(0.5, 1.5));
    this.acc = this.p.createVector(0, 0);
    this.color = color;
  }
   update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.history.push(this.pos.copy());
    if (this.history.length > 50) { this.history.splice(0, 1); }
  }
  applyForce(force: p5Types.Vector) { this.acc.add(force); }
  avoid(target: p5Types.Vector, P5Vector: typeof p5Types.Vector) { // Accept P5Vector static methods
      const desired = P5Vector.sub(this.pos, target);
      const d = desired.mag();
       if (d < 100 && d > 0) {
          desired.setMag(this.maxSpeed);
          const steer = P5Vector.sub(desired, this.vel);
          steer.limit(0.3);
          this.applyForce(steer);
       }
  }
  edges(width: number, height: number) {
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
// --- End Particle Class Definition ---


const HeroBackground: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Keep canvasInstance scoped within useEffect, needed for cleanup
    let canvasInstance: p5Types | null = null;
    let p5Library: typeof p5Types | null = null;
    let debouncedResizer: ReturnType<typeof debounce> | null = null;

    const initP5 = async () => {
      p5Library = (await import('p5')).default;
      // Check ref *after* p5 is loaded
      if (!p5Library || !sketchRef.current) {
          console.warn("p5 library or sketchRef not ready.");
          return;
      }

      const p5 = p5Library; // Alias

      const sketch = (p: p5Types) => {
         let particles: Particle[] = [];
         let canvasWidth: number;
         let canvasHeight: number;
         let numParticles: number;
         let color1: p5Types.Color, color2: p5Types.Color, bgColor: p5Types.Color;

         const calculateDimensions = () => {
            // Use optional chaining ?. for safety, though ref checked before sketch creation
            canvasWidth = sketchRef.current?.offsetWidth || window.innerWidth;
            canvasHeight = sketchRef.current?.offsetHeight || window.innerHeight;
            // Add minimum particle count
            numParticles = Math.max(50, Math.min(150, Math.floor(canvasWidth / 10)));
         };

        p.setup = () => {
          calculateDimensions();
          // Ensure ref still exists before parenting
          if (!sketchRef.current) return;
          p.createCanvas(canvasWidth, canvasHeight).parent(sketchRef.current); // Use non-null assertion removed
          p.frameRate(30);
          color1 = p.color(165, 180, 252, 150);
          color2 = p.color(148, 163, 184, 150);
          bgColor = p.color(30, 41, 59);
          particles = [];
          for (let i = 0; i < numParticles; i++) {
              const particleColor = p.random() > 0.5 ? color1 : color2;
              particles.push(new Particle(p, p.random(p.width), p.random(p.height), particleColor));
          }
        };

        p.draw = () => {
          p.background(bgColor);
          const P5Vector = p5.Vector;

          for (const particle of particles) {
                const targetVector = p.createVector(p.mouseX, p.mouseY);
                particle.avoid(targetVector, P5Vector); // Pass P5Vector constructor/methods
                particle.update();
                particle.show();
                particle.edges(p.width, p.height);
          }
        };

        const handleResizeLogic = () => {
           if (!sketchRef.current || !p?.width || !p?.height) { // Check p5 instance too
               console.log("Resize skipped, ref or p5 instance not ready.");
               return;
           }
           console.log("Executing debounced resize logic...");
           calculateDimensions();
           p.resizeCanvas(canvasWidth, canvasHeight);
           p.setup(); // Rerun setup for new dimensions/particle count
        };

        debouncedResizer = debounce(handleResizeLogic, 250);
        p.windowResized = () => { if (debouncedResizer) { debouncedResizer(); } };

      }; // End sketch function

      // Only create instance if ref is still valid
       if (sketchRef.current) {
           canvasInstance = new p5(sketch);
       } else {
           console.error("Cannot create p5 instance, sketchRef is null.");
       }
    }; // End initP5

    // Check window exists before calling initP5
    if (typeof window !== 'undefined') {
      initP5();
    }

    // Cleanup function
    return () => {
      if (debouncedResizer) { debouncedResizer.cancel(); }
      if (canvasInstance) {
        console.log("HeroBackground: Removing p5 instance");
        canvasInstance.remove();
        // canvasInstance = null; // Not strictly needed
      }
    };
  }, []); // Empty dependency array

  // Ensure the div has dimensions for offsetWidth/Height calculation
  return <div ref={sketchRef} className="absolute inset-0 z-[-1] overflow-hidden bg-slate-800 min-h-screen w-full h-full" />;
};

export default HeroBackground;