import React, { useState } from 'react';
import SectionTitle from './shared/SectionTitle';
import { MdOutlineMail, MdOutlineWhatsapp } from "react-icons/md";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { BarLoader } from 'react-spinners';

const Contact = () => {

    const form = useRef();
    const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm('service_jrlazz4', 'template_t3qfhhq', form.current, '9p1CIaofBsrpwmiZi')
            .then((result) => {
                if (result.text === 'OK') {
                    setLoading(false)
                    toast.success("Message sent successfully!")
                }
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
    };
    

    return (
        <div id='contact' className='min-h-[627px] w-full py-16'>
            <SectionTitle title='Contact' subtitle='Get In Touch'></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='grid grid-cols-1 lg:w-1/2 lg:mx-auto gap-8 overflow-hidden'>
                    <a href="mailto:pinkukumarsarker@gmail.com">
                        <article className='rounded-lg bg-[#092635]
                        border-2
                        border-transparent
                         hover:border-2 hover:bg-opacity-60 hover:border-myColor text-center text-white flex flex-col items-center justify-center p-6 space-y-2'>
                            <MdOutlineMail className='text-myColor'></MdOutlineMail>
                            <h1 className='font-semibold'>Email</h1>
                            <small>pinkukumarsarker@gmail.com</small>
                            <small className='text-myColor'>Send a message</small>
                        </article>
                    </a>
                    <a href='https://wa.me/8801641888396' target='_blank'>
                        <article className='rounded-lg bg-[#092635]
                        border-2
                        border-transparent
                         hover:border-2 hover:bg-opacity-60 hover:border-myColor text-center text-white flex flex-col items-center justify-center p-6 space-y-2'>
                            <MdOutlineWhatsapp className='text-myColor'></MdOutlineWhatsapp>
                            <h1 className='font-semibold'>WhatsApp</h1>
                            <small>01641888396</small>
                            <small className='text-myColor'>Send a message</small>
                        </article>
                    </a>
                </div>
                <form ref={form} onSubmit={sendEmail} className='relative'>
                    <input type="text" name='name' required placeholder='Your full name' className='w-full bg-transparent border-2 border-myColor rounded-md pl-4 py-3' />
                    <input type="email" name='email' required placeholder='Your email' className='w-full bg-transparent border-2 border-myColor rounded-md pl-4 py-3 my-6' />
                    <textarea name="message" rows="4" required placeholder='Your Message' className='w-full bg-transparent border-2 border-myColor rounded-md pl-4 py-3'></textarea>
                    <input type="submit" value="Send" className="px-8 py-2 bg-myColor text-[#1f1f38] rounded-md mt-5 cursor-pointer" />
                    <div className='absolute bottom-20 right-6'>
                        {
                            loading && <BarLoader color="#96EFFF" width="85" />
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;