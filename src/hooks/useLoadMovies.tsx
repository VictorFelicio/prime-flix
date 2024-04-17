import { useEffect, useState } from 'react';
import { Movies } from '../interfaces/MoviesInterface';
import loadMovies from '../services/api/api-calls/load-movies';

export default function useLoadMovies() {
    const [movies, setMovies] = useState<Movies[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const moviesData = await loadMovies();
                setMovies(moviesData);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        }

        fetchMovies();
    }, []);

    return { movies, isLoading };
}
