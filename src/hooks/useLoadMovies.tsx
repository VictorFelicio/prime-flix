import { useEffect, useState } from 'react';
import { Movies } from '../interfaces/MoviesInterface';
import { getMovies } from '../services/api/api-calls/get-movies';

export function useLoadMovies() {
    const [movies, setMovies] = useState<Movies[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const moviesData = await getMovies();
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
