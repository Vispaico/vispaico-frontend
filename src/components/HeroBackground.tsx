// src/components/HeroBackground.tsx (NO Duplicate Class, ESLint Fixes)
"use client";

import React, { useRef, useEffect } from 'react';
import type p5Types from 'p5';
import debounce from 'lodash/debounce';

// --- Particle Class Definition (Defined ONLY ONCE) ---
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
  avoid(target: p5Types.Vector, P5Vector: typeof p5Types.Vector) {
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


// --- Star Class Definition ---
class Star {
    p: p5Types;
    pos: p5Types.Vector;
    lifespan: number;
    maxLifespan: number;

    constructor(pInstance: p5Types, x: number, y: number) {
        this.p = pInstance;
        this.pos = this.p.createVector(x, y);
        this.maxLifespan = this.p.random(30, 60); // Lifespan in frames
        this.lifespan = this.maxLifespan;
    }

    update() {
        this.lifespan--;
    }

    show() {
        const halfLife = this.maxLifespan / 2;
        // Fade in, then fade out
        const brightness = this.lifespan > halfLife
            ? this.p.map(this.lifespan, this.maxLifespan, halfLife, 0, 255)
            : this.p.map(this.lifespan, halfLife, 0, 255, 0);

        this.p.stroke(255, 255, 255, brightness);
        this.p.strokeWeight(this.p.random(1, 2.5));
        this.p.point(this.pos.x, this.pos.y);
    }

    isDead() {
        return this.lifespan < 0;
    }
}


const HeroBackground: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let canvasInstance: p5Types | null = null;
    let p5Library: typeof p5Types | null = null;
    let debouncedResizer: ReturnType<typeof debounce> | null = null;

    const initP5 = async () => {
      p5Library = (await import('p5')).default;
      if (!p5Library || !sketchRef.current) return;
      const p5 = p5Library;

      const sketch = (p: p5Types) => {
         let particles: Particle[] = [];
         let stars: Star[] = []; // Array for star flashes
         let canvasWidth: number;
         let canvasHeight: number;
         let numParticles: number;
         let color1: p5Types.Color, color2: p5Types.Color, bgColor: p5Types.Color;

         const calculateDimensions = () => {
            canvasWidth = sketchRef.current?.offsetWidth || window.innerWidth;
            canvasHeight = sketchRef.current?.offsetHeight || window.innerHeight;
            numParticles = Math.max(50, Math.min(150, Math.floor(canvasWidth / 10)));
         };

        p.setup = () => {
          calculateDimensions();
          if (!sketchRef.current) return;
          p.createCanvas(canvasWidth, canvasHeight).parent(sketchRef.current);
          p.frameRate(30);
          color1 = p.color(79, 70, 229, 150);
          color2 = p.color(192, 132, 252, 150);
          bgColor = p.color(15, 23, 42);
          particles = [];
          stars = [];
          for (let i = 0; i < numParticles; i++) {
              const particleColor = p.random() > 0.5 ? color1 : color2;
              particles.push(new Particle(p, p.random(p.width), p.random(p.height), particleColor));
          }
        };

        p.draw = () => {
          p.background(bgColor);
          const P5Vector = p5.Vector;

          // Handle particles
          for (const particle of particles) {
                const targetVector = p.createVector(p.mouseX, p.mouseY);
                particle.avoid(targetVector, P5Vector);
                particle.update();
                particle.show();
                particle.edges(p.width, p.height);
          }

          // Handle stars
          if (p.random(1) < 0.05) { // Low probability to add a new star
            stars.push(new Star(p, p.random(p.width), p.random(p.height)));
          }

          for (let i = stars.length - 1; i >= 0; i--) {
            stars[i].update();
            stars[i].show();
            if (stars[i].isDead()) {
              stars.splice(i, 1);
            }
          }
        };

        const handleResizeLogic = () => {
           if (!sketchRef.current || !p?.width || !p?.height) { return; }
           calculateDimensions();
           p.resizeCanvas(canvasWidth, canvasHeight);
           p.setup();
        };

        debouncedResizer = debounce(handleResizeLogic, 250);
        p.windowResized = () => { if (debouncedResizer) { debouncedResizer(); } };

      }; // End sketch

       if (sketchRef.current) { canvasInstance = new p5(sketch); }
       else { console.error("Cannot create p5 instance, sketchRef is null."); }
    }; // End initP5

    if (typeof window !== 'undefined') { initP5(); }

    // Cleanup
    return () => {
      if (debouncedResizer) { debouncedResizer.cancel(); }
      if (canvasInstance) {
        console.log("HeroBackground: Removing p5 instance");
        canvasInstance.remove();
      }
    };
  }, []);

  return <div ref={sketchRef} className="absolute inset-0 z-[-1] overflow-hidden bg-slate-800 min-h-screen w-full h-full" />;
}; // End Component

export default HeroBackground;

// --- NO SECOND PARTICLE CLASS DEFINITION HERE ---