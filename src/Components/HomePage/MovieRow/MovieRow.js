import './MovieRowStyle.css'

function MovieRow({ movieRow, title }) {
    return (
        <div className="movie-list-display">
            <div className='movie-list-display-row1-title'>
                <h2>{title}</h2>
            </div>
            <div className="movie-list-display-row1">
                {movieRow.map((movie, ind) => {
                    return (
                        <div className='movie-list-display-poster' key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt='' width='200px' height='300px' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MovieRow