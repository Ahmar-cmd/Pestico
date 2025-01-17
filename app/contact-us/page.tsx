import React from "react";
import Form from "../../components/Form";
import { socialMedia2 } from "../../constants";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <section className="font-poppins">
      <div
        className="w-full h-[330px] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/bg-2.jpg')" }}
      >
        <h1 className="l-heading text-white sm:mb-0 mb-1">Contact Us</h1>
        <p className="sm:text-[22px] text-[18px] text-white text-center">
          Treating Customers Like <br className="sm:hidden" /> Family Since 2008
        </p>
      </div>
      <div className="flex sm:gap-4 gap-8 items-start sm:flex-row flex-col sm:py-20 py-14 sm:px-10 px-5 bg-service">
        <div className="flex items-start flex-col px-4">
          <h2 className="s-heading sm:mb-5 mb-3">Contact Us</h2>
          <h3 className="sm:text-[37px] text-[33px] font-bold font-abrilFatface mb-5 leading-9">Our Contacts & <br /> Location</h3>
          <h4 className="c-heading mb-5">Opening hours</h4>
          <span className="dim-span">
            Daily: 9.30 AM–6.00 PM
          </span>
          <span className="dim-span mb-5">
            Sunday & Holidays: Closed
          </span>
          <h4 className="c-heading mb-5">Contact info</h4>
          <span className="dim-span">
          1234 Yonge Street, Suite 567 Toronto, ON M4T 1W1
          </span>
          <span className="dim-span">info@pestico.com</span>
          <span className="dim-span mb-5">+1(416) 123-4567</span>
          <h4 className="c-heading mb-5">Social contact</h4>
          <div className="flex gap-4">
            {socialMedia2.map((link, index) => (
              <Link key={index} href={link.link} className="h-8 w-8">
                <Image
                  src={link.icon}
                  alt={link.id}
                  width={36}
                  height={36}
                  className="object-contain cursor-pointer text-black rounded-full"
                />
              </Link>
            ))}
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default page;
