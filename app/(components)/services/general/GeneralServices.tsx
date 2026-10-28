import React from 'react'
import ServiceCardLinks from '../../ServiceCardLinks';
import { DentalServices } from '../cosmetic/CosmeticServices';

export default function GeneralServices() {
    const services: DentalServices[] = [
        {
            title: "Exam and Cleanings",
            image: "/media/services/general/gs-1.webp"
        },
        {
            title: "Oral Hygiene Instructions",
            image: "/media/services/general/gs-2.webp"
        },
        {
            title: "Oral Cancer Screening",
            image: "/media/services/general/gs-3.webp"
        },
        {
            title: "Periodontal Cleaning",
            image: "/media/services/general/gs-4.webp"
        },
        {
            title: "Fluoride",
            image: "/media/services/general/gs-5.webp"
        },
        {
            title: "Sealants",
            image: "/media/services/general/gs-6.webp"
        },
        {
            title: "Children's Dentistry",
            image: "/media/services/general/gs-7.webp"
        },
        {
            title: "Nightguards",
            image: "/media/services/general/gs-8.webp"
        },
        {
            title: "Mouthguards",
            image: "/media/services/general/gs-9.webp"
        },
        {
            title: "Sedation Dentistry",
            image: "/media/services/general/gs-10.webp"
        },
        {
            title: "TMJ/TMD Treatment",
            image: "/media/services/general/gs-11.webp",
            last: true
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
