"use client"

import Image from 'next/image'

import { useEffect, useRef, useState } from 'react'

import { useRouter, useSearchParams } from 'next/navigation';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';


export default function Main() {

    // States
    const [searchInput, setSearchInput] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [searched, setSearched] = useState("");


    const searchParams = useSearchParams();
    const searchId = searchParams.get("id");

    useEffect(() => {

        setSearchResult([

            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [],
                "id": 975419,
                "original_language": "en",
                "original_title": "Marvel",
                "overview": "The quintessential student film of 1969.",
                "popularity": 2.653,
                "poster_path": "/p6XFjLX7XDnAMCczOBCevVaZpFv.jpg",
                "release_date": "1969-05-20",
                "title": "Marvel",
                "video": false,
                "vote_average": 6.5,
                "vote_count": 25
            },
            {
                "adult": false,
                "backdrop_path": "/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg",
                "genre_ids": [
                    878,
                    12,
                    28
                ],
                "id": 609681,
                "original_language": "en",
                "original_title": "The Marvels",
                "overview": "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
                "popularity": 401.516,
                "poster_path": "/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg",
                "release_date": "2023-11-08",
                "title": "The Marvels",
                "video": false,
                "vote_average": 6.502,
                "vote_count": 702
            },
            {
                "adult": false,
                "backdrop_path": "/bQl46uhGPTu9jnIRE9Ip2xOMc9M.jpg",
                "genre_ids": [
                    10751,
                    12,
                    16,
                    14,
                    878
                ],
                "id": 382190,
                "original_language": "ja",
                "original_title": "ポケモン・ザ・ムービーXY&Z ボルケニオンと機巧のマギアナ",
                "overview": "Ash meets the Mythical Pokémon Volcanion when it crashes down from the sky, creating a cloud of dust—and a mysterious force binds the two of them together! Volcanion despises humans and tries to get away, but it’s forced to drag Ash along as it continues its rescue mission. They arrive in a city of cogs and gears, where a corrupt official has stolen the ultimate invention: the Artificial Pokémon Magearna, created 500 years ago. He plans to use its mysterious power to take control of this mechanical kingdom! Can Ash and Volcanion work together to rescue Magearna? One of the greatest battles in Pokémon history is about to unfold!",
                "popularity": 35.155,
                "poster_path": "/j9TIzeMxNknVrBvgxzLqhIhxml4.jpg",
                "release_date": "2016-07-16",
                "title": "Pokémon the Movie: Volcanion and the Mechanical Marvel",
                "video": false,
                "vote_average": 6.7,
                "vote_count": 165
            }
        ])


    }, [])

    // Handling Search
    const onSearch = (event) => {
        event.preventDefault();
        setLoading(true);
        setSearched(searchInput)
        fetchMovie();
        setLoading(false);
    }

    // Fetching Movies
    const fetchMovie = async () => {
        let headersList = {
            "Accept": "*/*"
        }

        let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=783932c629416160c930effc71e0547b`, {
            method: "GET",
            headers: headersList
        });

        if (!response.ok) {
            setError(true);
        } else {


            let data = await response.json();

            setSearchResult(data.results)
            // console.log(data);
        }
    }

    // On Press Enter for Search
    const onEnterSearch = (event) => {
        if (event.key === 'Enter') {
            onSearch(event);
        }
    }

    return (
        <main className="container mx-auto rounded-md m-5">

            <div className="flex">
                <input
                    onChange={(e) => {
                        e.preventDefault();
                        setSearchInput(e.target.value);
                    }}
                    type="search"
                    className="flex-1 p-3 w-full border border-gray-400 rounded-md focus:outline-none focus:border-blue-500 focus:border-2"
                    placeholder="Search Movie"
                    onKeyDown={onEnterSearch}
                />
                <span></span>
            </div>


            {/* Sidebar */}
            {searchId && searchResult && (
                <MovieDetails
                    id={searchResult[searchId]?.id}
                    title={searchResult[searchId]?.title}
                    desc={searchResult[searchId]?.overview}
                    lang={searchResult[searchId]?.original_language}
                    poster={searchResult[searchId]?.poster_path}
                    index={searchId}
                    release_date={searchResult[searchId]?.release_date}
                />
            )}

            {/* Searched Text */}
            {
                searched && searchResult &&

                <div className='py-2'>
                    <p>Search results for <strong>

                        {searched}
                    </strong>
                    </p>
                </div>

            }
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'">

                {searchResult?.map((movie, index) => (
                    <MovieCard
                        id={movie?.id}
                        title={movie?.title}
                        desc={movie?.overview}
                        lang={movie?.original_language}
                        poster={movie?.poster_path}
                        key={movie?.id}
                        index={index}
                        release_date={movie?.release_date}
                    />
                ))}
            </div>
        </main>
    )
}
