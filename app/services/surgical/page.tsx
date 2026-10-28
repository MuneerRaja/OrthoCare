import FadeBtn from '@/app/(components)/FadeBtn'
import BookAppointmentCallToAction from '@/app/(components)/homepage/BookAppointmentCallToAction'
import SurgicalServices from '@/app/(components)/services/surgical/SurgicalServices'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SurgicalPage() {
    const bgImage = {
        backgroundImage: "url('/media/services/dentist-surgery.jpg')",
    }

    return (
        <div className='flex flex-col'>
            <div style={bgImage} className='relative z-10 px-mobilex lg:px-normalx pt-[264px] pb-[198px] border-b border-yellow-600 bg-top lg:bg-center bg-cover bg-no-repeat drop-shadow'>
                <div className="absolute bg-black/30 inset-0 -z-10"></div>
                <div className="flex flex-col gap-8 text-gray-100 text-center">
                    <h2 className='font-semibold text-7xl'>Surgical Dentistry</h2>
                    <Link href={'/book-appointment'}>
                        <FadeBtn >
                            Book Appointment
                        </FadeBtn>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[auto_400px] bg-gray-100 items-center justify-center py-20 gap-10 lg:gap-20 px-mobilex lg:px-normalx">
                <div className="order-1 flex flex-col gap-5">
                    <h3 className='font-semibold text-4xl'>Comprehensive Solutions for Smile Restoration</h3>
                    <p className='text-xl'>{`Surgical dentistry is dedicated to revitalizing the strength and appearance of your smile. If you've been enduring discomfort due to decay or other oral health issues, surgical therapy could be beneficial for you. We offer conservative treatment options to preserve your natural teeth, as well as various tooth replacement solutions.`}</p>
                </div>
                <div className="order-fist lg:order-last">
                    <Image
                        className='w-full rounded-lg'
                        src={'/media/dental-crown.png'}
                        width={300}
                        height={300}
                        alt='dental-crown-image'
                    />
                </div>
            </div>
            <SurgicalServices />
            <BookAppointmentCallToAction />
        </div>
    )
}
