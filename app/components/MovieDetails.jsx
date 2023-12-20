'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'



const MovieDetails = ({ title, id, lang, desc, poster, release_date, index }) => {


    const [isVisible, setIsVisible] = useState(true);
    const router = useRouter();


    const onClose = () => {
        setIsVisible(false);

        // Changing the URL when on close without reloading
        router.push('/');
    };


    // return null to render nothing
    if (!isVisible) {
        return null;
    }

    return (
        <div className=' transition-all p-5 overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-50 justify-center items-center w-full md:max-w-md  max-h-full '>

            <button type="button"
                onClick={onClose}
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-400 dark:hover:text-white" data-modal-hide="default-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div className='  rounded-lg shadow-md m-1 min-h-full'>

                <div className=' block md:flex flex-col'>
                    {/* Poster */}
                    <img src={"https://image.tmdb.org/t/p/w500" + poster} className=' md:w-auto rounded-md w-2/4  ' />

                    {/* Movie Details */}
                    <div className='m-1 w-full h-full  rounded-md bg-opacity-20 bg-blur backdrop-filter backdrop-blur-md bg-white bg-clip-padding border border-gray-300 rounded-md p-8 shadow-lg'>

                        {/* Title */}
                        <div className=' rounded-md glassmorphic-bg bg-red-400 '>
                            <h1 className=' font-bold text-lg '>{title}</h1>

                        </div>
                        <p> <strong>Overview : </strong> {desc} </p>
                        <p><strong>Language: </strong>{lang}</p>
                        <p><strong>Released On: </strong>{release_date}</p>
                    </div>


                </div>

                {/* MovieCard */}

            </div>
        </div>
        // </div >


    )
}

export default MovieDetails