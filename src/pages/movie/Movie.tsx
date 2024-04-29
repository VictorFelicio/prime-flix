import { useParams } from 'react-router-dom';
import { useMovie } from '../../hooks/useMovie';
import './movie.css';
import { manageMovieLocalStore } from '../../util/manageMovieLocalStorage';
import { actionManage } from '../../enum/actionManage';
import { localStorageKey } from '../../constants/localStorageKey';

export function Movie() {
    const { id } = useParams();
    const { movie, isLoading, youtubeId } = useMovie(Number(id));

    if (isLoading) {
        return <div className="movie-info">Carregando...</div>;
    }
    if (!movie) {
        return <div className="movie-info">Nao encontrado...</div>;
    }
    return (
        <div>
            {
                <div className="movie-info">
                    <h1>{movie?.title}</h1>
                    <img
                        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                        alt={movie?.title}
                    />
                    <h3>Sinopse</h3>
                    <span>{movie?.overview}</span>
                    <strong>
                        Avaliação: {movie?.vote_average.toFixed(1)}/10
                    </strong>
                    <div className="area-buttons">
                        <button
                            onClick={() =>
                                manageMovieLocalStore(
                                    localStorageKey,
                                    movie,
                                    actionManage.SAVE
                                )
                            }
                        >
                            Salvar
                        </button>
                        <button disabled={youtubeId === null ? true : false}>
                            {youtubeId === null ? (
                                <span>Trailer não disponivel</span>
                            ) : (
                                <a
                                    href={`https://www.youtube.com/watch?v=${youtubeId}`}
                                    target="blank"
                                >
                                    Trailer
                                </a>
                            )}
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}
