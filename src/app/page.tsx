import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import DonationStrip from "@/components/sections/DonationStrip";
import Stats from "@/components/sections/Stats";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Motto from "@/components/sections/Motto";
import Donation from "@/components/sections/Donation";
import DonationHistory from "@/components/sections/DonationHistory";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import FloatingButtons from "@/components/ui/FloatingButtons";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DonationStrip />
        <Stats />
        <Services />
        <Portfolio />
        <Motto />
        <Reviews />
        <Donation />
        <DonationHistory />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
