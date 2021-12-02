import React from 'react';

const MoviesList = (porps) => {
    return (
        <>
            {porps.movies.map((movie, index)=>(
                <img src={movie.Poster} alt="dd" />
            ))}
        </>
    )

    
}

export default MoviesList;