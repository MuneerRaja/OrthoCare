import Link from 'next/link'
import React from 'react'
import FadeBtn from '../../FadeBtn'
import ServiceCardLinks from '../../ServiceCardLinks';

export type DentalServices = {
    image: string;
    title: string;
    link?: string;
    last?: boolean;
}

export default function SurgicalServices() {
    const services: DentalServices[] = [
        {
            title: "Same-Day Crowns",
            image: "/media/services/surgical/ss-1.png"
        },
        {
            title: "Dental Implants",
            image: "/media/services/surgical/ss-2.webp"
        },
        {
            title: "Composite Filings",
            image: "/media/services/surgical/ss-3.webp"
        },
        {
            title: "Root Canals",
            image: "/media/services/surgical/ss-4.webp"
        },
        {
            title: "Extractions",
            image: "/media/services/surgical/ss-5.webp"
        },
        {
            title: "Dentures",
            image: "/media/services/surgical/ss-6.webp"
        },
        {
            title: "Bridges",
            image: "/media/services/surgical/ss-7.webp"
        },
        {
            title: "Inlays / Onlays",
            image: "/media/services/surgical/ss-8.webp"
        }
    ]

    return (
        <div className='relative z-10 px-mobilex lg:px-normalx bg-gray-200 pt-[250px] pb-20'>
            <div className="absolute inset-x-0 -translate-y-[250px] z-10">
                <svg className='w-full h-[10rem]' preserveAspectRatio='none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F3F4F6" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,133.3C672,160,768,192,864,208C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
            <div className="absolute inset-0 lines-general-services -z-10"></div>
            <div className="flex flex-col gap-10 z-20">
                <h2 className='font-semibold text-4xl text-center'>Services Offered</h2>
                <ServiceCardLinks services={services} />
            </div>
        </div>
    )
}
