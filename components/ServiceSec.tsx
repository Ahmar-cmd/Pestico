import React from "react";
import { serviceLinks } from "../constants";
import Image from "next/image";

interface Props {
  className?: string;
  limit?: number;
}
const ServiceSec = ({ className, limit = 4 }: Props) => {
  return (
    <div
      className={`w-full py-16 sm:py-24 px-8 sm:px-16 bg-service font-poppins flex flex-wrap justify-center gap-7 ${className}`}
    >
      {serviceLinks.slice(0, limit).map((service) => (
        <div
          key={service.name}
          className="flex flex-col items-center gap-5 bg-white sm:w-[270px] w-[310px] h-[400px] px-14 sm:px-8 py-14 
          rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <span>
            <Image
              src={service.icon}
              alt={service.name}
              height={100}
              width={100}
              className="object-contain rounded-full cursor-pointer bg-service p-5"
            />
          </span>
          <h2 className="text-[22px] font-bold">{service.name}</h2>
          <span className="text-[16px] text-dimWhite text-center">
            {service.detail}
          </span>
          <button
            type="button"
            className="bg-white text-[16px] hover:text-white hover:bg-primary font-poppins text-center border 
            hover:border-none border-gray-300 px-6 py-3 rounded-tr-none rounded-full"
          >
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
};

export default ServiceSec;
//
