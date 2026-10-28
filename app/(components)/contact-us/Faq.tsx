import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

/**
 * FAQ accordion for the contact page.
 * - Uses native <details>/<summary> so it works without JavaScript and is
 *   fully keyboard accessible; the plus icon rotates via CSS (.faq-icon).
 * - Answers only restate information already published elsewhere on the
 *   site (address, hours, phone, service categories, online booking) —
 *   no new medical claims.
 */

const faqs = [
    {
        question: 'Where is OrthoCare located?',
        answer: 'You can find us in the downtown Montreal area, on the 2nd floor of the Triad Office Park building — 123 Avenue Maple, Suite 201, Montreal, QC, H3A 1W3, Canada. Plenty of free parking is available.',
    },
    {
        question: 'What are your office hours?',
        answer: 'Our office hours are Monday to Thursday, 7AM to 3PM.',
    },
    {
        question: 'How can I book an appointment?',
        answer: 'The easiest way is to book online through our Book Appointment page, where you can view available appointments. You can also reach us by phone at +1 (514) 555-7890 or send us a message using the form on this page.',
    },
    {
        question: 'What kinds of dental services do you offer?',
        answer: 'Our services are grouped into three categories — general dentistry, cosmetic dentistry, and surgical dentistry. Browse the Services pages to see the full list of treatments in each category.',
    },
    {
        question: 'How can I get in touch with the team?',
        answer: 'You can call us at +1 (514) 555-7890, email info@orthocare.com, or use the contact form on this page and we will get back to you as soon as we can.',
    },
]

export default function Faq() {
    return (
        <>
            <section aria-labelledby="faq-heading" className='flex flex-col gap-6 pt-10'>
                <div className='flex flex-col gap-3'>
                    <h2 id="faq-heading" className='font-merry font-semibold text-3xl md:text-4xl'>Frequently Asked Questions</h2>
                    <p className='text-lg text-gray-700 max-w-3xl leading-relaxed'>
                        Quick answers about visiting OrthoCare. If you can&apos;t find what you&apos;re looking for, just ask — we&apos;re happy to help.
                    </p>
                </div>
                <div className='flex flex-col gap-4 max-w-4xl'>
                    {faqs.map((faq) => (
                        <details key={faq.question} className='faq-item px-6 py-5'>
                            <summary className='flex items-center justify-between gap-4 font-semibold text-lg text-brand-deep'>
                                {faq.question}
                                <FontAwesomeIcon icon={faPlus} className='faq-icon h-4 w-4 shrink-0 text-brand-teal' />
                            </summary>
                            <p className='faq-answer pt-4 text-gray-700 leading-relaxed'>
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </section>
        </>
    )
}