import React from 'react'
import FAQsSec from '../../components/FAQsSec'
import Form from '../../components/Form'

const page = () => {
  return (
    <section>
      <div
        className="w-full h-[330px] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/bg-2.jpg')" }}
      >
        <h1 className="l-heading text-white sm:mb-0 mb-1">Frequently Asked Question</h1>
        <p className="sm:text-[22px] text-[18px] text-white text-center">
          Treating Customers Like <br className="sm:hidden" /> Family Since 2008
        </p>
      </div>
      <FAQsSec/>
      <section className='sm:px-40 px-2 sm:py-15 py-8 sm:mt-10 mt-5 bg-service'>
      <Form/>
      </section>
    </section>
  )
}

export default page