"use client"

import Image from 'next/image'
import MovieCard from './components/MovieCard'
import { useEffect, useRef, useState } from 'react'
import MovieDetails from './components/MovieDetails';
import { useRouter, useSearchParams } from 'next/navigation';


export default function Main() {

    // States
    const [searchInput, setSearchInput] = useState("");
    const [searchResult, setSearchResult] = useState(null);

    const searchParams = useSearchParams();
    const router = useRouter()

    const searchId = searchParams.get("id");

    // ScrollEffect
    useScrollPosition();

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

        console.log(
            searchInput
        );

        fetchMovie();

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

        let data = await response.json();

        setSearchResult(data.results)


        console.log(data);
    }

    // On Press Enter for Search
    const onEnterSearch = (event) => {
        if (event.key === 'Enter') {
            onSearch(event);
        }
    }


    // View
    return (
        <main className="container mx-auto p-5 md:p-20 border border-gray-400 rounded-md m-5">

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

            {searchId && searchResult && (
                <MovieDetails
                    id={searchResult[searchId]?.id}
                    title={searchResult[searchId]?.title}
                    desc={searchResult[searchId]?.overview}
                    lang={searchResult[searchId]?.original_language}
                    poster={searchResult[searchId]?.poster_path}
                    index={searchId}
                />
            )}

            <div className="z-0">
                {searchResult?.map((movie, index) => (
                    <MovieCard
                        id={movie?.id}
                        title={movie.title}
                        desc={movie.overview}
                        lang={movie.original_language}
                        poster={movie.poster_path}
                        key={movie.id}
                        index={index}
                    />
                ))}
            </div>
        </main>
    )
}
