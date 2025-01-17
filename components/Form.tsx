'use client'
import React from 'react'
import Button from './Button';
import { sendEmail } from '../actions/sendEmail';
import toast from 'react-hot-toast';

const Form = () => {
  return (
    <section className="w-full flex flex-col">
    <h1 className='l-heading leading[60px] mb-3'><span className='text-primary'>Question Us</span> Any Time</h1>
    <form
        className="w-full flex flex-col gap-3 p-3"
        action={async (formData) => {
            const { error } = await sendEmail(formData);
  
            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Message sent successfully!");
          }}
      >
        <input
          type="name"
          name="Name"
          placeholder="Name Here"
          required
          maxLength={50}
          className="h-14 px-6 rounded-full border border-gray-200"
        />
        <div className='w-full sm:flex-row flex-col gap-3 flex'>
        <input
          type="email"
          name="Email"
          placeholder="Email Here"
          required
          maxLength={50}
          className="sm:w-1/2 w-full h-14 px-6 rounded-full border border-gray-200"
        />
        <input
          type="subject"
          name="Subject"
          placeholder="Subject Here"
          required
          maxLength={500}
          className="sm:w-1/2 w-full h-14 px-6 rounded-full border border-gray-200"
        />
        </div>
        <textarea
          name="Message"
          placeholder="Message Here"
          required
          maxLength={5000}
          rows={7}
          className="px-6 py-2 rounded-2xl border border-gray-200"
        />
        <div className='text-center'>
        <Button type='submit' className='w-[200px]'>send message</Button>
        </div>
      </form>
      </section>
  )
}

export default Form