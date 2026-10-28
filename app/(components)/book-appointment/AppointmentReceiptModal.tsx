"use client"

import { faCalendarDays, faCircleCheck, faCommentDots, faEnvelope, faFileImage, faFilePdf, faHouse, faMapLocationDot, faPhone, faPrint, faSpinner, faStethoscope, faTooth, faUserAlt, faWallet, faXmark } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import type { BookAppointmentInput } from './BookAppointmentForm';

// Static demo values — kept identical to the ones shown on the review step.
const APPOINTMENT_DATE = 'Monday, Dec 11, 2025'
const APPOINTMENT_TIME = '1:30 PM MST'
const CLINIC_NAME = 'OrthoCare Dental Clinic'
const CLINIC_ADDRESS = '123 Avenue Maple, Suite 201, Montreal, QC, H3A 1W3, Canada'
const CLINIC_PHONE = '+1 (514) 555-7890'
const CLINIC_EMAIL = 'info@orthocare.com'

interface AppointmentReceiptModalProps {
    isOpen: boolean;
    input: BookAppointmentInput;
    onClose: () => void;
    onBookAnother: () => void;
}

function generateConfirmationCode(): string {
    const random = Math.floor(100000 + Math.random() * 900000)
    return `OC-${new Date().getFullYear()}-${random}`
}

function providerPhotoPath(input: BookAppointmentInput): string {
    return input.provider.genre === 'female'
        ? '/media/dentists/women-dentist.jpg'
        : '/media/dentists/men-dentist.jpg'
}

function ReceiptDetailRow({ icon, label, children }: {
    icon: IconDefinition;
    label: string;
    children: React.ReactNode
}) {
    return (
        <div className='flex items-start gap-3'>
            <span className='mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-800/10'>
                <FontAwesomeIcon icon={icon} className='h-3.5 w-3.5 text-blue-800' />
            </span>
            <div className='flex min-w-0 flex-col'>
                <span className='text-[11px] font-semibold uppercase tracking-wider text-gray-400'>{label}</span>
                <span className='break-words text-sm font-medium text-gray-800'>{children}</span>
            </div>
        </div>
    )
}

export default function AppointmentReceiptModal({ isOpen, input, onClose, onBookAnother }: AppointmentReceiptModalProps) {
    const receiptRef = useRef<HTMLDivElement>(null)
    const [confirmationCode, setConfirmationCode] = useState<string>('OC-2025-000000')
    const [exporting, setExporting] = useState<'png' | 'jpg' | 'pdf' | 'print' | null>(null)
    const [justDownloaded, setJustDownloaded] = useState<'png' | 'jpg' | 'pdf' | null>(null)

    useEffect(() => {
        if (!isOpen) return

        setConfirmationCode(generateConfirmationCode())
        setJustDownloaded(null)

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKeyDown)
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = previousOverflow
        }
    }, [isOpen, onClose])

    async function captureReceipt(): Promise<string> {
        if (!receiptRef.current) throw new Error('Receipt element not found')
        const { toPng } = await import('html-to-image')
        return toPng(receiptRef.current, {
            pixelRatio: 2,
            backgroundColor: '#ffffff',
            cacheBust: true,
        })
    }

    async function handleDownloadPng() {
        if (exporting) return
        try {
            setExporting('png')
            const dataUrl = await captureReceipt()
            const link = document.createElement('a')
            link.download = `OrthoCare-Appointment-${confirmationCode}.png`
            link.href = dataUrl
            link.click()
            setJustDownloaded('png')
            window.setTimeout(() => setJustDownloaded(null), 2500)
        } catch (error) {
            console.error('Failed to generate the PNG receipt:', error)
        } finally {
            setExporting(null)
        }
    }

    async function handleDownloadPdf() {
        if (exporting) return
        try {
            setExporting('pdf')
            const dataUrl = await captureReceipt()
            const { jsPDF } = await import('jspdf')
            const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

            const pageWidth = pdf.internal.pageSize.getWidth()
            const pageHeight = pdf.internal.pageSize.getHeight()
            const margin = 8
            const maxWidth = pageWidth - margin * 2
            const maxHeight = pageHeight - margin * 2
            const node = receiptRef.current
            const ratio = node && node.offsetHeight > 0 ? node.offsetHeight / node.offsetWidth : 1.35

            let imgWidth = maxWidth
            let imgHeight = maxWidth * ratio
            if (imgHeight > maxHeight) {
                imgHeight = maxHeight
                imgWidth = maxHeight / ratio
            }

            pdf.addImage(dataUrl, 'PNG', (pageWidth - imgWidth) / 2, margin, imgWidth, imgHeight)
            pdf.save(`OrthoCare-Appointment-${confirmationCode}.pdf`)
            setJustDownloaded('pdf')
            window.setTimeout(() => setJustDownloaded(null), 2500)
        } catch (error) {
            console.error('Failed to generate the PDF receipt:', error)
        } finally {
            setExporting(null)
        }
    }

    async function handleDownloadJpg() {
        if (exporting) return
        try {
            setExporting('jpg')
            if (!receiptRef.current) throw new Error('Receipt element not found')
            const { toJpeg } = await import('html-to-image')
            const dataUrl = await toJpeg(receiptRef.current, {
                pixelRatio: 2,
                backgroundColor: '#ffffff',
                cacheBust: true,
                quality: 0.95,
            })
            const link = document.createElement('a')
            link.download = `OrthoCare-Appointment-${confirmationCode}.jpg`
            link.href = dataUrl
            link.click()
            setJustDownloaded('jpg')
            window.setTimeout(() => setJustDownloaded(null), 2500)
        } catch (error) {
            console.error('Failed to generate the JPG receipt:', error)
        } finally {
            setExporting(null)
        }
    }

    async function handlePrint() {
        if (exporting) return
        try {
            setExporting('print')
            const dataUrl = await captureReceipt()
            const printWindow = window.open('', '_blank', 'width=900,height=1200')
            if (!printWindow) return
            printWindow.document.write(`<!DOCTYPE html>
<html>
    <head>
        <title>OrthoCare Appointment ${confirmationCode}</title>
        <style>
            body { margin: 0; display: flex; justify-content: center; background: #f3f4f6; }
            img { max-width: 100%; height: auto; margin: 16px 0; box-shadow: 0 1px 3px rgba(0,0,0,.15); }
        </style>
    </head>
    <body>
        <img src="${dataUrl}" onload="window.focus(); window.print();" />
    </body>
</html>`)
            printWindow.document.close()
        } catch (error) {
            console.error('Failed to print the receipt:', error)
        } finally {
            setExporting(null)
        }
    }

    if (!isOpen) return null

    const fullName = `${input.patientInfo.firstName} ${input.patientInfo.lastName}`.trim() || 'Patient'
    const issuedDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

    const secondaryButtonStyle = 'flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-blue-800 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-blue-800/50 hover:bg-blue-800/[0.04] active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-800/20 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0'
    const primaryButtonStyle = 'btn-sheen flex cursor-pointer items-center gap-2 rounded-lg bg-blue-800 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-800/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-blue-900 hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-800/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0'

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4' role='dialog' aria-modal='true' aria-labelledby='receipt-modal-title'>
            {/* Backdrop */}
            <div className='absolute inset-0 animate-fade-in bg-black/50 backdrop-blur-sm' onClick={onClose}></div>

            {/* Modal */}
            <div className='relative z-10 flex max-h-[92vh] w-full max-w-2xl animate-pop-in flex-col overflow-hidden rounded-2xl bg-white shadow-2xl'>
                {/* Modal header */}
                <div className='flex items-center justify-between bg-gradient-to-r from-blue-800 to-blue-900 px-6 py-4'>
                    <div className='flex items-center gap-3'>
                        <span className='flex h-10 w-10 items-center justify-center rounded-full bg-white/15'>
                            <FontAwesomeIcon icon={faCircleCheck} className='h-5 w-5 text-amber-300' />
                        </span>
                        <div>
                            <h2 id='receipt-modal-title' className='text-lg font-semibold text-white'>Appointment Booked!</h2>
                            <p className='text-sm text-blue-100'>Your confirmation receipt is ready below</p>
                        </div>
                    </div>
                    <button type='button' onClick={onClose} aria-label='Close receipt'
                        className='rounded-full p-2 text-white/80 transition-all duration-300 hover:bg-white/15 hover:text-white active:scale-90'>
                        <FontAwesomeIcon icon={faXmark} className='h-4 w-4' />
                    </button>
                </div>

                {/* Scrollable receipt preview */}
                <div className='overflow-y-auto bg-gray-100 p-4 md:p-6'>
                    <div ref={receiptRef} className='mx-auto w-full max-w-[640px] overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-gray-200'>
                        {/* Receipt header */}
                        <div className='flex items-center justify-between bg-gradient-to-r from-blue-800 to-blue-900 px-8 py-6'>
                            <div className='flex items-center gap-3'>
                                <span className='flex h-11 w-11 items-center justify-center rounded-full bg-white/15'>
                                    <FontAwesomeIcon icon={faTooth} className='h-5 w-5 text-white' />
                                </span>
                                <div>
                                    <p className='text-xl font-semibold leading-tight text-white'>OrthoCare</p>
                                    <p className='text-xs uppercase tracking-widest text-blue-200'>Dental Clinic</p>
                                </div>
                            </div>
                            <div className='text-right'>
                                <p className='text-sm font-semibold uppercase tracking-wider text-amber-300'>Appointment Receipt</p>
                                <p className='text-xs text-blue-200'>Please keep this for your records</p>
                            </div>
                        </div>

                        {/* Confirmation strip */}
                        <div className='flex flex-wrap items-center justify-between gap-2 border-b border-blue-800/10 bg-blue-800/[0.06] px-8 py-3'>
                            <p className='text-sm'>
                                <span className='font-semibold text-blue-900'>Confirmation #:</span>{' '}
                                <span className='font-mono font-semibold text-blue-800'>{confirmationCode}</span>
                            </p>
                            <p className='text-sm text-gray-500'>{`Issued: ${issuedDate}`}</p>
                        </div>

                        {/* Receipt body */}
                        <div className='flex flex-col gap-6 px-8 py-6'>
                            <div className='flex flex-col gap-4'>
                                <h3 className='border-b border-gray-200 pb-2 text-sm font-bold uppercase tracking-wider text-blue-900'>Appointment Details</h3>
                                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                                    <ReceiptDetailRow icon={faCalendarDays} label='Date & Time'>
                                        <span className='block'>{APPOINTMENT_DATE}</span>
                                        <span className='block text-gray-500'>{APPOINTMENT_TIME}</span>
                                    </ReceiptDetailRow>
                                    <ReceiptDetailRow icon={faStethoscope} label='Reason for Visit'>
                                        {input.reason}
                                    </ReceiptDetailRow>
                                    <ReceiptDetailRow icon={faUserAlt} label='Provider'>
                                        {input.provider.name ?
                                            (
                                                <span className='flex items-center gap-2'>
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img src={providerPhotoPath(input)} alt='provider' className='h-7 w-7 rounded-full object-cover ring-1 ring-blue-800/20' />
                                                    <span>
                                                        <span className='block'>{input.provider.name}</span>
                                                        <span className='block text-gray-500'>{input.provider.title}</span>
                                                    </span>
                                                </span>
                                            )
                                            : 'Not specified'}
                                    </ReceiptDetailRow>
                                    <ReceiptDetailRow icon={faWallet} label='Payment Method'>
                                        {input.patientInfo.paymentMethod}
                                    </ReceiptDetailRow>
                                </div>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <h3 className='border-b border-gray-200 pb-2 text-sm font-bold uppercase tracking-wider text-blue-900'>Patient Information</h3>
                                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                                    <ReceiptDetailRow icon={faUserAlt} label='Full Name'>
                                        {fullName}
                                    </ReceiptDetailRow>
                                    <ReceiptDetailRow icon={faPhone} label='Cell Phone'>
                                        {input.patientInfo.cellphone || '—'}
                                    </ReceiptDetailRow>
                                    <ReceiptDetailRow icon={faEnvelope} label='Email'>
                                        {input.patientInfo.email || '—'}
                                    </ReceiptDetailRow>
                                    <ReceiptDetailRow icon={faMapLocationDot} label='Clinic Address'>
                                        <span className='block'>{CLINIC_NAME}</span>
                                        <span className='block text-gray-500'>{CLINIC_ADDRESS}</span>
                                    </ReceiptDetailRow>
                                </div>
                            </div>

                            {input.patientInfo.message ?
                                (
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='border-b border-gray-200 pb-2 text-sm font-bold uppercase tracking-wider text-blue-900'>Message for the Office</h3>
                                        <p className='rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-600 ring-1 ring-gray-200'>{input.patientInfo.message}</p>
                                    </div>
                                )
                                : null}
                        </div>

                        {/* Receipt footer */}
                        <div className='flex flex-col gap-1 border-t border-gray-200 bg-gray-50 px-8 py-4 text-center'>
                            <p className='text-xs text-gray-500'>{`Please arrive 15 minutes early with a valid health card. For questions, call ${CLINIC_PHONE} or email ${CLINIC_EMAIL}.`}</p>
                            <p className='text-[11px] text-gray-400'>{`${CLINIC_NAME} — demo clinic. This receipt is a sample and does not represent a real medical appointment.`}</p>
                        </div>
                    </div>
                </div>

                {/* Action bar */}
                <div className='flex flex-col gap-3 border-t border-gray-200 bg-white px-6 py-4'>
                    <div className='flex flex-wrap items-center justify-center gap-3'>
                        <button type='button' onClick={handleDownloadPng} disabled={exporting !== null} className={primaryButtonStyle}>
                            {exporting === 'png' ?
                                <FontAwesomeIcon icon={faSpinner} className='h-4 w-4 animate-spin' />
                                : justDownloaded === 'png' ?
                                    <FontAwesomeIcon icon={faCircleCheck} className='h-4 w-4 text-amber-300' />
                                    : <FontAwesomeIcon icon={faFileImage} className='h-4 w-4' />
                            }
                            {justDownloaded === 'png' ? 'Downloaded!' : 'Download PNG'}
                        </button>
                        <button type='button' onClick={handleDownloadJpg} disabled={exporting !== null} className={primaryButtonStyle}>
                            {exporting === 'jpg' ?
                                <FontAwesomeIcon icon={faSpinner} className='h-4 w-4 animate-spin' />
                                : justDownloaded === 'jpg' ?
                                    <FontAwesomeIcon icon={faCircleCheck} className='h-4 w-4 text-amber-300' />
                                    : <FontAwesomeIcon icon={faFileImage} className='h-4 w-4' />
                            }
                            {justDownloaded === 'jpg' ? 'Downloaded!' : 'Download JPG'}
                        </button>
                        <button type='button' onClick={handleDownloadPdf} disabled={exporting !== null} className={primaryButtonStyle}>
                            {exporting === 'pdf' ?
                                <FontAwesomeIcon icon={faSpinner} className='h-4 w-4 animate-spin' />
                                : justDownloaded === 'pdf' ?
                                    <FontAwesomeIcon icon={faCircleCheck} className='h-4 w-4 text-amber-300' />
                                    : <FontAwesomeIcon icon={faFilePdf} className='h-4 w-4' />
                            }
                            {justDownloaded === 'pdf' ? 'Downloaded!' : 'Download PDF'}
                        </button>
                        <button type='button' onClick={handlePrint} disabled={exporting !== null} className={secondaryButtonStyle}>
                            {exporting === 'print' ?
                                <FontAwesomeIcon icon={faSpinner} className='h-4 w-4 animate-spin' />
                                : <FontAwesomeIcon icon={faPrint} className='h-4 w-4' />
                            }
                            Print
                        </button>
                    </div>
                    <div className='flex flex-wrap items-center justify-center gap-3'>
                        <a href='/' className={secondaryButtonStyle}>
                            <FontAwesomeIcon icon={faHouse} className='h-3.5 w-3.5' />
                            Return to homepage
                        </a>
                        <button type='button' onClick={onBookAnother} className={secondaryButtonStyle}>
                            <FontAwesomeIcon icon={faCommentDots} className='h-3.5 w-3.5' />
                            Book another appointment
                        </button>
                        <button type='button' onClick={onClose} className={secondaryButtonStyle}>
                            <FontAwesomeIcon icon={faXmark} className='h-3.5 w-3.5' />
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}



