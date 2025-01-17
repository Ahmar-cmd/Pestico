import React from 'react'
import { team } from '../constants'
import Image from 'next/image'

const Team = () => {
  return (
        <section className="flex flex-col items-center py-16">
          <h3 className="s-heading">Our Team</h3>
          <h1 className="l-heading sm:mb-6 mb-2">Pest Control Experts</h1>
          <div className="flex flex-wrap justify-center gap-3 px-4 py-2">
            {team.map((person) => (
              <div key={person.name} className="flex flex-col items-center p-3 sm:w-[290px] w-[300px] sm:h-[490px] h-[440px]">
                <Image
                  src={person.image}
                  alt={person.name}
                  height={300}
                  width={300}
                  className="object-contain rounded-3xl mb-3"
                />
                <h2 className="text-[22px]">{person.name}</h2>
                <h3 className="text-[16px] text-dimWhite">{person.role}</h3>
              </div>
            ))}
          </div>
        </section>
  )
}

export default Team