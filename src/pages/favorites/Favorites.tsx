import { localStorageKey } from '../../constants/localStorageKey';
import { actionManage } from '../../enum/actionManage';
import { useFavorites } from '../../hooks/useFavorites';
import { MovieTypes } from '../../interfaces/MoviesInterface';
import { manageMovieLocalStore } from '../../util/manageMovieLocalStorage';
import './favorites.css';
import { Link } from 'react-router-dom';

export default function Favorites() {
    const { favorites,updateFavorites } = useFavorites();

    return (
        <div className="favorites-movies">
            <h1>Meus filmes</h1>
            {favorites ? (
                <ul>
                    {favorites?.map((movie: MovieTypes) => (
                        <li key={movie.id}>
                            <span>{movie.title}</span>
                            <div>
                                <Link to={`/movie/${movie.id}`}>Detalhes</Link>
                                <button
                                    onClick={() =>
                                        manageMovieLocalStore(
                                            localStorageKey,
                                            movie,
                                            actionManage.REMOVE,
                                            updateFavorites
                                        )
                                    }
                                >
                                    Excluir
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhum filme salvo</p>
            )}
        </div>
    );
}
