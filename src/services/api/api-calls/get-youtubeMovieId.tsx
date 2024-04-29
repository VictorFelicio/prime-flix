import api from "../api";

export async function getMovieYoutubeId(id: number): Promise<string | null> {
    try {
        const response = await api.get(`/movie/${id}/videos`, {
            params: {
                api_key: import.meta.env.VITE_API_KEY_TMDB,
                language: 'pt-BR',
            },
        });      
        
        return response.data.results[0].key;
    } catch (error) {
        console.log(error);
        return null;
    }
}