// useScrollPosition.js

import { useEffect } from 'react';

const useScrollPosition = () => {
    useEffect(() => {
        // Store the current scroll position when the component mounts
        const scrollPosition = window.scrollY;

        // Return a cleanup function to restore the scroll position when the component unmounts
        return () => {
            window.scrollTo(0, scrollPosition);
        };
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts
};

export default useScrollPosition;
