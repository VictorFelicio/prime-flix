import { useParams } from 'react-router-dom';
import { useMovie } from '../../hooks/useMovie';
import './movie.css';

export function Movie() {
    const { id } = useParams();
    const { movie, isLoading } = useMovie(Number(id));

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
                        <button>Salvar</button>
                        <button>
                            <a href="">Trailer</a>
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}
