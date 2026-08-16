"use client";

import { useState, useEffect } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Vertex Elite didn't just give us a marketing plan; they gave us a new perspective on our own potential. Their strategic clarity is unmatched in the industry.",
    name: "Julian Sterling",
    title: "CEO, Sterling & Co.",
    image:
      "https://images.pexels.com/photos/26150470/pexels-photo-26150470.jpeg?w=80&h=80&fit=crop",
  },
  {
    quote:
      "The results speak for themselves. We've seen a 142% increase in digital revenue within the first six months of engagement with the Vertex team.",
    name: "Sarah Chen",
    title: "CMO, Aurora Collection",
    image:
      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?w=80&h=80&fit=crop",
  },
  {
    quote:
      "Vertex Elite bridges the gap between high-level brand strategy and ruthless performance execution. They are truly partners in our growth.",
    name: "Marcus Vane",
    title: "Founder, Vortex Systems",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=80&h=80&fit=crop",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((prev) => (prev + 1) % TESTIMONIALS.length);
        setVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const t = TESTIMONIALS[idx];

  return (
    <section
      id="testimonials"
      className="w-full py-24 px-6 flex flex-col items-center bg-neutral-surface relative overflow-hidden"
    >
      <div
        className="max-w-[1200px] w-full text-center space-y-12 transition-opacity duration-500"
        data-animation-on-scroll=""
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(10px)" }}
      >
        <div className="w-16 h-1 bg-brand-primary mx-auto" />

        {/* Quote */}
        <div className="relative min-h-[200px] flex items-center justify-center">
          <blockquote className="font-primary text-[32px] md:text-[44px] text-brand-dark leading-tight tracking-tightest max-w-4xl mx-auto transition-all duration-500">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
        </div>

        {/* Author */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden border-2 border-brand-primary/20 shadow-sm">
            <img
              src={t.image}
              alt={t.name}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
          <div className="transition-all duration-500">
            <p className="font-bold text-lg text-brand-dark">{t.name}</p>
            <p className="text-brand-dark/50">{t.title}</p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 pt-4">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setVisible(false);
                setTimeout(() => {
                  setIdx(i);
                  setVisible(true);
                }, 500);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === idx
                  ? "bg-brand-primary w-6"
                  : "bg-brand-primary/20 w-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
