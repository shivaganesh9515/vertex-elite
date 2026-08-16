"use client";

import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="w-full py-32 px-6 flex flex-col items-center"
    >
      <div className="max-w-[1200px] w-full text-center space-y-12">
        <h2
          className="font-primary text-[64px] md:text-[80px] text-brand-dark tracking-tightest leading-none"
          data-animation-on-scroll=""
        >
          Ready for the elite tier?
        </h2>
        <p
          className="text-brand-dark/60 text-xl font-medium max-w-2xl mx-auto"
          data-animation-on-scroll=""
          style={{ transitionDelay: "200ms" }}
        >
          We only take on a limited number of clients per quarter to ensure
          premium execution. Secure your consultation today.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="mailto:hello@vertexelite.com"
            className="bg-brand-primary text-white pl-10 pr-2.5 rounded-full h-[72px] flex items-center gap-6 hover:opacity-90 transition-opacity group"
          >
            <span className="text-xl font-medium tracking-tight">
              Consult with an Advisor
            </span>
            <div className="w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center relative overflow-hidden flex-shrink-0">
              <ArrowRight className="w-[24px] h-[24px] text-brand-primary transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
