"use client";
import { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <nav className="w-full h-[90px] bg-white flex justify-evenly items-center">
      {/* Desktop navigation */}
      <div className="w-[80%] hidden md:flex justify-evenly items-center py-2 mx-auto">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Pestico"
            height={165}
            width={165}
            className="object-contain cursor-pointer"
          />
        </Link>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-14">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              onClick={() => setActive(nav.title)}
              className={`font-bold cursor-pointer  text-[17px] hover:text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
             ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} ${
                active === nav.title ? "text-primary" : "text-black"
              }`}
            >
              <Link href={nav.href}>{nav.title}</Link>
            </li>
          ))}
        </ul>
        <Link href="/contact-us"><Button type="button">Appointment</Button></Link>
      </div>

      {/* mobile navigation */}
      <div className="w-[88%] md:hidden flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Pestico"
            width={165}
            height={165}
            className="object-contain cursor-pointer"
          />
        </Link>
        <Image
          src={toggle ? "/close.svg" : "/menu.svg"}
          alt="menu"
          height={25}
          width={25}
          className="object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black absolute top-20 right-0 p-6 mx-4 my-2 min-w-[230px] rounded-xl`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-white text-[16px] transition ease-in-out delay-150  hover:text-secondary hover:-translate-y-1 hover:scale-110 duration-300
               ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
               ${active === nav.title ? "text-primary" : "text-black"}`}
              >
                <Link href={`${nav.href}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
