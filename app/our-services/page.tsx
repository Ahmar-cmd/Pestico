import React from "react";
import ServiceSec from "../../components/ServiceSec";
import { CTA } from "../../components";

const page = () => {
  return (
    <section>
      <div
        className="w-full h-[330px] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/bg-2.jpg')" }}
      >
        <h1 className="l-heading text-white sm:mb-0 mb-1">Services</h1>
        <p className="sm:text-[22px] text-[18px] text-white text-center">
          Treating Customers Like <br className="sm:hidden" /> Family Since 2008
        </p>
      </div>
      <ServiceSec limit={8}/>
      <CTA/>
    </section>
  );
};

export default page;
