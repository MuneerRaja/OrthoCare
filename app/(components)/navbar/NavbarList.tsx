"use client"

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext } from "react";
import { MobileNavbarContext } from "./Navbar";
import { MobileNavbarContextType } from "@/app/(libs)/@types/index.t";

function NavbarDropDown() {
    return (
        <div className="dropdown relative duration-200 py-5">
            <span className=" items-center hover:text-gray-500">SERVICES</span>
            <div className={`
            inset-x-0
            w-[15rem] h-fit
            bg-white border-t-4 border-blue-800 
            dropdown-content flex-col space-y-3
            translate-y-3 drop-shadow
            `}>
                <Link href={'/services/general'} className="px-3 py-4 hover:bg-gray-100">
                    GENERAL
                </Link>
                <Link href={'/services/cosmetic'} className="px-3 py-4 hover:bg-gray-100">
                    COSMETIC
                </Link>
                <Link href={'/services/surgical'} className="px-3 py-4 hover:bg-gray-100">
                    SURGICAL
                </Link>
            </div>
        </div>
    )
}

export function NavbarList() {
    const { openState, setOpenState } = useContext(MobileNavbarContext) as MobileNavbarContextType

    return (
        <>
            <ul className="hidden lg:flex space-x-12 justify-end items-center text-black font-medium">
                <li className="hover:text-gray-500 duration-200 py-5">
                    <Link href={'/about'} >
                        ABOUT
                    </Link>
                </li>
                <NavbarDropDown />
                <li className="hover:text-gray-500 duration-200 py-5">
                    <Link href={'/contact-us'} >
                        CONTACT
                    </Link>
                </li>
                <li className="duration-200 py-5">
                    <Link href={'/book-appointment'} className="bg-amber-300 hover:bg-amber-200 rounded-full px-4 py-3 duration-200">
                        BOOK APPOINTMENT
                    </Link>
                </li>
            </ul>
            <div className="flex lg:hidden cursor-pointer justify-self-end"
                onClick={() => setOpenState(!openState)}
            >
                <FontAwesomeIcon
                    className='text-black w-8 h-8'
                    icon={openState ? faXmark : faBars}
                />
            </div>
        </>
    )
}