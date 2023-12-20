'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ChipItem from './ChipItem';


const MovieDetails = ({ title, id, lang, desc, poster, release_date, index, maxIndex }) => {

    // states
    const [isVisible, setIsVisible] = useState(true);
    const router = useRouter();


    const onClose = () => {
        setIsVisible(false);

        // Changing the URL when on close button clicked without reloading
        router.push('/', { scroll: false });
    };


    // return null to render nothing
    if (!isVisible) {
        return null;
    }


    // to handle on previous navigation
    const onPrevious = () => {

        if (index > 0) {
            index--;
        }

        router.push(`?id=${index}`, { scroll: false })
    }

    // to handle on next navigation
    const onNext = () => {

        if (index < maxIndex - 1) {
            index++;
        }

        router.push(`?id=${index}`, { scroll: false })
    }


    return (
        <div
            className='shadow-lg shadow-black bg-slate-100 transition-all p-5 overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 z-50 justify-center items-center w-full md:max-w-sm  max-h-full   min-h-screen'
        >

            {/* Close Button */}
            <div className=''>

                <button type="button"
                    onClick={onClose}
                    class="text-gray-900 p-2 shadow-md font-bold bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-400 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>

                {/* Divider */}
                <div className=' my-2 h-1 w-full  bg-gray-300 rounded-full'>
                </div>
            </div>

            <div className=' flex  flex-col justify-center justify-items-center justify-self-center'>

                {/* Poster */}

                {
                    poster ?

                        <img src={process.env.NEXT_PUBLIC_IMAGE_HOST_URL + poster} className=' md:w-auto rounded-md w-2/4  flex-1 justify-center' />
                        :
                        <img src={"/images/not-found.png"} className=' md:w-auto rounded-md w-2/4  flex-1 justify-center' />

                }

                {/* Movie Details */}
                <div className='w-full h-full rounded-md  p-2'>

                    {/* Movie Title */}
                    <div className=' '>

                        <h1 className=' font-bold text-lg mt-2'>{title}</h1>

                    </div>


                    {/* Divider */}
                    <div className=' my-2 h-1 w-full  bg-gray-300 rounded-full'>
                    </div>


                    {/* Movie Overview */}
                    <div className='my-2' >
                        <p className=' font-semibold'>Overview : </p>
                        <p className='font-light'> {desc || "Not Available"} </p>

                    </div>

                    {/* Movie Language */}
                    <div className='py-2'>
                        <span className=' font-semibold'>Language: </span>
                        <ChipItem data={lang} />
                    </div>

                    {/* Movie Release Date */}
                    <div className='py-2 '>
                        <span className=' font-semibold'>Released On:  </span>
                        <ChipItem data={release_date} />
                    </div>
                </div>
            </div>

            {/* Navigation - Next & Previuos */}

            <div className="flex justify-between mt-4">

                {/* Preious Navigation */}
                <button
                    onClick={onPrevious}
                    disabled={index == 0}
                    className={`text-blue-500 hover:text-blue-700 font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-full ${index == 0 ? 'disabled:cursor-not-allowed disabled:opacity-50 disabled:text-red-500' : ''}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>

                {/* Next Navigation */}
                <button
                    onClick={onNext}
                    disabled={index == maxIndex - 1}
                    className={`text-blue-500 hover:text-blue-700 font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-full ${index == maxIndex - 1 ? 'disabled:cursor-not-allowed disabled:opacity-50 disabled:text-red-500' : ''}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>

            </div>
        </div>

    )
}

export default MovieDetails