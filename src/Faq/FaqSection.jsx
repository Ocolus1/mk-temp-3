import React from "react";
import FaqComponent from "./FaqComponent";

function FaqSection() {
  return (
    <section className="faq__section max-w-5xl mx-auto py-10">
      <div className="flex items-center justify-center flex-col gap-y-2 py-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Frequently asked questions
        </h2>
        <p className="text-lg font-medium text-slate-700/70">
          Questions related to homely
        </p>
      </div>
      <div className="lg:mt-5">
        <FaqComponent />
      </div>
    </section>
  );
}

export default FaqSection;
