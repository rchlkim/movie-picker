import React from 'react'

const Movie = ({image, genre, name}) => {
    return (
        <div className='movie'>
            <img src={image}></img>
            <p>{name}</p>
            <p>{genre}</p>
        </div>
    )
}

export default Movie
