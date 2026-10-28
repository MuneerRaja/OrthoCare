"use client"

import { faCircleCheck, faCircleExclamation, faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

type ContactFormInput = {
    'name': string;
    'email': string;
    'subject': string;
    'message': string;
}

type ContactFormField = keyof ContactFormInput

type ContactFormErrors = Partial<Record<ContactFormField, string>>

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const initialInput: ContactFormInput = {
    'name': '',
    'email': '',
    'subject': '',
    'message': '',
}

const labelStyle = 'font-medium text-sm text-gray-800'

const textInputStyle = `
    px-3 py-3 rounded-lg 
    bg-gray-100 w-full
    outline-none focus:outline-blue-800
    duration-300 outline-offset-0
    disabled:cursor-not-allowed
    `

const textInputErrorStyle = `
    px-3 py-3 rounded-lg 
    bg-red-50 w-full border border-red-500
    outline-none focus:outline-red-500
    duration-300 outline-offset-0
    disabled:cursor-not-allowed
    `

function validateInput(input: ContactFormInput): ContactFormErrors {
    const errors: ContactFormErrors = {}

    if (!input.name.trim()) {
        errors.name = "Please enter your name."
    } else if (input.name.trim().length < 2) {
        errors.name = "Your name must be at least 2 characters long."
    }

    if (!input.email.trim()) {
        errors.email = "Please enter your email address."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) {
        errors.email = "Please enter a valid email address, e.g. name@example.com."
    }

    if (!input.subject.trim()) {
        errors.subject = "Please enter a subject for your message."
    } else if (input.subject.trim().length < 2) {
        errors.subject = "The subject must be at least 2 characters long."
    }

    if (!input.message.trim()) {
        errors.message = "Please enter your message."
    } else if (input.message.trim().length < 10) {
        errors.message = "Your message must be at least 10 characters long."
    }

    return errors
}

// OrthoCare is not a real dental clinic and this website has no backend,
// so the form does not actually send anything anywhere. This helper only
// simulates a short request in order to display the loading and
// success states of the form, the same way the book appointment flow
// handles its (demo) submission.
function simulateFormSubmission(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 1500))
}

export default function ContactForm() {
    const [input, setInput] = useState<ContactFormInput>(initialInput)
    const [errors, setErrors] = useState<ContactFormErrors>({})
    const [status, setStatus] = useState<SubmitStatus>('idle')

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target

        setInput({
            ...input,
            [name]: value
        })

        // Clear the field's error message while the user is fixing it
        if (errors[name as ContactFormField]) {
            setErrors({
                ...errors,
                [name]: undefined
            })
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        const validationErrors = validateInput(input)
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length > 0) {
            setStatus('idle')
            return
        }

        setStatus('loading')

        try {
            await simulateFormSubmission()

            // Demo only: the message is logged instead of being sent anywhere.
            console.log('Contact form submitted (demo only - message was not actually sent):', input)

            setStatus('success')
            setInput(initialInput)
        } catch {
            setStatus('error')
        }
    }

    return (
        <div className='flex flex-col gap-6 rounded-2xl border border-gray-300 bg-white px-6 py-8 md:px-10 md:py-10 drop-shadow-sm'>
            <div className='flex flex-col gap-2'>
                <h2 className='font-merry font-semibold text-3xl'>Send Us a Message</h2>
                <p className='leading-relaxed text-gray-700'>
                    Have a question about our services or want to plan your visit? Fill in the form below and we will get back to you as soon as possible.
                </p>
            </div>

            {
                status === 'success' ?
                    <div role="status" className='flex gap-3 rounded-lg border border-green-300 bg-green-50 px-4 py-4 text-green-800'>
                        <FontAwesomeIcon className='h-5 w-5 mt-0.5 shrink-0' icon={faCircleCheck} />
                        <div className='flex flex-col gap-1 text-sm leading-6'>
                            <p className='font-semibold'>Your message was processed locally.</p>
                            <p>
                                {`Thank you for reaching out! Please note that OrthoCare is not a real dental clinic and this website has no backend, so your message was not actually sent anywhere.`}
                            </p>
                        </div>
                    </div>
                    : null
            }

            {
                status === 'error' ?
                    <div role="alert" className='flex gap-3 rounded-lg border border-red-300 bg-red-50 px-4 py-4 text-red-800'>
                        <FontAwesomeIcon className='h-5 w-5 mt-0.5 shrink-0' icon={faCircleExclamation} />
                        <p className='text-sm leading-6'>
                            Something went wrong while processing your message. Please try again.
                        </p>
                    </div>
                    : null
            }

            <form onSubmit={handleSubmit} noValidate className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='name' className={labelStyle}>Name</label>
                    <input
                        className={errors.name ? textInputErrorStyle : textInputStyle}
                        type='text'
                        name='name'
                        value={input.name}
                        onChange={handleInputChange}
                        placeholder='Your full name'
                        id='name'
                        disabled={status === 'loading'}
                        aria-invalid={errors.name ? true : false}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {
                        errors.name ?
                            <p id='name-error' className='text-sm text-red-600'>{errors.name}</p>
                            : null
                    }
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='email' className={labelStyle}>Email</label>
                    <input
                        className={errors.email ? textInputErrorStyle : textInputStyle}
                        type='email'
                        name='email'
                        value={input.email}
                        onChange={handleInputChange}
                        placeholder='name@example.com'
                        id='email'
                        disabled={status === 'loading'}
                        aria-invalid={errors.email ? true : false}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {
                        errors.email ?
                            <p id='email-error' className='text-sm text-red-600'>{errors.email}</p>
                            : null
                    }
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='subject' className={labelStyle}>Subject</label>
                    <input
                        className={errors.subject ? textInputErrorStyle : textInputStyle}
                        type='text'
                        name='subject'
                        value={input.subject}
                        onChange={handleInputChange}
                        placeholder='What is your message about?'
                        id='subject'
                        disabled={status === 'loading'}
                        aria-invalid={errors.subject ? true : false}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    {
                        errors.subject ?
                            <p id='subject-error' className='text-sm text-red-600'>{errors.subject}</p>
                            : null
                    }
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='message' className={labelStyle}>Message</label>
                    <textarea
                        className={errors.message ? `${textInputErrorStyle} resize-y min-h-[9rem]` : `${textInputStyle} resize-y min-h-[9rem]`}
                        name='message'
                        value={input.message}
                        onChange={handleInputChange}
                        placeholder='Write your message here...'
                        id='message'
                        rows={6}
                        disabled={status === 'loading'}
                        aria-invalid={errors.message ? true : false}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {
                        errors.message ?
                            <p id='message-error' className='text-sm text-red-600'>{errors.message}</p>
                            : null
                    }
                </div>

                <div className='flex flex-col gap-3'>
                    <button type={'submit'} disabled={status === 'loading'}
                        className='flex items-center justify-center gap-3 w-full md:w-auto font-semibold bg-blue-800 text-white hover:bg-blue-900 duration-300 py-3 px-5 rounded-lg shadow-sm disabled:bg-blue-800/50 disabled:cursor-not-allowed'
                    >
                        {
                            status === 'loading' ?
                                <>
                                    <FontAwesomeIcon className='h-4 w-4 animate-spin' icon={faSpinner} />
                                    Sending...
                                </>
                                :
                                <>
                                    <FontAwesomeIcon className='h-4 w-4' icon={faPaperPlane} />
                                    Send Message
                                </>
                        }
                    </button>

                    <p className='text-sm leading-6 text-gray-500'>
                        Note: OrthoCare is not a real dental clinic. This form is a frontend-only demo &mdash; it validates your input in your browser and does not send any data.
                    </p>
                </div>
            </form>
        </div>
    )
}
