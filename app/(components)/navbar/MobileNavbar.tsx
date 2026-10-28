"use client"

import { MobileNavbarContextType } from '@/app/(libs)/@types/index.t'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { MobileNavbarContext } from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

function ServicesMobileDropDown() {
    const [showServices, setShowServices] = useState<boolean>(false)
    const { openState, setOpenState } = useContext(MobileNavbarContext) as MobileNavbarContextType

    return (
        <div className={``}>
            <button className={`
            text-left grid grid-cols-[auto_min-content] 
            w-full gap-5 items-center px-5 py-5 hover:bg-gray-200 active:bg-gray-300
            ${showServices ? 'border-none' : 'border-b border-gray-300'}
            `}
                onClick={() => {
                    setShowServices(!showServices);
                }}
            >
                SERVICES
                <div className="">
                    <FontAwesomeIcon
                        icon={showServices ? faXmark : faPlus}
                        className='w-5 h-5'
                    />
                </div>
            </button>
            {
                openState ?
                    <div className={`${showServices ? 'flex' : 'hidden'} flex-col`}>
                        <Link href={'/services/general'}
                            className='px-14 pr-5 hover:bg-gray-200 py-5 border-t border-gray-300 active:bg-gray-300'
                            onClick={() => { setOpenState(false); setShowServices(false) }}
                        >
                            GENERAL
                        </Link>
                        <Link href={'/services/cosmetic'}
                            className='px-14 py-5 hover:bg-gray-200 border-y border-gray-300 active:bg-gray-300'
                            onClick={() => { setOpenState(false); setShowServices(false) }}
                        >
                            COSMETIC
                        </Link>
                        <Link href={'/services/surgical'}
                            className='px-14 py-5 hover:bg-gray-200 border-b border-gray-300 active:bg-gray-300'
                            onClick={() => { setOpenState(false); setShowServices(false) }}
                        >
                            SURGICAL
                        </Link>
                    </div>
                    : null
            }
        </div>
    )
}

function MobileNavbarList() {
    const { openState, setOpenState } = useContext(MobileNavbarContext) as MobileNavbarContextType

    return (
        <div className={`
        absolute inset-x-0 -z-10 ${openState ? 'translate-y-0' : '-translate-y-[20rem]'}
            bg-gray-50 transition-all duration-300 drop-shadow-md font-medium
        `}>
            <div className="flex flex-col">
                <Link className='hover:bg-gray-200 active:bg-gray-300 hover:drop-shadow border-b border-gray-300 duration-200 py-5 px-5'
                    href={'/about'} onClick={() => setOpenState(false)}>
                    ABOUT
                </Link>
                <ServicesMobileDropDown />
                <Link className='hover:bg-gray-200 active:bg-gray-300 hover:drop-shadow border-b border-gray-300 duration-200 py-5 px-5'
                    href={'/contact-us'} onClick={() => setOpenState(false)}>
                    CONTACT
                </Link>
                <Link className='hover:bg-gray-200 active:bg-gray-300 hover:drop-shadow duration-200 px-5 py-5'
                    href={'/book-appointment'} onClick={() => setOpenState(false)}>
                    BOOK APPOINTMENT
                </Link>
            </div>
        </div>
    )
}

export default function MobileNavbar() {

    return (
        <div className="flex justify-end lg:hidden z-20">
            <MobileNavbarList />
        </div>
    )
}
