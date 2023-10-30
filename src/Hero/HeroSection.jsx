import React from "react";
import Navbar from "../Navbar";
import herosvg from "../assets/hero-rightside.png";
import FormSection from "./FormSection";

function HeroSection() {
  return (
    <section className="hero__section">
      <Navbar />
      <div className="hero__container px-7 lg:px-10 max-w-6xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-14">
        <div className="hero-content lg:w-[650px] lg:px-5 flex flex-col gap-y-5">
          <h1 className="text-4xl md:text-5xl xl:text-[50px] leading-[1.2] md:max-w-xl md:mx-auto md:text-center lg:text-left lg:mx-0 lg:max-w-full font-semibold text-black">
            This streamlined payment process saves time & effort
          </h1>
          <p className="text-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left">
            With all-in-one payment solutions available online, you no longer
            have to leave the comfort of your home to conduct transactions.
          </p>
          <div className="flex gap-x-5 flex-col gap-y-2.5 lg:flex-row">
            <a
              href="#"
              className="flex w-full lg:w-fit items-center text-white justify-center rounded-lg bg-[#1053F3] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
            >
              <span>Try it free</span>
            </a>
            <a
              href="#"
              className="flex w-full lg:w-fit items-center text-[#1053F3] justify-center rounded-lg border border-[#6A65FF] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 bg-[#5138EE]/10"
            >
              <span>Request a demo</span>
            </a>
          </div>
        </div>
        <div className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10">
          <img className="rounded-3xl w-full" src={herosvg} alt="" />
        </div>
      </div>
      <div>
        <FormSection />
      </div>
    </section>
  );
}

export default HeroSection;
