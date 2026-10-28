import React from 'react'
import ClinicInfo from '../(components)/contact-us/ClinicInfo'
import ContactForm from '../(components)/contact-us/ContactForm'

export default function ContactUsPage() {
    return (
        <div className='relative z-10 flex flex-col gap-10 pt-[7rem] pb-[16rem] px-mobilex lg:px-normalx'>
            <div className='squares-about absolute inset-0 -z-10'></div>

            <div className='flex flex-col gap-4'>
                <h2 className='font-semibold text-4xl md:text-5xl'>Contact Us</h2>
                <p className='max-w-3xl text-xl leading-relaxed text-gray-700'>
                    {`Have a question about our services, or want to plan your visit? Get in touch with our Montreal team and we'll get back to you as soon as we can.`}
                </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start'>
                <ClinicInfo />
                <ContactForm />
            </div>
        </div>
    )
}

