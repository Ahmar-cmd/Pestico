import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="sm:h-screen h-[63vh] w-full bg-cover sm:bg-center bg-top flex md:gap-4 sm:items-center items-start sm:justify-center p-2 sm:p-14"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="md:w-1/2 w-full flex flex-col justify-start items-start sm:space-y-4 space-y-2 pt-4 sm:pt-0 pl-2 sm:pl-24 ">
        <h1 className="flex-1 font-abrilFatface font-bold text-[45px] sm:text-[72px] leading-[50px] sm:leading-[80px]">
          Treating <br /> <span>Customers</span> <br /> Like Family
        </h1>
        <span className="md:text-2xl text-xl">Discover your next great <br className="md:hidden"/>experience.</span>
        <Link href='/our-services'><Button type="button">Schedule Serevices</Button></Link>
      </div>
     
      <div className="w-1/2 hidden lg:flex items-center justify-center">
        <div
          className=" w-[450px] h-[450px] bg-cover bg-center rounded-full"
          style={{ backgroundImage: "url('/image-1.jpg')" }}
        ></div>

        <Image
          src="/image-2.png"
          alt="Person"
          height={330}
          width={390}
          className="absolute top-[155px] right-[190px] z-10 object-contain"
        />
      </div>
    </section>
  );
};
// top155 right 190 removerelative height 390 width 330
export default Hero;
