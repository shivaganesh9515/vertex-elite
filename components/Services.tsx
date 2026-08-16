"use client";

const SERVICES = [
  {
    category: "Strategy",
    title: "Surgical Precision",
    description:
      "Strategy isn't a static document; it's a living compass. We help brands find the pulse of their audience and build movements that last.",
    variant: "default",
  },
  {
    category: "Curation",
    title: "Brand Architecture",
    description:
      "Beyond aesthetic, we build for human connection. We define your identity to build lasting emotional equity in a crowded marketplace.",
    variant: "primary",
  },
  {
    category: "Evolution",
    title: "Market Synchronicity",
    description:
      "The digital layer should enhance reality. We integrate growth systems that evolve with your market, ensuring you're always ahead of the curve.",
    variant: "default",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full pt-16 pb-12 lg:pt-20 lg:pb-16 px-6 bg-neutral-background flex flex-col items-center"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Top Grid */}
        <div className="lg:mb-[80px] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[40px] items-end">
            <div className="lg:col-span-7">
              <h2 className="text-[48px] md:text-[56px] lg:text-[110px] font-primary font-medium leading-[0.85] tracking-tightest text-brand-dark">
                <span className="block">The Future</span>
                <span className="block">of Growth.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 pb-2">
              <div className="flex flex-col gap-8">
                <h3 className="text-xl lg:text-[26px] font-primary font-light leading-[1.3] text-brand-dark/80">
                  We design marketing experiences that transcend the digital.
                  Moving from what consumers see to what they feel, and
                  eventually, how they lead.
                </h3>
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center w-fit px-8 py-4 bg-brand-primary text-white rounded-md text-[11px] font-primary font-medium uppercase tracking-[2px] transition-all hover:opacity-90"
                >
                  Architect Your Vision
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch border-t border-brand-dark/10 pt-16">
          {SERVICES.map((s) => {
            const isPrimary = s.variant === "primary";
            return (
              <div
                key={s.title}
                className={`${
                  isPrimary
                    ? "bg-brand-primary rounded-xl shadow-brand-primary/20"
                    : "bg-neutral-surface border border-neutral-border rounded-xl"
                } p-6 md:p-10 flex flex-col gap-6 h-full transition-shadow hover:shadow-md`}
              >
                <div>
                  <p
                    className={`text-sm font-primary font-semibold uppercase tracking-[2px] mb-4 ${
                      isPrimary ? "text-white/60" : "text-brand-primary"
                    }`}
                  >
                    {s.category}
                  </p>
                  <h4
                    className={`font-primary text-2xl md:text-3xl font-bold leading-tight tracking-tight ${
                      isPrimary ? "text-white" : "text-brand-dark"
                    }`}
                  >
                    {s.title}
                  </h4>
                </div>
                <p
                  className={`text-base md:text-lg font-secondary font-normal leading-relaxed ${
                    isPrimary ? "text-white/90" : "text-text-secondary"
                  }`}
                >
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
