import instance from "../axios";
import React, { useState, useEffect } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


// base url for images
const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      // await means when you make the request, wait for the request to come back
      // you created a based url form axios, so .get will attach the baseURL to the request
      const request = await instance.get(props.fetchUrl);

      // console log to see the STRUCTURE OF THE DATA that you are getting back
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }

    fetchData();

    // if [], run this once when the row loads and dont do it again
    // if [movies], run once and run again every single time the 'movies' change --> dependency

    // [props.fetchUrl] because we use props.fetchUrl inside useEffect, when it is an outisde variable
  }, [props.fetchUrl]);

  // to see if the request using useEffect works
//   console.log(movies);

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1
    }, 
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      // movieTrailer an npm module
      movieTrailer(movie?.name || "")
        .then( (url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch(error => console.log(error));
    }
  }

  return (
    <div className="row">
      <h3 style={{color: "white", marginLeft: "20px", letterSpacing: "1,5px"}}>{props.title}</h3>

      <div className="row__posters">
        {/* use map to do something with each of the item in the array movies  */}
        {/* 'movie.backdrop_path &&' means only render if this is not null */}
        {movies.map((movie) => (
          <img
            onClick={ () => handleClick(movie) }
            key={movie.id}
            className={`row__poster ${props.isLargeRow && "row__poster-large"}`}
            style={{display:`${(!movie.backdrop_path || !movie.poster_path) ? "none" : "block"}`}}
            src={`${base_url}${props.isLargeRow? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
