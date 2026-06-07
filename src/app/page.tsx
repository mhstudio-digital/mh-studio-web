import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Logos } from "@/components/logos";
import { Services } from "@/components/services";
import { WhyUs } from "@/components/why-us";
import { Portfolio } from "@/components/portfolio";
import { Process } from "@/components/process";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Services />
        <WhyUs />
        <Portfolio />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
