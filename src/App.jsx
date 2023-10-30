import React from "react";
import HeroSection from "./Hero/HeroSection";
import ProductSection from "./Product/ProductSection";
import TestimonialSection from "./Testimonial/TestimonialSection";
import FaqSection from "./Faq/FaqSection";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="bg-[#F2F4FF]">
      <HeroSection />
      <ProductSection />
      <TestimonialSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
