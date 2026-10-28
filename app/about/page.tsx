import React from 'react'
import ReviewBox from '../(components)/ReviewBox'
import OurTeam from '../(components)/about/OurTeam'
import BookAppointmentCallToAction from '../(components)/homepage/BookAppointmentCallToAction'


export default function AboutPage() {
    const backgroundImage = {
        backgroundImage: "url('/media/kid-smiling.jpg')",
    }

    return (
        <div className='flex flex-col'>
            <div style={backgroundImage}
                className='relative z-10 px-mobilex lg:px-normalx pt-16 bg-fixed bg-left md:bg-center bg-cover bg-no-repeat'>
                <div className="absolute bg-black/40 inset-0 -z-10"></div>
                <div className="z-20 text-center text-white py-[13rem] max-w-5xl mx-auto">
                    <h2 className='font-semibold text-7xl translate-y-16'>About Us</h2>
                </div>
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-20 px-mobilex lg:px-normalx pt-28 pb-40">
                <div className="squares-about absolute inset-0 -z-10"></div>
                <div className="flex flex-col gap-8">
                    <h3 className='font-semibold text-4xl z-10'>Your Smile Is Our Priority</h3>
                    <div className="flex flex-col gap-3 text-2xl">
                        <p>We believe in creating confident, healthy smiles that last a lifetime. With a dedicated team of experienced orthodontists and dental professionals, we are committed to providing top-notch orthodontic care in a warm, friendly, and comfortable environment.</p>
                        <p>Our mission is simple: to transform smiles and enhance lives. We offer a comprehensive range of orthodontic services, including traditional braces, Invisalign, clear aligners, and more, tailored to meet the unique needs of each patient, from children to adults.</p>
                    </div>
                </div>
                <ReviewBox
                    title='Great Since My First Visit'
                    review="Dr. Terry and the staff at Smiles For Colorado have been more than great since my first visit. She understands my military schedule, and I'm able to work around field exercises and unexpected duties."
                    author="- Brooklynn H."
                />
            </div>
            <OurTeam />
            <BookAppointmentCallToAction />
        </div>
    )
}
