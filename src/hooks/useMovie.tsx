import { useEffect, useState } from 'react';
import { MovieTypes } from '../interfaces/MoviesInterface';
import { getMovie } from '../services/api/api-calls/get-movie';
import { getMovieYoutubeId } from '../services/api/api-calls/get-youtubeMovieId';

export function useMovie(id: number) {
    const [movie, setMovie] = useState<MovieTypes | null>();
    const [isLoading, setIsLoading] = useState(true);
    const [youtubeId, setYoutubeId] = useState<string | null>('');

    useEffect(() => {
        async function fetchMovie() {
            try {
                const movieApi = await getMovie(id);
                const movieId = await getMovieYoutubeId(id);
                setMovie(movieApi);
                setYoutubeId(movieId);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log('Erro ao buscar filme', error);
            }
        }

        fetchMovie();
    }, [id]);

    return { movie, isLoading, youtubeId };
}
