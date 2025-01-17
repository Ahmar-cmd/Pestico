"use client";

import Image from "next/image";
import { faqs } from "../constants";
import { useState } from "react";

const FAQsSec = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const toggle = (i: number) => {
        if (selected === i) {
           return setSelected(null);
        }
        setSelected(i);
    };

  return (
    <article className="font-poppins bg-white sm:px-64 px-3 sm:py-20 py-10 mb-3">
      <h1 className='l-heading leading[60px] mb-3'>Common <span className='text-primary'>Questions</span></h1>
      {faqs.map((faq, i) => {
        return (
          <div key={i} className="bg-service px-6 py-4 mb-3 rounded-lg">
            <div className="flex justify-between cursor-pointer border-b-[1px] mb-1" 
                onClick={()=> toggle(i)}
            >
              <h1 className="text-[18px] font-semibold py-4 text-black hover:text-primary">{faq.question}</h1>
              <Image
                src="/arrow.svg"
                alt="arrow"
                width={23}
                height={23}
                className={`object-contain ${selected === i ? "rotate-180" : ""}`}
              />
            </div>
            <h2 className={`dim-span ${selected === i ? "flex max-h-96 translate-x-0 transition-all duration-250 ease-in" : "flex-none h-0 overflow-hidden -translate-y-1"}`}>{faq.answer}</h2>
          </div>
        );
      })}
    </article>
  );
};

export default FAQsSec;
