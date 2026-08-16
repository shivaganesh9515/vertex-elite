"use client";

import { ArrowRight, Star } from "lucide-react";

const PARTNERS = ["VOLVO", "PATAGONIA", "SAMSUNG", "SHOPIFY", "SQUARE"];

function PillButton({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "white";
}) {
  const isWhite = variant === "white";
  return (
    <a
      href={href}
      className={`${
        isWhite
          ? "bg-white text-brand-dark hover:bg-neutral-100"
          : "bg-brand-primary text-white hover:opacity-90"
      } pl-6 pr-1.5 rounded-full h-[46px] flex items-center gap-3 transition-all group`}
    >
      <span className="text-base font-medium tracking-tight">{children}</span>
      <div
        className={`w-[34px] h-[34px] rounded-full flex items-center justify-center flex-shrink-0 ${
          isWhite ? "bg-brand-primary" : "bg-white"
        }`}
      >
        <ArrowRight
          className={`w-[18px] h-[18px] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1 ${
            isWhite ? "text-white" : "text-brand-primary"
          }`}
        />
      </div>
    </a>
  );
}

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full pb-8 pt-12 px-6 flex flex-col items-center gap-[42px]">
        <div className="max-w-[1200px] w-full bg-brand-primary rounded-xl p-4 flex flex-col items-center overflow-hidden">
          <div className="w-full flex flex-col lg:flex-row items-center gap-[34px]">
            {/* Left Content */}
            <div className="flex-1 pl-5 py-12 lg:py-24 flex flex-col items-start gap-8">
              {/* Star Rating + Tagline */}
              <div
                className="flex items-center gap-[10px]"
                data-animation-on-scroll=""
                style={{ transitionDelay: "100ms" }}
              >
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-[21px] h-[21px] fill-white text-white"
                    />
                  ))}
                </div>
                <span className="text-white font-medium text-base tracking-tight">
                  The new standard in modern marketing
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-[18px]">
                <h1
                  className="font-primary text-[48px] md:text-[56px] leading-[1.1] text-white tracking-tightest max-w-[614px]"
                  data-animation-on-scroll=""
                  style={{ transitionDelay: "200ms" }}
                >
                  Marketing that scales with surgical precision
                </h1>
                <p
                  className="text-white/80 font-medium text-xl leading-[1.5] tracking-tighter max-w-[480px]"
                  data-animation-on-scroll=""
                  style={{ transitionDelay: "300ms" }}
                >
                  We bridge the gap between high-level brand strategy and
                  ruthless performance execution. Your partner for long-term
                  dominance.
                </p>
              </div>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-[22px]"
                data-animation-on-scroll=""
                style={{ transitionDelay: "400ms" }}
              >
                <PillButton href="#contact" variant="white">
                  <span className="hidden sm:inline">Begin Engagement</span>
                  <span className="inline sm:hidden">Engagement</span>
                </PillButton>
                <a
                  href="#work"
                  className="text-white text-lg font-medium tracking-tighter hover:underline"
                >
                  View Case Studies
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="w-full lg:w-[450px] h-[580px] shrink-0"
              data-animation-on-scroll=""
            >
              <img
                src="https://images.pexels.com/photos/8117466/pexels-photo-8117466.jpeg?w=450&h=580&fit=crop"
                alt="Vertex marketing consultants"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Partner Logos Marquee */}
        <section
          className="w-full flex flex-col items-center gap-[38px] mt-12"
          data-animation-on-scroll=""
        >
          <p className="text-brand-dark text-base font-bold tracking-tighter uppercase">
            Powering market leaders:
          </p>
          <div className="w-full max-w-[1200px] h-14 overflow-hidden relative mask-fade-edges">
            <div className="flex items-center gap-[80px] w-max animate-scroll">
              {[...PARTNERS, ...PARTNERS].map((name, i) => (
                <span
                  key={i}
                  className="font-primary text-3xl font-bold text-brand-primary tracking-tight"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
