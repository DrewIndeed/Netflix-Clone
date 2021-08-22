import instance from "../axios";
import React, { useState, useEffect } from "react";
import "./Row.css";

// base url for images
const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="row">
      <h2 style={{color: "white"}}>{props.title}</h2>

      <div className="row__posters">
        {/* use map to do something with each of the item in the array movies  */}
        {/* 'movie.backdrop_path &&' means only render if this is not null */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${props.isLargeRow && "row__poster-large"}`}
            src={`${base_url}${props.isLargeRow? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
