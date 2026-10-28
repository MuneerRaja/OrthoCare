import React from 'react'

interface FadeBtnProps {
    children: React.ReactNode
}

export default function FadeBtn(props: FadeBtnProps) {
    return (
        <button className='bg-amber-300 hover:bg-amber-200 top-0 hover:-translate-y-3 text-black text-lg py-4 px-8 transition-all duration-500'>
            {props.children}
        </button>
    )
}
