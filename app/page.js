"use client"

import Image from 'next/image'
import MovieCard from './components/MovieCard'
import { useEffect, useRef, useState } from 'react'
import MovieDetails from './components/MovieDetails';
import { useRouter, useSearchParams } from 'next/navigation';
import useScrollPosition from './components/hooks/useScrollPosition';
import Main from './components/Main';

export default function Home() {

  // View
  return (
    <Main />
  )
}
