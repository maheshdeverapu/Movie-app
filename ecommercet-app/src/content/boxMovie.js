import React from "react";
import "./boxMovie.css";
const MovieBox =({title,poster_path,vote_average,release_date,overview, changeHolder,searchMovie,setQuery,query})=>{
    const API_IMG="https://image.tmdb.org/t/p/w500"
    return(
        <div className="card">
            <div>
                
            </div>
            <h1>{title}</h1>
            <img src={API_IMG+poster_path}></img>
            <p>{overview}</p>

        </div>
    )
}
export default MovieBox