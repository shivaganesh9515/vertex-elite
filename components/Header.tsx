"use client";

import { ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Client Voices", href: "#testimonials" },
];

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-neutral-background/90 backdrop-blur-md border-b border-neutral-border">
      <nav className="max-w-[1200px] mx-auto h-[79px] px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-geist text-xl font-bold tracking-tight text-brand-dark">
            Vertex<span className="text-brand-primary">.</span>Elite
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium tracking-tight text-text-secondary hover:text-brand-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Pill */}
        <a
          href="#contact"
          className="bg-brand-primary text-white pl-6 pr-1.5 rounded-full h-[46px] flex items-center gap-3 hover:opacity-90 transition-opacity group"
        >
          <span className="text-base font-medium tracking-tight">
            Let&apos;s Talk
          </span>
          <div className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center relative overflow-hidden flex-shrink-0">
            <ArrowRight className="w-[18px] h-[18px] text-brand-primary transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1" />
          </div>
        </a>
      </nav>
    </header>
  );
}
