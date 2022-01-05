import React, {useState, useEffect} from 'react'
//import {data} from '../data/data'
import Movie from './Movie'
import './Catalog.css'

const Catalog = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/movies")
        .then(response => response.json())
        .then(json => setData(json))
    })

    return (
        <div>
            <h1>Movie Catalog</h1>
            <div className="movies">
                {data.map((movie) => (
                    <Movie image={movie.img} name={movie.name} genre={movie.genre}/>
                ))}
            </div>
        </div>
    )
}

export default Catalog
