import { toast } from 'react-toastify';
import { MovieTypes } from '../interfaces/MoviesInterface';

type ActionManage = 'SAVE' | 'REMOVE';

export function manageMovieLocalStore(
    localStorageKey: string,
    movie: MovieTypes,
    action: ActionManage,
    updateFavorites?: (favorites: MovieTypes[]) => void
) {
    const localMovies = localStorage.getItem(localStorageKey);

    let savedMovies: MovieTypes[] = [];

    if (localMovies) {
        savedMovies = JSON.parse(localMovies);
    }

    let hasMovieSaved: boolean;

    switch (action) {
        case 'SAVE':
            hasMovieSaved = savedMovies.some(
                (savedMovieLocal: MovieTypes) =>
                    savedMovieLocal.id === movie?.id
            );

            if (hasMovieSaved) {
                toast.warn('Esse filme já está salvo em seus favoritos!');
                return;
            }
            if (movie) {
                savedMovies.push(movie);
                localStorage.setItem(
                    localStorageKey,
                    JSON.stringify(savedMovies)
                );
                toast.success('Filme salvo com sucesso em seus favoritos!');
                return;
            }

            break;

        case 'REMOVE':
            savedMovies = savedMovies.filter((favoriteMovie) => {
                return favoriteMovie.id !== movie.id;
            });
            if (updateFavorites) {
                updateFavorites(savedMovies);
            }
            toast.info('Filme removido com sucesso dos seus favoritos!');
            break;

        default:
            console.log('um erro ocorreu');
            break;
    }
}
