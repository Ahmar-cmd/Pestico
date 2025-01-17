import React from "react";
import { Button, Testimonials } from "../../components";
import AboutSec from "../../components/AboutSec";
import ServiceSec from "../../components/ServiceSec";
import Link from "next/link";
import Team from "../../components/Team";

const page = () => {
  return (
    <section>
      <div
        className="w-full h-[330px] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/bg-2.jpg')" }}
      >
        <h1 className="l-heading text-white sm:mb-0 mb-1">
          About Us
        </h1>
        <p className="sm:text-[22px] text-[18px] text-white text-center">
          Treating Customers Like <br className="sm:hidden" /> Family Since 2008
        </p>
      </div>
       <AboutSec/>

       <div className="flex flex-col items-center bg-service pt-16 pb-6">
        <h1 className="s-heading">Our Services</h1>
        <h2 className="l-heading">Pest Control Services</h2>
        <ServiceSec className="-my-4 sm:py-12"/>
        <Link href='/our-services'><Button className="mb-8">Find Services</Button></Link>
      </div>

        <Team/>
        <Testimonials/>
    </section>
  );
};

export default page;
