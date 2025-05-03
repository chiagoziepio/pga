import React from "react";
import InstallationCarousel from "../InstallationCarousel";

const InstallationSteps = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-sans text-center font-semibold">
        How We Build Your Custom Putting Green
      </h2>
      <InstallationCarousel />
    </div>
  );
};

export default InstallationSteps;
