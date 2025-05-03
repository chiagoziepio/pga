import React from "react";
import HeroSection from "./HeroSection";
import OverViewSection from "./OverViewSection";
import MaxWidthWrapper from "../MaxWidthWrapper";
import GreenOptions from "./GreenOptions";
import Benefits from "./Benefits";
import Locations from "./Locations";
import InstallationSteps from "./InstallationSteps";

const Services = () => {
  return (
    <main className="mt-16 flex flex-col gap-14 lg:gap-20">
      <HeroSection />
      <section className=" bg-white">
        <MaxWidthWrapper className="flex flex-col gap-14 lg:gap-20">
          <OverViewSection />
          <GreenOptions />
          <Benefits />
          <Locations />
          <InstallationSteps />
        </MaxWidthWrapper>
      </section>
    </main>
  );
};

export default Services;
