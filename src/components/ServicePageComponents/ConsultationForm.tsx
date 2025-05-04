"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "sonner";

const ConsultationForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      email: form.email.value,
      address: form.address.value,
    };
    if (!data.email || !data.address)
      return toast.error("Please fill all the fields");
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    toast.success("Form submitted successfully");
    form.reset();
    setIsLoading(false);
  };
  return (
    <section id="consultation" className="flex flex-col gap-8">
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
          disabled={isLoading}
        />
        <input
          type="address"
          name="address"
          id="address"
          required
          placeholder="your address"
          className="!outline-nome w-full h-[44px] rounded border px-1"
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="!w-fit mx-auto cursor-pointer  !bg-bg2 !text-white hover:!bg-bg2/80 transition-colors duration-500 ease-in-out"
        >
          Get free consultation{" "}
          {isLoading && <AiOutlineLoading className="animate-spin ml-2" />}
        </Button>
      </form>
    </section>
  );
};

export default ConsultationForm;
