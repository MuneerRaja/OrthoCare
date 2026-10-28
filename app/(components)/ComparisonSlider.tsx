"use client"

import React, { useState } from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

interface ComparisonSliderProps {
    image1: string;
    image2: string
}

export default function ComparisonSlider(props: ComparisonSliderProps) {
    const [range, setRange] = useState<number>(1)

    return (
        <div className='' >
            <ReactCompareSlider
                itemOne={
                    <ReactCompareSliderImage
                        src={props.image1}
                    />
                }
                itemTwo={
                    <ReactCompareSliderImage
                        src={props.image2}
                    />
                }
            />

        </div>
    )
}
