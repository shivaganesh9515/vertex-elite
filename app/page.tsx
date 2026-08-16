import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export default function Home() {
  return (
    <ScrollRevealProvider>
      <Header />

      <main className="flex-grow pt-[79px]">
        <Hero />
        <Services />
        <FeaturedWork />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
    </ScrollRevealProvider>
  );
}
