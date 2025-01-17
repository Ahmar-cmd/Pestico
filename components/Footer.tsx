import Image from "next/image";
import Link from "next/link";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <footer className="flex flex-col py-6 bg-black text-dimWhite">
    <div className="flex flex-col sm:flex-row justify-around items-start mb-4 w-full gap-10">
      <div className="flex flex-col pl-7 sm:pl-0">
        <Link href="/">
          <Image
            src="/logo-2.png"
            alt="Pestico"
            height={165}
            width={165}
            className="object-contain cursor-pointer"
          />
        </Link>
        <p className="font-poppins text-[16px] leading-[24px] mt-4 max-w-[300px]">
        Effective pest solutions for a safer, healthier living space.
        </p>
      </div>

      <div className="flex flex-wrap w-full sm:w-auto gap-8 pl-[27px] md:pl-0">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className="min-w-[150px] sm:max-w-[200px]">
            <h4 className="font-poppins font-semibold text-white text-[20px] mb-4">
              {footerlink.title}
            </h4>
            <ul className="space-y-3">
              {footerlink.links.map((link, i) => (
                <li key={link.name}  className={`hover:text-primary ${ footerlink.title === "Contact" && i !== 0  ? 'text-primary hover:text-black' : ''}`}>
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex flex-col sm:flex-row flex-wrap justify-between items-center border-t border-gray-700 pt-6 sm:px-36 gap-4">
      <p className="font-poppins text-center text-[14px] sm:text-[16px]">
       <span className="text-primary">Pestico</span> © 2025. All Right Reserved
      </p>

      <div className="flex gap-6">
        {socialMedia.map((social) => (
          <Link key={social.id} href={social.link}>
            <Image
              src={social.icon}
              alt={social.id}
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
