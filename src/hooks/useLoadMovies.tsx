import { useEffect, useState } from 'react';
import { Movie } from '../interfaces/MoviesInterface';
import { getMovies } from '../services/api/api-calls/get-movies';

export function useLoadMovies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const moviesData = await getMovies();
                setMovies(moviesData);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                //TODO colocar um tratamento de erro da requisição da lista de filmes
                console.log("Erro ao buscar filmes", error);
                
            }
        }

        fetchMovies();
    }, []);

    return { movies, isLoading };
}
