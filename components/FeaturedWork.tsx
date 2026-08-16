"use client";

const FEATURES = [
  {
    icon: "growth",
    title: "Growth\nSystems",
    description:
      "Scaling multi-channel acquisition funnels with an average 4.2x ROAS across retail segments.",
  },
  {
    icon: "brand",
    title: "Brand\nVisuals",
    description:
      "Developing visual languages for digital-first startups that demand attention and command trust.",
  },
];

const PROJECTS = [
  {
    image:
      "https://images.pexels.com/photos/6791447/pexels-photo-6791447.jpeg?w=150&h=150&fit=crop",
    title: "Aurora Collection",
    meta: "Luxury Wellness • +142% Revenue",
    alt: "Aurora",
  },
  {
    image:
      "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?w=150&h=150&fit=crop",
    title: "Vortex Systems",
    meta: "AI Tech • Full Re-Architecture",
    alt: "Vortex",
  },
  {
    image:
      "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?w=150&h=150&fit=crop",
    title: "Apex Real Estate",
    meta: "Property • Digital Evolution",
    alt: "Apex",
  },
];

function GrowthIcon() {
  return (
    <svg className="w-8 h-8 text-brand-primary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function BrandIcon() {
  return (
    <svg className="w-8 h-8 text-brand-primary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="w-full pt-8 pb-24 bg-neutral-background flex flex-col items-center">
      <div className="max-w-[1200px] w-full px-6 space-y-6">
        {/* Pill Header */}
        <div
          className="bg-neutral-surface rounded-xl px-6 py-4 flex justify-between items-center text-brand-primary font-primary font-bold text-lg tracking-wide uppercase mb-4 shadow-sm"
          data-animation-on-scroll=""
          style={{ transitionDelay: "100ms" }}
        >
          <span>Selected Case History</span>
          <a href="#" className="hover:underline transition-all">
            See Full Portfolio
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_320px] gap-6 items-stretch">
          {/* Left Feature Cards */}
          <div
            className="grid grid-cols-2 lg:grid-cols-1 gap-4 h-full"
            data-animation-on-scroll=""
          >
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="bg-neutral-surface rounded-xl p-6 flex flex-col justify-between h-full min-h-[180px] group hover:bg-brand-primary/5 transition-colors border border-brand-primary/5"
              >
                {i === 0 ? <GrowthIcon /> : <BrandIcon />}
                <div>
                  <h4 className="font-primary text-sm leading-tight mb-2 uppercase text-brand-primary font-bold whitespace-pre-line">
                    {f.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Main Project */}
          <div
            className="bg-brand-secondary rounded-xl overflow-hidden relative min-h-[400px] h-full shadow-lg group"
            data-animation-on-scroll=""
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              alt="Consulting Session"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <span className="text-white/80 text-[10px] uppercase tracking-[3px] font-bold mb-2">
                Flagship Transformation
              </span>
              <h3 className="text-white font-primary text-4xl lg:text-5xl uppercase leading-none mb-2">
                The Sterling Method
              </h3>
              <p className="text-white/70 text-sm font-secondary max-w-sm">
                Complete brand re-architecture and performance overhaul for a
                heritage investment firm.
              </p>
            </div>
          </div>

          {/* Right Project List */}
          <div
            className="flex flex-col gap-4 h-full"
            data-animation-on-scroll=""
          >
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                className="bg-neutral-surface rounded-xl p-4 flex items-center gap-4 flex-1 border border-brand-primary/5 hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={p.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={p.alt}
                  />
                </div>
                <div>
                  <h4 className="font-primary text-sm font-bold uppercase text-brand-primary">
                    {p.title}
                  </h4>
                  <p className="text-xs text-text-secondary uppercase tracking-tight font-medium">
                    {p.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
