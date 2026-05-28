import Navbar from "../components/landing/Navbar";

import HeroSection from "../components/landing/HeroSection";

import FeaturesSection from "../components/landing/FeaturesSection";

import AICapabilities from "../components/landing/AICapabilities";

import DashboardPreview from "../components/landing/DashboardPreview";

import Testimonials from "../components/landing/Testimonials";

import CTASection from "../components/landing/CTASection";

import Footer from "../components/landing/Footer";

const Home = () => {

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 -z-10" />

      <div className="fixed top-10 left-10 w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl -z-10" />

      <div className="fixed bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl -z-10" />



      <Navbar />

      <HeroSection />

      <DashboardPreview />

      <FeaturesSection />

      <AICapabilities />

      <Testimonials />

      <CTASection />

      <Footer />

    </div>
  );
};

export default Home;