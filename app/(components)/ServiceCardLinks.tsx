import React from 'react'
import Link from 'next/link'
import FadeBtn from './FadeBtn'
import { DentalServices } from '../(libs)/@types/index.t'

interface ServiceCardLinksProps {
    services: DentalServices[]
}

export default function ServiceCardLinks(props: ServiceCardLinksProps) {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-[500px_500px] gap-5 justify-center'>
            {
                props.services.map((service, index: number) => {
                    const serviceCardBgImage = {
                        backgroundImage: `Url('${service.image}')`
                    }

                    return (
                        <Link key={`${index}-service-card`} style={serviceCardBgImage}
                            href={service.link ? service.link : "/book-appointment"}
                            className={`relative z-10 flex flex-col ${service.last ? "col-span-2 w-full" : "col-span-2 lg:col-span-1 w-full lg:w-[500px]"} h-[500px] text-center justify-center gap-8 bg-cover bg-center`}>
                            <div className="absolute inset-0 bg-black/50 hover:bg-black/70 z-0 duration-500"></div>
                            <div className="z-20 text-gray-100 font-semibold text-3xl">
                                <p>{service.title}</p>
                            </div>
                            <FadeBtn>
                                Learn More
                            </FadeBtn>
                        </Link>
                    )
                })
            }
        </div >
    )
}
