import useLoadMovies from '../../hooks/useLoadMovies';

export default function Home() {
    const { movies, isLoading } = useLoadMovies();

    return (
        <>
            <h1>Home</h1>
            {isLoading ? (
                <p>Carregando...</p>
            ) : (
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.overview}>
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                            <p>
                                <b>{movie.vote_average}</b>
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
