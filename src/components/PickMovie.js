import React, {useState, useEffect} from 'react'
import Movie from './Movie';
import {data} from '../data/data'
import './PickMovie.css'

const PickMovie = () => {
    const [picked, setPicked] = useState(false);
    const [randMovie, setRandMovie] = useState({})
    const [data, setData] = useState([])
   
    useEffect(() => {
        fetch("http://localhost:8080/api/movies")
        .then(response => response.json())
        .then(json => setData(json))
    })

    const pickButton = () => {
        const idx = Math.floor(Math.random() * data.length)
        const random = data[idx]
        setRandMovie(random)
        setPicked(true)
    }


    const pickAgain = () => {
        setPicked(false);
    }

    return (
        <div>
            <h1>Pick a Movie</h1>
            {picked && 
            <div>
                <Movie image={randMovie.img} genre={randMovie.genre} name={randMovie.name}/>
                <button className="pickButton" onClick={pickAgain} >Pick Again</button>
            </div>
            }
            {!picked && <button onClick={pickButton}>Click to Pick</button>}

        </div>
    )
}

export default PickMovie
