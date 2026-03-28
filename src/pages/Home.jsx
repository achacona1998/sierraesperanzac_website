import HeroSection from "../components/home/HeroSection.jsx";
import ServicesSection from "../components/home/ServicesSection.jsx";
import WhyUsSection from "../components/home/WhyUsSection.jsx";
import PortfolioSection from "../components/home/PortfolioSection.jsx";
import AboutUsSection from "../components/home/AboutUsSection.jsx";
import ContactSection from "../components/home/ContactSection.jsx";

/**
 * Home component is the main landing page of the application.
 * It composes various sections to present the company's offerings.
 *
 * @returns {JSX.Element} The rendered Home page.
 */
export default function Home() {
  return (
    <main className="relative overflow-x-hidden min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-linear-to-br from-[#0b132b] via-[#1c2541] to-[#3a506b] animate-gradient -z-20" />

      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <PortfolioSection />
      <AboutUsSection />
      <ContactSection />
    </main>
  );
}
