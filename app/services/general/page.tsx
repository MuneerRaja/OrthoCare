import Container from '@/app/(components)/Container'
import FadeBtn from '@/app/(components)/FadeBtn'
import BookAppointmentCallToAction from '@/app/(components)/homepage/BookAppointmentCallToAction'
import GeneralServices from '@/app/(components)/services/general/GeneralServices'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function GeneralPage() {
    const bgImage = {
        backgroundImage: "url('/media/services/dental-health.jpg')",
    }

    return (
        <div className='flex flex-col'>
            <div style={bgImage} className='relative z-10 px-mobilex lg:px-normalx pt-[264px] pb-[198px] border-b border-yellow-600 bg-top lg:bg-center bg-cover bg-no-repeat drop-shadow'>
                <div className="absolute bg-black/30 inset-0 -z-10"></div>
                <div className="flex flex-col gap-8 text-gray-100 text-center">
                    <h2 className='font-semibold text-7xl'>General Dentistry</h2>
                    <Link href={'/book-appointment'}>
                        <FadeBtn >
                            Book Appointment
                        </FadeBtn>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[auto_400px] bg-gray-100 items-center justify-center py-20 gap-10 lg:gap-20 px-mobilex lg:px-normalx">
                <div className="order-1 flex flex-col gap-5">
                    <h3 className='font-semibold text-4xl'>Our Comprehensive Orthodontic Services</h3>
                    <p className='text-xl'>At OrthoCare, we offer a wide range of orthodontic treatments tailored to address various dental needs. Our dedicated team of professionals is committed to providing personalized care and ensuring the best possible outcomes for our patients.</p>
                </div>
                <div className="order-fist lg:order-last">
                    <Image
                        className='w-full rounded-lg'
                        src={'/media/dentist-giving-health-advice.jpg'}
                        width={300}
                        height={300}
                        alt='dentist-giving-advice-image'
                    />
                </div>
            </div>
            <GeneralServices />
            <BookAppointmentCallToAction />
        </div>
    )
}
