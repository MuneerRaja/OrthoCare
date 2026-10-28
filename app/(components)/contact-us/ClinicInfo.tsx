import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faClock, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface ClinicInfoRowProps {
    icon: IconDefinition
    title: string
    children: React.ReactNode
}

function ClinicInfoRow(props: ClinicInfoRowProps) {
    return (
        <div className='flex gap-4'>
            <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-800 text-white shadow-sm'>
                <FontAwesomeIcon className='h-5 w-5' icon={props.icon} />
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='font-semibold text-gray-900'>{props.title}</h3>
                <div className='leading-relaxed text-gray-700'>{props.children}</div>
            </div>
        </div>
    )
}

export default function ClinicInfo() {
    return (
        <aside className='relative overflow-hidden rounded-2xl bg-gray-100 px-6 py-8 md:px-10 md:py-10 drop-shadow-sm'>
            <div className='small-polka-dots pointer-events-none absolute inset-0' />

            <div className='relative z-10 flex flex-col gap-8'>
                <div className='flex flex-col gap-3'>
                    <h2 className='font-merry font-semibold text-3xl'>Clinic Information</h2>
                    <p className='leading-relaxed'>
                        {`We're conveniently located in the downtown Montreal area, on the 2nd floor of the Triad Office Park building. Plenty of free parking is available.`}
                    </p>
                </div>

                <ClinicInfoRow icon={faLocationDot} title='Address'>
                    <p>OrthoCare Dental Clinic</p>
                    <p>123 Avenue Maple, Suite 201</p>
                    <p>Montreal, QC, H3A 1W3, Canada</p>
                </ClinicInfoRow>

                <ClinicInfoRow icon={faPhone} title='Phone'>
                    <a href={'tel:+15145557890'} className='inline-block hover:text-blue-800 duration-300'>
                        +1 (514) 555-7890
                    </a>
                </ClinicInfoRow>

                <ClinicInfoRow icon={faEnvelope} title='Email'>
                    <a href={'mailto:info@orthocare.com'} className='inline-block break-words hover:text-blue-800 duration-300'>
                        info@orthocare.com
                    </a>
                </ClinicInfoRow>

                <ClinicInfoRow icon={faClock} title='Office Hours'>
                    <p>Monday-Thursday: 7AM-3PM</p>
                </ClinicInfoRow>
            </div>
        </aside>
    )
}
