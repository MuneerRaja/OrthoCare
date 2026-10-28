import FadeBtn from '@/app/(components)/FadeBtn'
import BookAppointmentCallToAction from '@/app/(components)/homepage/BookAppointmentCallToAction'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ServicesPage() {
    const bgImage = {
        backgroundImage: "url('/media/dentist-with-patient-2.jpg')",
    }

    const serviceCategories = [
        {
            title: "General Dentistry",
            description: "Everything you expect and then some. Cleanings, fillings, and x-rays are just the beginning.",
            link: "/services/general",
            image: "/media/care/patient-care-1.jpg",
            alt: "dentist caring for a patient"
        },
        {
            title: "Cosmetic Dentistry",
            description: "Discover your “wow!” factor. Invisalign, veneers, and in-office or take-home teeth whitening.",
            link: "/services/cosmetic",
            image: "/media/care/patient-care-2.jpg",
            alt: "patient smiling with a dentist"
        },
        {
            title: "Surgical Dentistry",
            description: "We can fix anything. Our dentists repair damaged or lost teeth with cutting-edge implants and more.",
            link: "/services/surgical",
            image: "/media/care/patient-care-3.jpg",
            alt: "dentist performing a dental treatment"
        }
    ]

    return (
        <div className='flex flex-col'>
            <div style={bgImage} className='relative z-10 px-mobilex lg:px-normalx pt-[264px] pb-[198px] border-b border-yellow-600 bg-top lg:bg-center bg-cover bg-no-repeat drop-shadow'>
                <div className="absolute bg-black/30 inset-0 -z-10"></div>
                <div className="flex flex-col gap-8 text-gray-100 text-center">
                    <h2 className='font-semibold text-7xl'>Our Services</h2>
                    <p className='text-xl max-w-3xl mx-auto'>Explore the dental services available at OrthoCare, organized into three easy-to-browse categories.</p>
                    <Link href={'/book-appointment'}>
                        <FadeBtn >
                            Book Appointment
                        </FadeBtn>
                    </Link>
                </div>
            </div>
            <div className='bg-gray-100 py-20 px-mobilex lg:px-normalx'>
                <div className='flex flex-col gap-5 text-center max-w-4xl mx-auto'>
                    <h3 className='font-semibold text-4xl'>Dental Services at OrthoCare</h3>
                    <p className='text-xl'>Our services are grouped into general, cosmetic, and surgical dentistry so you can quickly find what you are looking for. Browse a category below to see the treatments it includes, then book your visit online when you are ready.</p>
                </div>
            </div>
            <div className='relative z-10 px-mobilex lg:px-normalx bg-gray-200 pt-[250px] pb-20'>
                <div className="absolute inset-x-0 -translate-y-[250px] z-10">
                    <svg className='w-full h-[10rem]' preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F3F4F6" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,133.3C672,160,768,192,864,208C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                </div>
                <div className="absolute inset-0 lines-general-services -z-10"></div>
                <div className='flex flex-col gap-10 z-20'>
                    <h2 className='font-semibold text-4xl text-center'>Explore Our Services</h2>
                    {
                        serviceCategories.map((category) => (
                            <Link key={category.link} href={category.link}
                                className='group relative z-20 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center bg-gray-100 rounded-2xl p-6 lg:p-10 hover:bg-white hover:shadow-lg hover:-translate-y-2 transition-all duration-500'>
                                <div className='w-full lg:w-[400px] lg:shrink-0'>
                                    <Image
                                        className='w-full rounded-lg'
                                        src={category.image}
                                        width={400}
                                        height={400}
                                        alt={category.alt}
                                        style={{ height: 'auto' }}
                                    />
                                </div>
                                <div className='flex flex-col gap-5 text-center lg:text-left'>
                                    <h3 className='font-semibold text-4xl'>{category.title}</h3>
                                    <p className='text-xl'>{category.description}</p>
                                    <div className='flex justify-center lg:justify-start'>
                                        <span className='inline-block bg-inherit group-hover:bg-amber-300 px-10 py-3 border border-yellow-500 group-hover:border-amber-300 duration-300 text-lg font-semibold'>
                                            LEARN MORE
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <BookAppointmentCallToAction />
        </div>
    )
}
