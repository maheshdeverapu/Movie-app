import React,{useState} from "react"
import MovieBox from "./boxMovie";
import {useEffect} from "react"
import "./home.css";
const Home =()=>{
    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=95c631fcaebbe10af3d1b33687f7e838";
    // const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=95c631fcaebbe10af3d1b33687f7e838&query"
    const [movies,setMovies] = useState([]);
    const [query,setQuery] = useState("");
    useEffect(()=>{
        fetch((API_URL)).then(res=>res.json()).then((data)=>{
            setMovies(data.results)
            console.log(data)
        })
    },[])
    // const expt = ["ine","dsa"]
    const searchMovie = async(e)=>{
        e.preventDefault();
        console.log("searching")
        try{
            const url = `https://api.themoviedb.org/3/search/movie?api_key=95c631fcaebbe10af3d1b33687f7e838&query=${query}`
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovies(data.results);

        }
        catch(e){
            console.log(e)
        }
    }
    const changeHolder = (value)=>{
        console.log()
        setQuery(value)
    }
    return (
        <div>
            <form>
                <input type="text"  onChange={(e)=>{changeHolder(e.target.value)}} placeholder={"Movie search"}></input>
                <button onClick={searchMovie} type={"submit"}>search</button>
                </form>
                <div className="card_content">
            {movies.map((movieReq)=>
             
             
                    <MovieBox key={movieReq.id} {...movieReq} searchMovie={searchMovie} changeHolder={changeHolder} query={query} setQuery={setQuery}/>)}
               </div>
           
        </div>
    )
}
export default Home;