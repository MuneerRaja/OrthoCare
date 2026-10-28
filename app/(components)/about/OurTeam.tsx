"use client"

import Image from 'next/image';
import React from 'react'

type TeamMember = {
    name: string;
    role: string;
    text: string;
    image: string;
}

const OurTeam = () => {
    const teamMembers: TeamMember[] = [
        {
            name: "Dr. André Dubois, DDS",
            role: "Orthodontist & Founder",
            text: "Dr. Dubois, our esteemed founder, brings over 15 years of expertise to OrthoCare. Her commitment to personalized orthodontic care and her leadership have been instrumental in creating a welcoming and innovative clinic environment.",
            image: "/media/team/male-dentist-1.jpg"
        },
        {
            name: "Dr. Jean-Pierre Gagnon, DMD",
            role: "Orthodontist",
            text: "Dr. Gagnon is known for his expertise in advanced orthodontic techniques. With a focus on precision and patient comfort, he tailors treatments to achieve outstanding results while ensuring a pleasant experience for our patients.",
            image: "/media/team/male-dentist-2.jpg",
        },
        {
            name: "Dr. Marie Leblanc, DMD",
            role: "Consulting Orthodontist",
            text: "Dr. Leblanc brings a wealth of experience as a consulting orthodontist. His guidance and insights contribute to the continuous improvement of our treatment methodologies and patient care standards.",
            image: "/media/team/female-dentist-1.jpg",
        },
        {
            name: "Émilie Lefebvre",
            role: "Orthodontic Technician",
            text: "Émilie's attention to detail and technical expertise make her an indispensable member of our team. She works closely with our orthodontists to ensure that treatments are carried out efficiently and effectively.",
            image: "/media/team/female-dentist-2.jpg"
        },
        {
            name: "Dr. Marc-André Tremblay, DMD",
            role: "Orthodontist",
            text: "Dr. Tremblay is passionate about delivering top-tier orthodontic care. His meticulous approach and empathetic nature ensure that patients receive tailored treatments with a focus on both aesthetics and functionality.",
            image: "/media/team/male-dentist-3.jpg"
        },
    ]

    return (
        <div className="flex flex-col gap-10 px-mobilex lg:px-normalx pt-32 pb-20 bg-blue-900">
            <div className="absolute z-10 inset-x-0 -translate-y-[240px]">
                <svg className='w-full h-[10rem]' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none' viewBox="0 0 1440 320"><path fill="#1E3A8A" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,133.3C672,160,768,192,864,208C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <div className="flex flex-col gap-[10rem] text-gray-100">
                {
                    teamMembers.map((member, index: number) => {
                        return (
                            <div key={`${index}-member`} className="grid lg:grid-flow-col items-center gap-20">
                                <div className="flex justify-center">
                                    <Image
                                        className='float-left lg:max-w-md w-[900px] h-[500px] object-cover object-top rounded-lg shadow-lg'
                                        src={member.image}
                                        width={500}
                                        height={500}
                                        alt={`${member.name}-image`}
                                        style={{ height: 'auto' }}
                                    />
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-1">
                                        <h3 className='font-bold text-4xl'>{member.name}</h3>
                                        <p className='text-2xl'>{member.role}</p>
                                    </div>
                                    <p className='text-xl font-medium leading-loose'>{member.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OurTeam
