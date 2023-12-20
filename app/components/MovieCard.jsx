import Link from 'next/link';
import React from 'react';
import ChipItem from './ChipItem';

const MovieCard = ({ title, id, lang, desc, poster, release_date, index }) => {
    return (
        <div className='max-w-xs rounded-lg overflow-hidden border border-gray-300 m-1'>
            <Link href={`?id=${index}`} scroll={false}>
                <div className='block'>

                    {/* Poster */}
                    {poster ? (
                        <img src={`${process.env.NEXT_PUBLIC_IMAGE_HOST_URL}${poster}`} className='w-full h-80 object-cover' alt={title} />
                    ) : (
                        <img src='/images/not-found.png' className='w-full h-60 object-contain' alt={`Poster not available for ${title}`} />
                    )}

                    {/* Movie Details */}
                    {/* Title */}
                    <div className='p-2'>
                        <h1 className=' font-medium text-lg mb-2 whitespace-nowrap overflow-clip'>{title}</h1>

                        {/* Movie Languages */}
                        <ChipItem data={lang} />

                        {/* Movie Release Date */}
                        {
                            release_date &&
                            <ChipItem data={release_date} />
                        }
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;
