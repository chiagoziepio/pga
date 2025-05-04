import { Projects } from "@/lib/Datas";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-sans text-center font-semibold">
        Our Putting Green Projects
      </h2>
      <div className="flex flex-wrap max-w-screen-lg mx-auto justify-center gap-10">
        {Projects.map((item, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[300px] rounded-2xl hover:scale-105 transition-all duration-500 ease-in "
          >
            <Image
              src={item}
              alt={"project" + index}
              fill
              className="object-cover rounded-2xl "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
