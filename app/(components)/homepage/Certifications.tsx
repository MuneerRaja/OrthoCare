import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Certifications() {
    return (
        <div className="grid bg-white py-12 px-5">
            <div className="flex flex-col md:flex-row items-center justify-center gap-20">
                <Link className='w-fit' href={'https://ohdq.com/'} target={'_blank'}>
                    <Image
                        className='w-full h-[70px]'
                        src={'/svgs/OHDQ-Logo.svg'}
                        width={250}
                        height={250}
                        alt='OHDQ-Logo'
                        style={{ height: 'auto' }}
                    />
                </Link>
                <Link className="w-fit" href={'https://www.acdq.qc.ca/en/'} target={'_blank'}>
                    <Image
                        className='w-full h-[70px]'
                        src={'/svgs/ACQ-Logo.svg'}
                        width={250}
                        height={250}
                        alt='ACQ-Logo'
                        style={{ height: 'auto' }}
                    />
                </Link>
                <Link className="w-fit" href={'https://www.odq.qc.ca/'} target={'_blank'}>
                    <Image
                        className='w-full h-[70px]'
                        src={'/svgs/ODQ-Logo.svg'}
                        width={250}
                        height={250}
                        alt='ODQ-Logo'
                        style={{ height: 'auto' }}
                    />
                </Link>
            </div>
        </div>
    )
}
