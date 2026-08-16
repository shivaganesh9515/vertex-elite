"use client";

const COLUMNS = [
  {
    title: "Expertise",
    links: [
      "Performance Marketing",
      "Brand Architecture",
      "Content Strategy",
      "Market Analysis",
    ],
  },
  {
    title: "Company",
    links: ["Our Story", "Case Studies", "Careers", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Security"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-surface border-t border-neutral-border pt-32 pb-0 relative z-10 overflow-hidden">
      {/* Isometric Grid BG */}
      <div className="absolute inset-0 bg-isometric-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-32">
          {/* Brand Column */}
          <div className="space-y-6">
            <a
              href="#"
              className="font-geist text-2xl font-bold tracking-tight text-brand-dark block"
            >
              Vertex<span className="text-brand-primary">.</span>Elite
            </a>
            <p className="text-text-secondary font-terminal text-sm leading-relaxed max-w-xs">
              Architecting the elite growth engine. Precision-engineered
              marketing for leaders who demand absolute market dominance.
            </p>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 border border-neutral-border flex items-center justify-center text-text-secondary hover:text-white hover:border-brand-primary transition-all"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-6.75c-.69 0-1.25-.56-1.25-1.25S9.31 7.75 10 7.75s1.25.56 1.25 1.25S10.69 10.25 10 10.25zM17 17h-2v-3.5c0-1.38-1.12-2.5-2.5-2.5S10 12.12 10 13.5V17H8v-6h2v.75c.5-.75 1.5-1.25 2.5-1.25s2 .5 2 1.25V17z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h5 className="text-brand-dark font-terminal text-lg mb-6 uppercase tracking-widest border-l-2 border-brand-primary pl-4">
                {col.title}
              </h5>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-text-secondary hover:text-brand-dark hover:translate-x-1 transition-all duration-300 font-terminal block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-border pt-8 pb-32 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-secondary font-geist">
            &copy; 2024 Vertex Elite Strategic Group. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-xs text-text-secondary font-geist uppercase tracking-widest">
              Growth Engine Active
            </p>
          </div>
        </div>
      </div>

      {/* 3D Isometric Scene */}
      <div className="footer-3d-scene w-full h-64 absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <div className="footer-floor-grid" />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-12">
          <div className="isometric-text-footer text-[14vw] font-black font-geist tracking-[0.2em] text-transparent select-none opacity-40 uppercase">
            VERTEX
          </div>
        </div>
      </div>
    </footer>
  );
}
