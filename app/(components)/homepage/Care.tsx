import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import Link from 'next/link'

interface CareCardProps {
    link?: string
    children: React.ReactNode
}

function CareCard(props: CareCardProps) {
    return (
        <Link href={props.link || "/"}
            className="bg-inherit hover:bg-white rounded-t-2xl hover:shadow-lg hover:-translate-y-3 p-6 transition-all duration-500"
        >
            {props.children}
        </Link>
    )
}

function LearnMoreBtn() {
    return (
        <button className='bg-inherit hover:bg-amber-300 px-10 py-3 border border-yellow-500 hover:border-amber-300 duration-300 text-lg text-semibold'>
            LEARN MORE
        </button>
    )
}

export default function Care() {
    const lines = {
        backgroundColor: "#f1f1fe",
        opacity: 0.1,
        backgroundImage: "linear-gradient(#0284C7 1.8px, transparent 1.8px), linear-gradient(to right, #0284C7 1.8px, #f1f1fe 1.8px)",
        backgroundSize: "36px 36px",
    }
    return (
        <Container className='bg-gray-100 px-mobilex lg:px-normalx py-20'>
            <div className='flex flex-col gap-10'>
                <h2 className='text-3xl md:text-4xl text-center font-merry font-semibold'>Comprehensive care, one convenient location</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center">
                    <CareCard link='/services/general'>
                        <div className="flex flex-col gap-5 justify-center">
                            <Image
                                className='rounded-t-2xl w-full lg:w-auto'
                                src={'/media/care/patient-care-1.jpg'}
                                width={400}
                                height={400}
                                alt='dentist with patient'
                                style={{ height: 'auto' }}
                            />
                            <div className="flex flex-col gap-3">
                                <h2 className='font-semibold text-xl'>General</h2>
                                <p className='text-lg'>Everything you expect and then some. Cleanings, fillings, and x-rays are just the beginning.</p>
                                <div className="">
                                    <LearnMoreBtn />
                                </div>
                            </div>
                        </div>
                    </CareCard>
                    <CareCard link='/services/cosmetic'>
                        <div className="flex flex-col gap-5 justify-center">
                            <Image
                                className='rounded-t-2xl w-full lg:w-auto'
                                src={'/media/care/patient-care-2.jpg'}
                                width={400}
                                height={400}
                                alt='dentist with patient'
                                style={{ height: 'auto' }}
                            />
                            <div className="flex flex-col gap-3">
                                <h2 className='font-semibold text-xl'>Cosmetic</h2>
                                <p className='text-lg'>Discover your “wow!” factor. Invisalign, veneers, and in-office or take-home teeth whitening.</p>
                                <div className="">
                                    <LearnMoreBtn />
                                </div>
                            </div>
                        </div>
                    </CareCard>
                    <CareCard link='/services/surgical'>
                        <div className="flex flex-col gap-5 justify-center">
                            <Image
                                className='rounded-t-2xl w-full lg:w-auto'
                                src={'/media/care/patient-care-3.jpg'}
                                width={400}
                                height={400}
                                alt='dentist with patient'
                                style={{ height: 'auto' }}
                            />
                            <div className="flex flex-col gap-3">
                                <h2 className='font-semibold text-xl'>Surgical</h2>
                                <p className='text-lg'>We can fix anything. Our dentists repair damaged or lost teeth with cutting-edge implants and more.</p>
                                <div className="">
                                    <LearnMoreBtn />
                                </div>
                            </div>
                        </div>
                    </CareCard>
                </div>
            </div>
        </Container>
    )
}
