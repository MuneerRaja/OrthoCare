import Image from 'next/image'
import React from 'react'

export const Pricing = () => {
    return (
        <div className='bg-gray-200 px-[2.5rem] lg:normalx py-20 grid justify-center'>
            <div className="bg-gray-100 grid grid-cols-1 lg:grid-cols-2 border-blue-900 border-2 rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-md">
                <div className="flex flex-col gap-5 text-blue-900 p-[2.5rem] md:p-[5rem] text-xl">
                    <div className="relative">
                        <Image
                            className='w-[3.5rem] -translate-x-3'
                            src={'/svgs/price-tag.svg'}
                            width={100}
                            height={100}
                            alt='price tag'
                            style={{ height: 'auto' }}
                        />
                    </div>
                    <span>TRANSPARENT PRICING</span>
                    <h3 className='font-merry font-semibold text-4xl'>No Surprises</h3>
                    <p>{`Our team believes in accessible dental care. We offer straightforward pricing, clear estimates, and an unprecedented dental warranty. Keep up with your routine 6-month checkups and if something needs fixing, we'll handle it at no cost to you.`}</p>
                </div>
                <div className="relative text-white bg-blue-900 p-[2.5rem] md:p-[5rem] text-xl flex flex-col gap-5 shadow-md">
                    <div className="block md:absolute md:bottom-0">
                        <Image
                            className='w-[3.5rem] md:w-[22rem] md:translate-y-[17rem] lg:translate-y-[10rem] -translate-x-3 md:translate-x-20'
                            src={'/svgs/pricing-insurance.svg'}
                            width={100}
                            height={100}
                            alt='pricing-section-image'
                            style={{ height: 'auto' }}
                        />
                    </div>
                    <h3 className='font-merry font-semibold text-2xl'>Insurance</h3>
                    <p>Our office is in-network with various insurance providers and bills all other providers. Our team will explain how your specific dental benefits apply to the cost of treatment.</p>
                </div>
            </div>
        </div>
    )
}
