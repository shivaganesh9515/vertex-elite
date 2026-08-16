"use client";

const STEPS = [
  {
    num: 1,
    title: "Deep Discovery",
    description:
      "We audit your existing data, market position, and competitors to find the hidden leverage points.",
  },
  {
    num: 2,
    title: "Agile Strategy",
    description:
      "Building a bespoke roadmap that prioritizes high-impact wins while laying foundation for scale.",
  },
  {
    num: 3,
    title: "Iterative Execution",
    description:
      "We ship fast, analyze results in real-time, and refine our approach every single week.",
  },
];

const STATS = [
  { value: "$450M+", label: "Revenue Managed" },
  { value: "4.2x", label: "Avg ROAS", offset: true },
  { value: "24+", label: "Market Leaders" },
  { value: "10yr", label: "Industry Expertise", offset: true },
];

export default function Process() {
  return (
    <section
      id="process"
      className="w-full py-24 px-6 flex flex-col items-center overflow-hidden"
    >
      <div className="max-w-[1200px] w-full bg-brand-primary rounded-xl overflow-hidden relative">
        {/* Background Graphic */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32" />

        <div className="relative z-10 px-6 py-12 md:p-12 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Steps */}
          <div className="space-y-12">
            <h2
              className="font-primary text-3xl md:text-5xl text-white tracking-tightest leading-tight"
              data-animation-on-scroll=""
            >
              The Vertex Method
            </h2>
            <div className="space-y-10">
              {STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className="flex gap-4 md:gap-6"
                  data-animation-on-scroll=""
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center shrink-0 text-white font-bold">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-white text-xl font-bold mb-2">
                      {step.title}
                    </h4>
                    <p className="text-white/70 text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div
            className="grid grid-cols-2 gap-4 md:gap-6"
            data-animation-on-scroll=""
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className={`bg-white/10 p-5 md:p-8 rounded-lg backdrop-blur-sm border border-white/10 flex flex-col gap-2 ${
                  stat.offset ? "translate-y-4 md:translate-y-8" : ""
                }`}
              >
                <span className="text-2xl md:text-4xl font-primary text-white">
                  {stat.value}
                </span>
                <span className="text-white/60 font-medium text-[10px] md:text-sm uppercase tracking-widest leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
