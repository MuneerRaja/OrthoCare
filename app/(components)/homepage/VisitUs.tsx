import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function VisitUs() {
    return (
        <div className='relative z-10 bg-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-16 px-mobilex md:px-[8rem] pt-40 pb-20'>
            <div className="absolute inset-0 small-polka-dots -z-20"></div>
            <div className="absolute inset-0 -z-10">
                <svg className='w-full h-[5rem]' preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E5E7EB" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,133.3C672,160,768,192,864,208C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
            <div className="flex flex-col gap-3 z-10">
                <div className="flex gap-3 lg:justify-center">
                    <Image
                        className='min-w-[100px] lg:w-[230px]'
                        src={'/media/visit-us/visit-us-1.jpg'}
                        width={230}
                        height={200}
                        alt="visit-us-image-1"
                        style={{ height: 'auto' }}
                    />
                    <Image
                        className='min-w-[100px] lg:w-[230px] rounded-tr-2xl'
                        src={'/media/visit-us/visit-us-2.jpg'}
                        width={230}
                        height={200}
                        alt="visit-us-image-2"
                        style={{ height: 'auto' }}
                    />
                </div>
                <div className="flex gap-3 lg:justify-center">
                    <Image
                        className='min-w-[100px] lg:w-[230px]'
                        src={'/media/visit-us/visit-us-3.jpg'}
                        width={230}
                        height={200}
                        alt="visit-us-image-3"
                        style={{ height: 'auto' }}
                    />
                    <Image
                        className='min-w-[100px] lg:w-[230px]'
                        src={'/media/visit-us/visit-us-4.jpg'}
                        width={230}
                        height={200}
                        alt="visit-us-image-4"
                        style={{ height: 'auto' }}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-10 lg:gap-7 text-xl leading-relaxed">
                <h2 className='font-merry font-semibold text-4xl'>Visit Us</h2>
                <p className=''>
                    {`We're conveniently located in the downtown Montreal area. Find us on the 2th floor of the Triad Office Park building. Plenty of free parking available.`}
                </p>
                <div className="flex gap-5">
                    <Image
                        className='w-10 self-start'
                        src={'/svgs/map.svg'}
                        width={100}
                        height={100}
                        alt='map-icon-svg'
                        style={{ height: 'auto' }}
                    />
                    <p className=''>
                        OrthoCare Dental Clinic 123 Avenue Maple, Suite 201 Montreal, QC, H3A 1W3, Canada
                    </p>
                </div>
                <div className="">
                    <Link href={'/'} className='font-semibold ml-[3.7rem] hover:text-black/70 duration-300'>
                        Get Directions
                    </Link>
                </div>
                <div className="flex gap-5">
                    <Image
                        className='w-10 self-start'
                        src={'/svgs/clock.svg'}
                        width={100}
                        height={100}
                        alt='clock-icon-svg'
                        style={{ height: 'auto' }}
                    />
                    <p>
                        Monday-Thursday: 7AM-3PM
                    </p>
                </div>
            </div>
            <div className="col-span-2 hidden lg:flex">
                <iframe className='rounded-t-3xl h-[250px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178788.19616580327!2d-73.87668144631797!3d45.55906420709668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC!5e0!3m2!1sen!2sca!4v1701371583054!5m2!1sen!2sca" width="1500" height="400" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
