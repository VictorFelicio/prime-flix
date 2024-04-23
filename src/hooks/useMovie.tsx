import { useEffect, useState } from 'react';
import { Movie } from '../interfaces/MoviesInterface';
import { getMovie } from '../services/api/api-calls/get-movie';

export function useMovie(id: number) {
    const [movie, setMovie] = useState<Movie | null>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchMovie() {
            try {
                const movieApi = await getMovie(id);
                setMovie(movieApi);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log('Erro ao buscar filme', error);
            }
        }

        fetchMovie();
        return () => {};
    }, [id]);

    return { movie, isLoading };
}
