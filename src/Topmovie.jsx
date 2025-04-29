import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
import './Topmovie.css'
import { Link } from "react-router-dom"

let Api_key = '&api_key=191c99c3810edc08259371af1c40a35c'
let base_url = "https://api.themoviedb.org/3"
let img_path = "https://image.tmdb.org/t/p/w200"
let url = base_url + "/movie/top_rated?language=en-US&page=1" + Api_key;

const Topmovie=()=>{
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url)
           .then(response => {
              console.log(response.data.results)
  
              setData(response.data.results)
           }).catch(error => {
              console.log(error)
           })
     }, [])



    return(
        <>
        <div className="container">
            <h1 className="topmovie-heading"> <b> Top Movies </b> <i className="fa-solid fa-chevron-right"></i>  </h1>
            <div className="row">
               {
                  data.map((movie_data) => {
                     return (
                        <div key={movie_data.id} className="movies-box">
                           <img src={img_path + movie_data.poster_path} alt="" />
                           <div className="movie-info">
                              <b> {movie_data.title} </b>
                              <span> {movie_data.release_date} </span>
                              <span> Language:{movie_data.original_language}.. </span>
                              <span>  Rating: &#9733;{movie_data.vote_average} <b> </b> </span>
                              <button className="trailer">
                              <Link to={`/movies/trailer/${movie_data.id}`}> <i className="fa-solid fa-play"></i> Trailer</Link>
                              </button>
                           </div>
                        </div>
                     )
                  })

               }
            </div>
            
            </div>
        
        
        
        </>
    )
}
export default Topmovie;


/*  --url 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' \ */
/*   --url 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1' \ */
/*   --url 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1' \ */
/*   --url 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' \ */
/*    --url 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'  */