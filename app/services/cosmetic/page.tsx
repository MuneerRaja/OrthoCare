import FadeBtn from '@/app/(components)/FadeBtn'
import BookAppointmentCallToAction from '@/app/(components)/homepage/BookAppointmentCallToAction'
import CosmeticServices from '@/app/(components)/services/cosmetic/CosmeticServices'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CosmeticPage() {
    const bgImage = {
        backgroundImage: "url('/media/services/dental-braces.jpg')",
    }

    return (
        <div className='flex flex-col'>
            <div style={bgImage} className='relative z-10 px-mobilex lg:px-normalx pt-[264px] pb-[198px] border-b border-yellow-600 bg-top lg:bg-center bg-cover bg-no-repeat drop-shadow'>
                <div className="absolute bg-black/30 inset-0 -z-10"></div>
                <div className="flex flex-col gap-8 text-gray-100 text-center">
                    <h2 className='font-semibold text-7xl'>Cosmetic Dentistry</h2>
                    <Link href={'/book-appointment'}>
                        <FadeBtn >
                            Book Appointment
                        </FadeBtn>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[auto_400px] bg-gray-100 items-center justify-center py-20 gap-10 lg:gap-20 px-mobilex lg:px-normalx">
                <div className="order-1 flex flex-col gap-5">
                    <h3 className='font-semibold text-4xl'>Our Range of Services for Your Perfect Smile</h3>
                    <p className='text-xl'>{`If you've ever felt the need to conceal your smile, dodge being photographed, or shield your mouth due to dissatisfaction with your teeth's look, it might be the moment to explore our cosmetic smile options. We provide various services aimed at granting you the radiant smile you've always wished for.`}</p>
                </div>
                <div className="order-fist lg:order-last">
                    <Image
                        className='w-full rounded-lg'
                        src={'/media/patient-and-dentist.webp'}
                        width={300}
                        height={300}
                        alt='patient-and-dentist-image'
                    />
                </div>
            </div>
            <CosmeticServices />
            <BookAppointmentCallToAction />
        </div>
    )
}
