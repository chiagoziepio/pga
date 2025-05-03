import React from "react";
import { buttonVariants } from "./ui/button";

const ConsultationBtn = () => {
  return (
    <a href="#consultation" className={buttonVariants({ variant: "default" })}>
      Get Free Consultation
    </a>
  );
};

export default ConsultationBtn;
