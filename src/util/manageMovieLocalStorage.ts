import { MovieTypes } from '../interfaces/MoviesInterface';

type ActionManage = 'SAVE' | 'REMOVE';

export function manageMovieLocalStore(
    localStorageKey: string,
    movie: MovieTypes,
    action: ActionManage,
    updateFavorites: (favorites: MovieTypes[]) => void
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
                alert('Filme já salvo');
                return;
            }
            if (movie) {
                savedMovies.push(movie);
                localStorage.setItem(
                    localStorageKey,
                    JSON.stringify(savedMovies)
                );
                alert('Filme salvo');
                return;
            }

            break;

        case 'REMOVE':
            savedMovies = savedMovies.filter((favoriteMovie) => {
                return favoriteMovie.id !== movie.id;
            });

            updateFavorites(savedMovies);
            break;

        default:
            console.log('um erro ocorreu');
            break;
    }
}
