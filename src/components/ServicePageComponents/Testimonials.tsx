import { ClientTestimonies } from "@/lib/Datas";
import { Avatar } from "antd";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-sans text-center font-semibold">
        What Our Customers Are Saying
      </h2>
      <div className="flex flex-wrap max-w-screen-md mx-auto gap-10 justify-center">
        {ClientTestimonies.map((item) => (
          <div
            key={item.id}
            className="hover:scale-105 hover:shadow-lg w-[300px] min-h-[300px] max-h-[460px] rounded-2xl hover:shadow-black transition-all duration-500 ease-in flex flex-col gap-4 p-1 "
          >
            <Image
              src={item.img}
              alt="client image"
              width={300}
              height={200}
              className="rounded-t-2xl"
            />
            <p className="text-base text-muted-foreground">{item.testimony}</p>
            <div className="flex flex-col gap-2 justify-center items-center px-1.5">
              <Avatar src={item.clientImg} shape="circle" size={50} />
              {/* <Image
                src={item.clientImg}
                alt="client image"
                width={50}
                height={50}
                className="rounded-full"
              /> */}
              <p className="font-semibold">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
