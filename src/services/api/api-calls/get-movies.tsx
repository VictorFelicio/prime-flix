import api from '../api';

export async function getMovies() {
    try {
        const response = await api.get('/movie/now_playing', {
            params: {
                api_key: import.meta.env.VITE_API_KEY_TMDB,
                language: 'pt-BR',
                page: 1,
            },
        });
        return response.data.results.slice(0, 10);
    } catch (error) {
        console.error('Erro ao carregar os filmes', error);
        throw error;
    }
}
