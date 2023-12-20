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
                        <img src={`https://image.tmdb.org/t/p/w500${poster}`} className='w-full h-80 object-cover' alt={title} />
                    ) : (
                        <img src='/images/not-found.png' className='w-full h-60 object-contain' alt={`Poster not available for ${title}`} />
                    )}

                    {/* Movie Details */}
                    {/* Title */}
                    <div className='p-4'>
                        <h1 className='font-bold text-lg whitespace-normal mb-2'>{title}</h1>
                        <ChipItem data={lang} />
                        <ChipItem data={release_date} />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;
