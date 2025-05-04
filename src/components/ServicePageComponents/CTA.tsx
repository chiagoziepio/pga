import React from "react";
import ConsultationBtn from "../ConsultationBtn";

const CTA = () => {
  return (
    <div className="flex flex-col gap-4 justify-center mb-20">
      <h2 className="text-center text-3xl font-semibold">
        {" "}
        Ready to Create Your Dream Putting Green?
      </h2>
      <div className="flex flex-col gap-4 justify-center items-center">
        <ConsultationBtn text="Start with a Free Quote Today" />
      </div>
    </div>
  );
};

export default CTA;
