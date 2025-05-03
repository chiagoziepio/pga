import { PerfectLocations } from "@/lib/Datas";
import React from "react";
import { LuDot } from "react-icons/lu";

const Locations = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-sans font-semibold">
          {" "}
          Perfect for Any Space
        </h2>
        <p className="text-xl font-medium max-w-screen-lg">
          {" "}
          No matter the size or setting, we can build a green that fits. Whether
          you&apos;re perfecting your putt or impressing your guests, this
          feature adds luxury and fun to any property.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {PerfectLocations.map((location, index) => (
          <div key={index} className="flex gap-2 items-center">
            <LuDot size={25} />
            <p>{location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
