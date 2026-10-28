"use client"

import React, { useState } from 'react'
import BookAppointmentForm from '../(components)/book-appointment/BookAppointmentForm'

export default function BookAppointmentPage() {

    return (
        <div className='flex flex-col gap-8 pt-[7rem] pb-[24rem] px-mobilex lg:px-[10rem] xl:px-[20rem]'>
            <div className='flex flex-col items-start gap-3 md:gap-5 max-w-3xl'>
                <span className='inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-indigo-700'>
                    <span className='relative -top-[px] flex h-2 w-2 rounded-full bg-indigo-600'></span>
                    Book online
                </span>
                <h1 className='font-merry font-semibold text-4xl md:text-5xl tracking-tight text-slate-900'>
                    Request a Consultation
                </h1>
                <p className='text-slate-600 text-lg md:text-xl max-w-xl leading-relaxed'>
                    Select the reason for your visit, choose your preferred provider, and confirm your booking. You will receive a downloadable receipt in PDF, PNG or JPG format once your appointment is booked.
                </p>
            </div>
            <BookAppointmentForm />
        </div>
    )
}
