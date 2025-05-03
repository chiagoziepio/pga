"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const ConsultationForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      email: form.email.value,
      address: form.address.value,
    };
    console.log(data);
  };
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-sans text-center font-semibold">
        Contact us for a Free Consultation Today!
      </h2>
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-full md:w-[400px] flex flex-col gap-4 mx-auto"
      >
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="your email"
          className="!outline-nome w-full h-[44px] rounded border px-1"
        />
        <input
          type="address"
          name="address"
          id="address"
          required
          placeholder="your address"
          className="!outline-nome w-full h-[44px] rounded border px-1"
        />
        <Button
          type="submit"
          className="!w-fit mx-auto cursor-pointer  !bg-bg2 !text-white hover:!bg-bg2/80 transition-colors duration-500 ease-in-out"
        >
          Get free consultation
        </Button>
      </form>
    </div>
  );
};

export default ConsultationForm;
