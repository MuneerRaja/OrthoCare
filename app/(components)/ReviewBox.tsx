import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

interface ReviewBoxProps {
    title: string;
    review: string;
    author: string;
    rating?: number;
}

function RenderRatingStars({ rating }: { rating: number }) {
    // There is no need for a half a star system
    // so if rating is equal to 3.5 for example,
    // the 3.5 would be rounded to the nearest number.
    // In this case, 4. So, 4 stars would show.

    const stars: React.ReactNode[] = []

    for (let i = 0; i < rating; i++) {
        stars.push(<FontAwesomeIcon key={`${i}-rating-star`} icon={faStar} />)
    }

    return (
        stars.map((stars) => stars)
    )
}

export default function ReviewBox(props: ReviewBoxProps) {
    return (
        <div className="flex flex-col gap-5 bg-white border border-gray-200 shadow-lg p-10 max-w-full lg:max-w-md">
            {
                props.rating ?
                    <div className="flex gap-3 text-yellow-500">
                        <RenderRatingStars rating={props.rating} />
                    </div>
                    :
                    <div className="flex gap-3 text-yellow-500">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
            }
            <h3 className='text-xl'>{props.title}</h3>
            <p className='text-lg'>{`"${props.review}"`}</p>
            <p>{props.author}</p>
        </div>
    )
}
