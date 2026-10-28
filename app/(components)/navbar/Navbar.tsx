"use client"

import Link from 'next/link'
import React, { createContext, useContext, useState } from 'react'
import MobileNavbar from './MobileNavbar'
import { NavbarList } from './NavbarList'
import { Logo } from './Logo'
import { MobileNavbarContextType } from '@/app/(libs)/@types/index.t'

export const MobileNavbarContext = createContext<MobileNavbarContextType | null>(null)

export default function Navbar() {
    const [openState, setOpenState] = useState<boolean>(false)

    return (
        <nav className='fixed w-full z-20'>
            <MobileNavbarContext.Provider value={{ openState, setOpenState }}>
                <div className="grid grid-cols-2 w-full z-30 items-center bg-white px-mobilex lg:px-[5rem] py-5 lg:py-0 border drop-shadow-sm">
                    <Link href={'/'} className='flex z-30'
                        onClick={() => setOpenState(false)}
                    >
                        <Logo />
                    </Link>
                    <NavbarList />
                </div>
                <MobileNavbar />
            </MobileNavbarContext.Provider>
        </nav>
    )
}
