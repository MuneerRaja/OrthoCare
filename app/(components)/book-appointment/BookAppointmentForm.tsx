"use client"

import { faMapLocationDot, faUserAlt, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import AppointmentReceiptModal from './AppointmentReceiptModal';

type AppointmentReason = "New patient emergency/Tooth pain" | "New patient cleaning & exam" |
    "New patient cleaning & exam (14 & under)" | "Dental implant consult" |
    "Invisalign consult"

type Provider = {
    'name': string;
    'title': string;
    'genre': "male" | "female"
}

type PaymentMethod = "I will pay myself" | "RAMQ" | "Other"

type PatientInfo = {
    'firstName': string;
    'lastName': string;
    'email': string;
    'cellphone': string;
    'dateOfBirth': string;
    'paymentMethod': PaymentMethod;
    'message'?: string;
}

type DateOfBirth = {
    'day': string;
    'month': string;
    'year': string;
}

export interface BookAppointmentInput {
    'DateOfBirth': DateOfBirth;
    'forOther': boolean;
    'newPatient': boolean;
    'reason': AppointmentReason;
    'provider': Provider;
    'patientInfo': PatientInfo;
    'termsOfService': boolean;
}

const paymentMethods: PaymentMethod[] = ["I will pay myself", "RAMQ", "Other"]

const textInputStyle = `
    px-3 py-3 rounded-lg
    bg-slate-50 border border-slate-200 w-full lg:w-auto
    text-slate-900 placeholder-slate-400
    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
    duration-300
    `

const buttonStyle = `
    border border-gray-300
    shadow-sm
    px-3 py-3 rounded-lg
    text-indigo-900 duration-300
    hover:bg-slate-100 hover:border-indigo-900/40
    `

const pressedButtonStyle = `
    border border-slate-300
    shadow-sm px-3 py-3 rounded-lg
    text-white bg-indigo-900
    hover:bg-indigo-800
`

const textareaStyle = `
    px-3 py-3 rounded-lg
    bg-slate-50 border border-slate-200 w-full lg:w-auto
    text-slate-900 placeholder-slate-400
    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
    duration-300
`

interface PageContainerProps {
    className?: string;
    page: number
    min?: number
    max: number
    children: React.ReactNode
}

function PageContainer(props: PageContainerProps) {
    if (props.min) {
        return (
            <div className={`${props.page >= props.min && props.page < props.max ? "flex" : "hidden"} 
            ${props.className}`}>
                {props.children}
            </div>
        )
    }

    return (
        <div className={`${props.page < props.max ? "flex" : "hidden"} 
        ${props.className}`}>
            {props.children}
        </div>
    )
}

function LineSeparator({ className }: { className?: string }) {
    return (
        <div className={className || `w-full h-[2px] bg-gray-300`}></div>
    )
}

const providers: Provider[] = [
    {
        'name': "Dr.Steven Zervas, DDS",
        'title': "General Dentist",
        'genre': 'male'
    },
    {
        'name': "Dr. Graham Shadwick, DDS",
        'title': "General Dentist",
        'genre': 'male'
    },
    {
        'name': "Mercedes RDH",
        'title': "Dental Hygienist",
        'genre': 'female'
    },
]

export default function BookAppointmentForm() {
    const [page, setPage] = useState<number>(0)
    const lastPage = 3
    const [showReceipt, setShowReceipt] = useState(false)
    const [input, setInput] = useState<BookAppointmentInput>({
        'patientInfo': {
            'firstName': "",
            'lastName': "",
            'dateOfBirth': '',
            'cellphone': "",
            'email': '',
            'paymentMethod': 'I will pay myself',
            'message': undefined,
        },
        'forOther': false,
        'newPatient': true,
        'reason': 'New patient emergency/Tooth pain',
        "provider": {
            'name': '',
            'title': '',
            "genre": "male"
        },
        'DateOfBirth': {
            'day': "",
            'month': "",
            "year": ""
        },
        'termsOfService': false
    })

    const reasons: AppointmentReason[] = ["New patient emergency/Tooth pain", "New patient cleaning & exam",
        "New patient cleaning & exam (14 & under)", "Dental implant consult",
        "Invisalign consult"]

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        // Explicitly declaring patientInfo in order
        // to make sure the right data will be sent
        const patientInfo: PatientInfo = {
            'firstName': input.patientInfo['firstName'],
            'lastName': input.patientInfo['lastName'],
            'email': input.patientInfo['email'],
            'cellphone': input.patientInfo['cellphone'],
            'dateOfBirth': input.patientInfo['dateOfBirth'], // CONVERT input Birth to proper Date Birth
            'paymentMethod': input.patientInfo['paymentMethod'],
            'message': input.patientInfo['message'] || ""
        }

        const data = {
            'patientInfo': patientInfo,
            "reason": input.reason,
            "provider": input.provider,
            "newPatient": input.newPatient,
            "forOther": input.forOther,
        }

        console.log(patientInfo)

        setShowReceipt(true)
    }

    function handleBookAnother() {
        setPage(0)
        setInput({
            'patientInfo': {
                'firstName': '',
                'lastName': '',
                'dateOfBirth': '',
                'cellphone': '',
                'email': '',
                'paymentMethod': 'I will pay myself',
                'message': undefined,
            },
            'forOther': false,
            'newPatient': true,
            'reason': 'New patient emergency/Tooth pain',
            'provider': {
                'name': '',
                'title': '',
                'genre': 'male',
            },
            'DateOfBirth': {
                'day': '',
                'month': '',
                'year': '',
            },
            'termsOfService': false,
        })
        setShowReceipt(false)
    }

    function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInput({
            ...input,
            [e.target.name]: e.target.checked
        })
    }

    function handleDoBInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInput({
            ...input,
            "DateOfBirth": {
                ...input['DateOfBirth'],
                [e.target.name]: e.target.value
            }
        })
    }

    function handlePatientInfoInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInput({
            ...input,
            "patientInfo": {
                ...input['patientInfo'],
                [e.target.name]: e.target.value
            }
        })
    }

    function handlePatientInfoTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setInput({
            ...input,
            "patientInfo": {
                ...input['patientInfo'],
                [e.target.name]: e.target.value
            }
        })
    }

    function handlePatientInfoSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setInput({
            ...input,
            "patientInfo": {
                ...input['patientInfo'],
                [e.target.name]: e.target.value
            }
        })
    }

    function determineProviderIconGenre({ genre }: { genre: Provider['genre'] }): string {
        if (genre === "female") {
            return "/media/dentists/women-dentist.jpg"
        } else {
            return "/media/dentists/men-dentist.jpg"
        }
    }

    function returnPage() {
        setPage(page - 1)
    }

    function forwardPage() {
        setPage(page + 1)
    }

    return (
        <>
            <form className='flex flex-col gap-8 max-w-4xl' onSubmit={handleSubmit}>
            <PageContainer page={page} max={1} className='flex-col gap-8 max-w-4xl'>
                <div className="flex flex-col gap-1">
                    <p className='-translate-y-2'>Who is this appointment for?</p>
                    <label className='text-sm font-semibold indent-3'>Patient Name (Required)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                            className={textInputStyle}
                            type="text"
                            name="firstName"
                            value={input['patientInfo']['firstName']}
                            onChange={handlePatientInfoInputChange}
                            placeholder='First Name'
                            id="firstName"
                        />
                        <input
                            className={textInputStyle}
                            type="text"
                            name="lastName"
                            value={input['patientInfo']['lastName']}
                            onChange={handlePatientInfoInputChange}
                            placeholder='Last Name'
                            id="lastName"
                        />
                    </div>
                </div>
                <div className="">
                    <label htmlFor="forOther" className='flex gap-3 items-center'>
                        <input
                            type="checkbox"
                            name="forOther"
                            checked={input.forOther}
                            onChange={handleCheckboxChange}
                            id="forOther"
                        />
                        {`I'm booking for someone else`}
                    </label>
                </div>
                <div className="flex flex-col gap-4">
                    <p className=''>{`
                    Have ${input.forOther ? 'they' : 'you'} visited us before?`
                    }</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <button type={'button'}
                            onClick={() => setInput({ ...input, 'newPatient': true })}
                            className={input.newPatient ?
                                pressedButtonStyle : buttonStyle}>
                            New Patient
                        </button>
                        <button type={'button'}
                            onClick={() => setInput({ ...input, 'newPatient': false })}
                            className={input.newPatient ? buttonStyle : pressedButtonStyle}>
                            Returning Patient
                        </button>
                    </div>
                </div>
            </PageContainer>
            <PageContainer page={page} min={1} max={2} className='flex-col'>
                <div className="flex flex-col gap-3">
                    <p className=''>What would you like to come in for?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {
                            reasons.map((reason: string, index: number) => {
                                return (
                                    <button key={`${index}-reason-btn`} type={'button'}
                                        onClick={() => setInput({ ...input, 'reason': reason as AppointmentReason })}
                                        className={`${input.reason === reason ? pressedButtonStyle : buttonStyle}`}>
                                        {reason}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </PageContainer>
            <PageContainer page={page} min={2} max={3} className='flex-col'>
                <div className="flex flex-col gap-3">
                    <p>Select one provider:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {
                            providers.map((provider: Provider, index: number) => {
                                return (
                                    <button key={`${index}-provider-btn`} type={'button'}
                                        onClick={() => setInput({ ...input, provider: provider })}
                                        className={`${input.provider === provider ?
                                            pressedButtonStyle :
                                            "border border-gray-300 shadow-sm px-3 py-3 rounded-lg text-black duration-300"
                                            }`}>
                                        <div className="flex gap-2 items-center">
                                            <Image
                                                className='rounded-full'
                                                src={`/media/dentists/${provider.genre === "female" ? "women" : "men"}-dentist.jpg`}
                                                width={50}
                                                height={50}
                                                alt={`${provider.name}-icon-image`}
                                            />
                                            <div className="flex flex-col text-left">
                                                <p className='font-semibold'>
                                                    {provider.name}
                                                </p>
                                                <p>{provider.title}</p>
                                            </div>
                                        </div>
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </PageContainer>
            <PageContainer page={page} min={3} max={4} className='flex-col'>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                        <h2 className='font-semibold text-xl pb-2'>Patient Info</h2>
                        <label className='text-sm font-semibold indent-3'>Patient Name (Required)</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <input
                                className={textInputStyle}
                                type="text"
                                name="firstName"
                                value={input['patientInfo']['firstName']}
                                onChange={handlePatientInfoInputChange}
                                placeholder='First Name'
                                id="firstName"
                            />
                            <input
                                className={textInputStyle}
                                type="text"
                                name="lastName"
                                value={input['patientInfo']['lastName']}
                                onChange={handlePatientInfoInputChange}
                                placeholder='Last Name'
                                id="lastName"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className='text-sm font-semibold indent-3'>Patient Date of Birth (Required)</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <input
                                className={textInputStyle}
                                type="text"
                                name="day"
                                value={input['DateOfBirth']['day']}
                                maxLength={2}
                                onChange={handleDoBInputChange}
                                placeholder='DD'
                                id="day"
                            />
                            <input
                                className={textInputStyle}
                                type="text"
                                name="month"
                                value={input['DateOfBirth']['month']}
                                maxLength={2}
                                onChange={handleDoBInputChange}
                                placeholder='MM'
                                id="month"
                            /><input
                                className={textInputStyle}
                                type="text"
                                name="year"
                                value={input['DateOfBirth']['year']}
                                maxLength={4}
                                onChange={handleDoBInputChange}
                                placeholder='YYYY'
                                id="year"
                            />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="forOther" className='flex gap-3 items-center'>
                            <input
                                type="checkbox"
                                name="forOther"
                                checked={input.forOther}
                                onChange={handleCheckboxChange}
                                id="forOther"
                            />
                            {`I'm booking for someone else`}
                        </label>
                    </div>
                    <LineSeparator />
                    <div className="">
                        <h2 className='font-semibold text-xl pb-2'>Patient Info</h2>
                        <div className="grid gap-1">
                            <label className='text-sm font-semibold indent-3'>Email (Required)</label>
                            <input
                                className={textInputStyle}
                                type="text"
                                name="email"
                                value={input['patientInfo']['email']}
                                onChange={handlePatientInfoInputChange}
                                placeholder='example@email.com'
                                id="email"
                            />
                        </div>
                    </div>
                    <div className="">
                        <div className="grid gap-1">
                            <label className='text-sm font-semibold indent-3'>Cell Phone Number (Required)</label>
                            <input
                                className={textInputStyle}
                                type="text"
                                name="cellphone"
                                value={input['patientInfo']['cellphone']}
                                maxLength={12}
                                onChange={handlePatientInfoInputChange}
                                placeholder='000-000-0000'
                                id="cellphone"
                            />
                        </div>
                    </div>
                    <div className="">
                        <div className="grid gap-1">
                            <label className='text-sm font-semibold indent-3'>Payment Method (Required)</label>
                            <select name='paymentMethod' id='paymentMethod' onChange={handlePatientInfoSelectChange}
                                className={textInputStyle} value={input.patientInfo.paymentMethod}
                            >
                                {
                                    paymentMethods.map((payment, index: number) => {
                                        return (
                                            <option key={`${index}-payment-option`} value={payment}>
                                                {payment}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="">
                        <div className="grid gap-1">
                            <label className='text-sm font-semibold indent-3'>Message for the Office</label>
                            <textarea id='message' name='message' className={textareaStyle}
                                onChange={handlePatientInfoTextareaChange}
                                value={input['patientInfo']['message']} placeholder='Message'>
                            </textarea>
                        </div>
                    </div>
                </div>
            </PageContainer>
            <PageContainer page={page} min={4} max={5}>
                <div className="flex flex-col gap-5 w-full">
                    <div className="flex flex-col drop-shadow-sm border border-gray-300 rounded-xl">
                        <div className="flex bg-gray-300 px-3 py-4 items-center rounded-t-xl">
                            <div className="flex flex-col w-full">
                                <h3 className='font-semibold'>Monday, Dec 11, 2025</h3>
                                <p className='text-sm'>1:30 PM MST</p>
                            </div>
                            <div className="flex justify-end">
                                <button type={'button'} onClick={() => setPage(0)}
                                    className='text-blue-800 hover:underline'
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 lg:gap-5 bg-gray-100 px-3 py-4 items-center rounded-b-xl">
                            <div className="flex w-full">
                                <div className="flex gap-3 items-center w-full">
                                    <Image
                                        className='w-10 h-10 rounded-full'
                                        src={determineProviderIconGenre({ 'genre': input.provider.genre as Provider['genre'] })}
                                        width={100}
                                        height={100}
                                        alt={`final-dentist-provider-image`}
                                    />
                                    <p className='font-semibold'>{input.provider.name}</p>
                                </div>
                                <div className="flex justify-end">
                                    <button type={'button'} onClick={() => setPage(2)}
                                        className='text-blue-800 hover:underline'
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                            <div className="flex w-full pl-1">
                                <div className="flex gap-3 items-center w-full">
                                    <FontAwesomeIcon icon={faUserAlt} className='w-5 h-5 text-black' />
                                    <p>{`${input.patientInfo.firstName} ${input.patientInfo.lastName}`}</p>
                                </div>
                                <div className="flex justify-end">
                                    <button type={'button'} onClick={() => setPage(3)}
                                        className='text-blue-800 hover:underline'
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                            <div className="flex w-full pl-1">
                                <div className="flex gap-3 items-center w-[25rem]">
                                    <FontAwesomeIcon icon={faMapLocationDot} className='w-5 h-5 text-black' />
                                    <p>{`OrthoCare Dental Clinic 123 Avenue Maple, Suite 201 Montreal, QC, H3A 1W3, Canada`}</p>
                                </div>
                            </div>
                            <div className="flex w-full pl-1">
                                <div className="flex gap-3 items-center w-full">
                                    <FontAwesomeIcon icon={faWallet} className='w-5 h-5 text-black' />
                                    <p>{input.patientInfo.paymentMethod}</p>
                                </div>
                                <div className="flex justify-end">
                                    <button type={'button'} onClick={() => setPage(3)}
                                        className='text-blue-800 hover:underline'
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                            {
                                input.patientInfo.message ?
                                    <div className="flex flex-col gap-2 w-full">
                                        <div className="flex">
                                            <h3 className='w-full font-semibold text-sm'>Message for the Office</h3>
                                            <div className="flex justify-end">
                                                <button type={'button'} onClick={() => setPage(3)}
                                                    className='text-blue-800 hover:underline'
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                        <p className='bg-white border broder-gray-300 px-3 py-3 rounded-lg'>
                                            {input.patientInfo.message}
                                        </p>
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="termsOfService" className='flex gap-3 items-center'>
                            <input
                                type="checkbox"
                                name="termsOfService"
                                checked={input.termsOfService}
                                onChange={handleCheckboxChange}
                                id="termsOfService"
                            />
                            <span>I agree to the <Link href={'/'} target={'_blank'} className='text-blue-700 hover:underline'>terms of service</Link></span>
                        </label>
                    </div>
                </div>
            </PageContainer>
            <div className="flex items-center gap-3 w-full">
                <div className={`${page > 0 ? 'flex' : 'hidden'}`}>
                    <button type={'button'} onClick={() => returnPage()}
                        className="w-[8rem] md:w-[13rem] border border-slate-200 bg-white text-slate-700 font-semibold py-3 px-5 rounded-lg shadow-sm hover:bg-slate-50 hover:text-indigo-900 hover:border-indigo-900/40 transition-all duration-300"
                    >
                        Back
                    </button>
                </div>
                <div className={`${page > lastPage ? "hidden" : "flex"} justify-end w-full`}>
                    <button type={'button'} onClick={() => forwardPage()}
                        className="w-[8rem] md:w-[13rem] font-semibold bg-indigo-900 text-white py-3 px-5 rounded-lg shadow-sm hover:bg-indigo-800 transition-all duration-300"
                    >
                        Next
                    </button>
                </div>
                <div className={`${page > lastPage ? "flex" : "hidden"} justify-end w-full`}>
                    <button type={'submit'} disabled={input.termsOfService ? false : true}
                        className="w-[8rem] md:w-[13rem] font-semibold bg-indigo-900 text-white py-3 px-5 rounded-lg shadow-sm hover:bg-indigo-800 disabled:bg-indigo-900/50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                        Book Appointment
                    </button>
                </div>
            </div>
            </form>
            <AppointmentReceiptModal
                isOpen={showReceipt}
                input={input}
                onClose={() => setShowReceipt(false)}
                onBookAnother={handleBookAnother}
            />
        </>
    )
}
