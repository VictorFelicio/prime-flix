import { Link } from 'react-router-dom';
import { useLoadMovies } from '../../hooks/useLoadMovies';
import './home.css';

export function Home() {
    const { movies, isLoading } = useLoadMovies();

    return (
        <div className="container">
            <div className="list-movies">
                {isLoading ? (
                    <p>Carregando...</p>
                ) : (
                    movies.map((movie) => {
                        return (
                            <article key={movie.id}>
                                <strong>{movie.title}</strong>
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <Link to={`/movie/${movie.id}`}>Acessar</Link>
                            </article>
                        );
                    })
                )}
            </div>
        </div>
    );
}
