import Navbar
from "../components/landing/Navbar";

import HeroSection
from "../components/landing/HeroSection";

import FeaturesSection
from "../components/landing/FeaturesSection";

import AICapabilities
from "../components/landing/AICapabilities";

import Testimonials
from "../components/landing/Testimonials";

import CTASection
from "../components/landing/CTASection";

import Footer
from "../components/landing/Footer";



const Home = () => {

  return (

    <div
      className="
        min-h-screen
        bg-black
        text-white
      "
    >

      <Navbar />

      <HeroSection />

      <FeaturesSection />

      <AICapabilities />

      <Testimonials />

      <CTASection />

      <Footer />

    </div>
  );
};

export default Home;