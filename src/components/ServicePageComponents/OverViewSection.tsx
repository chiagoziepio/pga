import Image from "next/image";
import React from "react";

const OverViewSection = () => {
  return (
    <div className="pt-14 flex flex-col lg:flex-row justify-between items-center gap-y-8">
      <div className="lg:w-1/2 w-full flex flex-col gap-5 lg:gap-10">
        <h2 className="text-3xl font-sans font-semibold">
          <span className="text-primary">B</span>ring the Golf Course to Your
          Backyard
        </h2>
        <p className="text-[18px] ">
          Love your short game? With a custom putting green by Greenscapes, you
          don&apos;t have to leave home to get tournament-level practice. Our
          greens are designed for true ball roll, built tough for Austin
          weather, and tailored to your space.
        </p>
      </div>
      <div className="relative">
        <Image
          src={"/father-duaghter.jpg"}
          alt="putting green"
          width={300}
          height={300}
          className="lg:w-[350px] object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default OverViewSection;
