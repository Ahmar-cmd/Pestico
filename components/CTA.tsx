import Link from "next/link";
import Button from "./Button";

const CTA = () => (
  <section
    className="flex justify-center items-center bg-cover bg-top sm:mt-8 mt-4 sm:px-16 px-6 sm:py-12 py-6 sm:flex-row flex-col rounded-[20px]"
    style={{ backgroundImage: "url('/bg.png')" }}
  >
    <div className="flex-1 flex flex-col">
      <h2 className="font-abrilFatface font-semibold sm:text-[45px] text-[40px] leading-[45px] sm:leading-[50px] w-full">
        Let's try <span className="text-primary">our service</span> now!
      </h2>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
      Eco-friendly pest control. Quick responses. Customized solutions. Protect your home and family safely.
      </p>
    </div>

    <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-5">
      <Link href="/contact-us">
        <Button>Get Started</Button>
      </Link>
    </div>
  </section>
);

export default CTA;
