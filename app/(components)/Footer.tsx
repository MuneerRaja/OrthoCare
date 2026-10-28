import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

interface SocialsBtnProps {
    className?: string;
    link?: string;
    children: React.ReactNode
}

function SocialsBtn(props: SocialsBtnProps) {
    return (
        <Link
            href={props.link ? props.link : "/"}
            className={props.className ? props.className :
                "group flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:bg-amber-200 hover:text-[#163472] hover:shadow-lg"
            }
        >
            {props.children}
        </Link>
    )
}

export default function Footer() {
    return (
        <footer className="relative isolate grid h-full gap-10 overflow-hidden border-t border-white/10 bg-gradient-to-br from-[#102653] via-[#163472] to-[#102653] px-6 pb-8 pt-16 text-white shadow-xl sm:px-8 lg:px-20 xl:px-40 md:pt-20">

            <div className="polka-dots-footer pointer-events-none absolute inset-0 opacity-20" />

            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-amber-200/[0.06] blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

                <div>
                    <h3 className="mb-6 text-xl font-semibold tracking-wide text-white">
                        Socials
                        <span className="mt-3 block h-1 w-10 rounded-full bg-amber-200" />
                    </h3>

                    <div className="flex gap-3">
                        <SocialsBtn>
                            <FontAwesomeIcon className="h-5 w-5" icon={faFacebookF} />
                        </SocialsBtn>

                        <SocialsBtn>
                            <FontAwesomeIcon className="h-5 w-5" icon={faInstagram} />
                        </SocialsBtn>

                        <SocialsBtn>
                            <FontAwesomeIcon className="h-5 w-5" icon={faXTwitter} />
                        </SocialsBtn>
                    </div>
                </div>

                <div>
                    <h3 className="mb-6 text-xl font-semibold tracking-wide text-white">
                        Services
                        <span className="mt-3 block h-1 w-10 rounded-full bg-amber-200" />
                    </h3>

                    <ul className="space-y-4">
                        <li>
                            <Link href={''} className="inline-block text-sm text-blue-100/75 transition-colors duration-300 hover:text-amber-200">
                                General
                            </Link>
                        </li>
                        <li>
                            <Link href={''} className="inline-block text-sm text-blue-100/75 transition-colors duration-300 hover:text-amber-200">
                                Cosmetic
                            </Link>
                        </li>
                        <li>
                            <Link href={''} className="inline-block text-sm text-blue-100/75 transition-colors duration-300 hover:text-amber-200">
                                Surgical
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-6 text-xl font-semibold tracking-wide text-white">
                        Company
                        <span className="mt-3 block h-1 w-10 rounded-full bg-amber-200" />
                    </h3>

                    <div className="grid gap-4">
                        <p>
                            <Link href={'/'} className="inline-block text-sm text-blue-100/75 transition-colors duration-300 hover:text-amber-200">
                                Home
                            </Link>
                        </p>
                        <p>
                            <Link href={'/about'} className="inline-block text-sm text-blue-100/75 transition-colors duration-300 hover:text-amber-200">
                                About
                            </Link>
                        </p>
                        <p>
                            <Link href={'/contact-us'} className="inline-block text-sm text-blue-100/75 transition-colors duration-300 hover:text-amber-200">
                                Contact
                            </Link>
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="mb-6 text-xl font-semibold tracking-wide text-white">
                        Contact Us
                        <span className="mt-3 block h-1 w-10 rounded-full bg-amber-200" />
                    </h3>

                    <div className="space-y-5 text-sm leading-7 text-blue-100/75">
                        <p>
                            OrthoCare Dental Clinic
                            <br />
                            123 Avenue Maple, Suite 201
                            <br />
                            Montreal, QC, H3A 1W3,
                            <br />
                            Canada
                        </p>

                        <p className="transition-colors duration-300 hover:text-amber-200">
                            +1 (514) 555-7890
                        </p>

                        <p className="cursor-pointer break-words transition-colors duration-300 hover:text-amber-200">
                            info@orthocare.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative z-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-blue-100/60 md:flex-row md:items-center md:justify-between">
                <p>© OrthoCare 2026. All Rights Reserved.</p>

                <p>
                    Website made by{' '}
                    <a
                        className="font-medium text-amber-200 underline decoration-amber-200/40 underline-offset-4 transition-colors duration-300 hover:text-amber-100"
                        href="https://muneer.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Muneer Raja
                    </a>. 2025.
                </p>
            </div>
        </footer>
    )
}