"use client";
import { FAQData } from "@/lib/Datas";
import React from "react";

const Faq = () => {
  const [opendTab, setOpenTab] = React.useState<number | null>(null);
  return (
    <section id="faq" className="flex flex-col gap-8">
      <h2 className="text-3xl font-sans text-center font-semibold">
        FAQs About Putting Greens
      </h2>
      <div className="flex flex-col gap-4 w-full md:w-[450px] mx-auto justify-center">
        {FAQData.map((item) => (
          <div
            key={item.id}
            className={`p-2 flex flex-col gap-2.5 bg-gray-100 rounded-2xl cursor-pointer `}
            onClick={() =>
              setOpenTab((prev) => (prev === item.id ? null : item.id))
            }
          >
            <div className="flex justify-between items-center font-sans">
              <h4 className="text-lg font-medium ">{item.qus}</h4>
              <span
                className={`${
                  opendTab === item.id ? "rotate-45" : ""
                } transition-all duration-500 ease-in-out text-xl`}
              >
                +
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0 ${
                opendTab === item.id ? "max-h-60 mt-2" : ""
              }`}
            >
              <p className="text-sm">{item.ans}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
