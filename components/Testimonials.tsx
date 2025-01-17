import React from "react";
import { testimonials } from "../constants";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="w-full bg-service flex flex-col justify-center items-center gap-3 px-8 py-12">
       <h1 className="s-heading">Testimonials</h1>
       <h2 className="l-heading mb-5">Customer Reviews</h2>
       <div className="flex flex-wrap gap-10 justify-center items-center">
      {testimonials.map((review, i) => (
        <div key={i} className="flex flex-col justify-center items-center gap-4 bg-white h-[380px] sm:w-[340px] rounded-2xl px-8 py-5">
          <div className="flex gap-2">
          <Image
            src={review.stars}
            alt="tick"
            height={15}
            width={15}
            className="object-contain rounded-full"
          />
          <Image
            src={review.stars}
            alt="tick"
            height={15}
            width={15}
            className="object-contain rounded-full"
          />
          <Image
            src={review.stars}
            alt="tick"
            height={15}
            width={15}
            className="object-contain rounded-full"
          />
          <Image
            src={review.stars}
            alt="tick"
            height={15}
            width={15}
            className="object-contain rounded-full"
          />
          <Image
            src={review.stars}
            alt="tick"
            height={15}
            width={15}
            className="object-contain rounded-full"
          />
          </div>
          <p className="text-[16px] text-dimWhite">{review.message}</p>
          <Image
            src={review.image}
            alt="tick"
            height={70}
            width={70}
            className="object-contain rounded-full"
          />
          <h3 className="text-[22px] font-semibold">{review.name}</h3>
          <h4 className="s-heading -mt-4">{review.location}</h4>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Testimonials;
