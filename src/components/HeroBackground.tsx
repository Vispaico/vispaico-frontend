// src/components/HeroBackground.tsx (Debounced Resize, NO Duplicate Class)
"use client";

import React, { useRef, useEffect } from 'react';
import type p5Types from 'p5';
import debounce from 'lodash/debounce';

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
  avoid(target: p5Types.Vector) {
      let desired = { x: this.pos.x - target.x, y: this.pos.y - target.y };
      let d = Math.sqrt(desired.x * desired.x + desired.y * desired.y);
       if (d < 100 && d > 0) {
          const magnitude = this.maxSpeed / d;
          const steerX = (desired.x * magnitude - this.vel.x) * 0.3;
          const steerY = (desired.y * magnitude - this.vel.y) * 0.3;
          this.applyForce(this.p.createVector(steerX, steerY));
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
    let canvasInstance: p5Types | null = null;
    let p5Library: typeof p5Types | null = null;
    let debouncedResizer: ReturnType<typeof debounce> | null = null;

    const initP5 = async () => {
      p5Library = (await import('p5')).default;
      if (!p5Library || !sketchRef.current) return;

      const p5 = p5Library; // Essential: Alias the loaded library

      const sketch = (p: p5Types) => {
         let particles: Particle[] = [];
         let canvasWidth: number;
         let canvasHeight: number;
         let numParticles: number;
         let color1: p5Types.Color, color2: p5Types.Color, bgColor: p5Types.Color;

         // --- Define calculateDimensions INSIDE sketch scope ---
         const calculateDimensions = () => {
            canvasWidth = sketchRef.current?.offsetWidth || window.innerWidth;
            canvasHeight = sketchRef.current?.offsetHeight || window.innerHeight;
            numParticles = Math.min(150, Math.floor(canvasWidth / 10));
        }
        // --- End calculateDimensions ---

        p.setup = () => {
          calculateDimensions();
          p.createCanvas(canvasWidth, canvasHeight).parent(sketchRef.current!);
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
          const P5Vector = p5.Vector; // Access static methods via alias

          for (let particle of particles) {
                let targetVector = p.createVector(p.mouseX, p.mouseY);
                // Pass P5Vector constructor or necessary methods if Particle.avoid needs them
                // Or reconstruct the avoid logic here using p and P5Vector
                 let desired = P5Vector.sub(particle.pos, targetVector);
                 let d = desired.mag();
                 if (d < 100 && d > 0) {
                    desired.setMag(particle.maxSpeed);
                    let steer = P5Vector.sub(desired, particle.vel);
                    steer.limit(0.3);
                    particle.applyForce(steer);
                 }

                particle.update();
                particle.show();
                particle.edges(p.width, p.height);
          }
        };

        const handleResizeLogic = () => {
           console.log("Executing debounced resize logic...");
           if (!sketchRef.current || !p) { // Check p instance too
               console.log("Resize skipped, ref or p5 instance is null.");
               return;
           }
           calculateDimensions();
           p.resizeCanvas(canvasWidth, canvasHeight);
           // Rerun setup to regenerate particles for new size/count
           p.setup();
        };

        debouncedResizer = debounce(handleResizeLogic, 250);

        p.windowResized = () => {
            if (debouncedResizer) {
                console.log("windowResized event triggered, calling debounced function...");
                debouncedResizer();
            }
        };
      }; // End sketch function

      canvasInstance = new p5(sketch);
    }; // End initP5

    if (typeof window !== 'undefined') {
      initP5();
    }

    // Cleanup function
    return () => {
      if (debouncedResizer) { debouncedResizer.cancel(); } // Cancel debounce timer
      if (canvasInstance) {
        console.log("HeroBackground: Removing p5 instance");
        canvasInstance.remove();
        canvasInstance = null;
      }
    };
  }, []);

  return <div ref={sketchRef} className="absolute inset-0 z-[-1] overflow-hidden bg-slate-800 min-h-screen" />;
};

export default HeroBackground;

// --- NO SECOND PARTICLE CLASS DEFINITION HERE ---