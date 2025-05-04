import React from "react";
import { buttonVariants } from "./ui/button";

interface ConsultationBtnProps {
  text?: string;
}

const ConsultationBtn = ({ text }: ConsultationBtnProps) => {
  return (
    <a href="#consultation" className={buttonVariants({ variant: "default" })}>
      {text || "Get a Free Consultation"}
    </a>
  );
};

export default ConsultationBtn;
