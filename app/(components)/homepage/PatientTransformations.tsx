import React from 'react'
import ComparisonSlider from '../ComparisonSlider'

export default function PatientTransformations() {

    return (
        <div className='relative z-10 bg-white px-mobilex py-20 lg:px-normalx flex flex-col gap-14 md:gap-16 justify-center'>
            <div className="polka-dots absolute inset-0 -z-10"></div>
            <div className="font-semibold text-center z-20">
                <p className='tracking-widest text-3xl text-blue-800'>PATIENT</p>
                <h2 className='text-3xl md:text-4xl'>Transformations</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <ComparisonSlider
                    image1='/media/before-after/teeth-a-1.jpeg'
                    image2='/media/before-after/teeth-a-2.jpeg'
                />
                <ComparisonSlider
                    image1='/media/before-after/teeth-b-1.jpeg'
                    image2='/media/before-after/teeth-b-2.jpeg'
                />
                <ComparisonSlider
                    image1='/media/before-after/teeth-c-1.jpeg'
                    image2='/media/before-after/teeth-c-2.jpeg'
                />
                <ComparisonSlider
                    image1='/media/before-after/teeth-d-1.jpeg'
                    image2='/media/before-after/teeth-d-2.jpeg'
                />
                <ComparisonSlider
                    image1='/media/before-after/teeth-e-1.jpeg'
                    image2='/media/before-after/teeth-e-2.jpeg'
                />
            </div>
        </div>
    )
}
