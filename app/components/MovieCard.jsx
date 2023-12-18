import Link from 'next/link';
import React from 'react'

const MovieCard = ({ title, id, lang, desc, poster, release_date }) => {
    return (
        // w-1/3 
        <div className=' p-1 rounded-lg shadow-md m-1'>

            <Link href={"#"}>

                <div className=' block md:flex'>
                    {/* Poster */}
                    <img src={"https://image.tmdb.org/t/p/w500" + poster} className=' w-full md:w-auto rounded-md  md:h-60' />

                    {/* Movie Details */}
                    <div className='m-1 w-full  rounded-md bg-opacity-20 bg-blur backdrop-filter backdrop-blur-md bg-white bg-clip-padding border border-gray-300 rounded-md p-8 shadow-lg'>

                        {/* Title */}
                        <div className=' rounded-md glassmorphic-bg bg-red-400 '>
                            <h1 className=' font-bold text-lg '>{title}</h1>

                        </div>
                        <p> <strong>Overview : </strong> {desc} </p>
                        <p><strong>Language: </strong>{lang}</p>
                        <p><strong>Released On: </strong>{release_date}</p>
                    </div>


                </div>
            </Link>
            {/* MovieCard */}

        </div>
    )
}

export default MovieCard;