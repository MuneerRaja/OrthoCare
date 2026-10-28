import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='grid m-auto gap-5 pt-[7rem] pb-[23rem] px-mobilex lg:px-[10rem] xl:px-[20rem] max-w-7xl'>
            <div className="flex flex-col gap-3 rounded-lg px-2 md:px-10 py-20 md:py-12 border border-gray-300 drop-shadow-sm text-center">
                <h2 className='font-semibold text-3xl'>We are sorry!</h2>
                <p className='text-lg'>{`Unfortunately, OrthoCare is not a real dental clinic, and thus,
                    your book appointment couldn't be processed.`}
                </p>
            </div>
            <Link href={'/'}>
                <button className='w-full text-lg font-medium px-3 py-4 bg-amber-300 hover:bg-amber-200 duration-200 rounded-lg'>
                    Return to homepage
                </button>
            </Link>
        </div>
    )
}
