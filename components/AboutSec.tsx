import Image from 'next/image'
import React from 'react'
import { features } from '../constants'
import Button from './Button'

const AboutSec = () => {
  return (
    <article className="w-full py-12 sm:py-24 px-6 sm:px-16 bg-white flex sm:flex-row flex-col justify-center gap-6">
        <div className="sm:w-[40%] flex justify-center">
          <Image
            src="/image-3.jpg"
            alt="person"
            height={425}
            width={425}
            className="object-contain rounded-xl"
          />
        </div>
        <div className="sm:w-[40%]">
          <h3 className="s-heading mb-3">
            About pestico
          </h3>
          <h1 className="sm:text-[50px] text-[38px] font-bold font-abrilFatface leading-[45px] mb-3">
            World Best Pest <br className='md:flex hidden'/>
            Company Since 2008.
          </h1>
          <p className="text-[16px] text-dimWhite mb-7">
          We offer comprehensive pest control solutions tailored to your specific
           needs, ensuring a pest-free environment for your home or business. With years of 
           experience and advanced techniques, our team delivers professional pest management services you can trust
          </p>
          {features.map((feature, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <Image
                src={feature.icon}
                alt="tick"
                height={15}
                width={15}
                className="object-contain rounded-full"
              />
              <span className="text-dimWhite">{feature.line}</span>
            </div>
          ))}
          <Button className="mt-3">Find Services</Button>
        </div>
          </article>
  )
}

export default AboutSec