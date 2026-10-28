import React from 'react'

interface ContainerProps {
    className?: string
    children: React.ReactNode
}

export default function Container(props: ContainerProps) {
    return (
        <div className={props.className || "px-normalx"}>
            {props.children}
        </div>
    )
}