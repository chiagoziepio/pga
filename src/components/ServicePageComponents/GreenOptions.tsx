import { GreenOpt } from "@/lib/Datas";
import Image from "next/image";
import React from "react";

const GreenOptions = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-3xl font-sans font-semibold">
          {" "}
          Fully Customizable Designs
        </h2>
        <p className="text-center text-xl font-normal lg:max-w-[740px] w-full mx-auto">
          Choose from a range of styles, features, and configurations to suit
          your skill level, space, and vision.
        </p>
      </div>
      <div className="flex gap-10 flex-wrap mx-auto  justify-center">
        {GreenOpt.map((item) => (
          <div
            key={item.id}
            className="relative group w-[300px] h-[300px] overflow-hidden rounded-2xl border  "
          >
            <Image
              src={item.img}
              alt={item.text}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className=" hidden absolute inset-0 bg-black/45  lg:flex items-center justify-center opacity-0 lg:group-hover:opacity-100 transition-opacity">
              <span className="text-white text-center px-2 text-xl font-medium">
                {item.text}
              </span>
            </div>

            <div className=" absolute inset-0 bg-black/45 flex justify-center items-center lg:hidden">
              <span className="text-white text-center px-2 text-xl font-medium">
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreenOptions;
