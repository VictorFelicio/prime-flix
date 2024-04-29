import { MovieTypes } from '../../../interfaces/MoviesInterface';
import api from '../api';

export async function getMovie(id: number): Promise<MovieTypes | null> {
    try {
        const response = await api.get(`/movie/${id}`, {
            params: {
                api_key: import.meta.env.VITE_API_KEY_TMDB,
                language: 'pt-BR',
                movie_id: id,
            },
        });

        return response.data;
    } catch (error) {
        console.log('Erro ao buscar filme');
        return null;
    }
}
