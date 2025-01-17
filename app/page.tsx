import Link from "next/link";
import { Hero, CTA, Testimonials, Button } from "../components";
import AboutSec from "../components/AboutSec";
import ServiceSec from "../components/ServiceSec";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <AboutSec/>
      <div className="flex flex-col items-center bg-service pt-16 pb-6">
        <h1 className="s-heading">Our Services</h1>
        <h2 className="l-heading">Pest Control Services</h2>
        <ServiceSec className="-my-4 sm:py-12"/>
        <Link href='/our-services'><Button className="mb-8">Find Services</Button></Link>
      </div>
      <Stats />
      <Testimonials />
      <CTA/>
    </section>
  );
}
