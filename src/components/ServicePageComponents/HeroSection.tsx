import React from "react";
import ConsultationBtn from "../ConsultationBtn";

const HeroSection = () => {
  return (
    <section className="h-[calc(100vh-100px)] lg:max-w-xl mx-auto flex flex-col justify-center items-center gap-6 ">
      <h1 className="font-sans text-3xl md:text-4xl lg:text-[40px] text-center font-bold text-white">
        <span className="text-primary">P</span>utting{" "}
        <span className="text-primary">G</span>reens{" "}
        <span className="text-primary">I</span>nstallation in{" "}
        <span className="text-primary">A</span>ustin
        <span className="text-primary">.</span>
      </h1>
      <p className="text-center text-primary-foreground text-xl md:text-2xl font-playfair font-semibold max-w-md mx-auto">
        Practice Your Short Game Anytime, Right at Home
      </p>
      <ConsultationBtn />
    </section>
  );
};

export default HeroSection;
