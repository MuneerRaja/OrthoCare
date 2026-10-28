import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FadeBtn from '../FadeBtn'

export default function BookAppointmentCallToAction() {
    return (
        <div className='relative grid justify-center bg-abstract-pattern text-white px-mobilex py-24'>
            <div className="flex flex-col justify-center text-center gap-10">
                <h3 className='font-merry font-semibold text-4xl md:text-5xl'>Book your visit online</h3>
                <p className='text-xl'>View available appointments and enjoy dentistry done right. +FREE teeth whitening for life.</p>
                <div className="">
                    <Link href={'/book-appointment'}>
                        <FadeBtn>
                            BOOK ONLINE
                        </FadeBtn>
                    </Link>
                </div>
            </div>
        </div>
    )
}
