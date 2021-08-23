import React, { useState, useEffect } from "react";
import instance from "../axios";
import requests from "../requests";
import "./Banner.css";

// base url for images
const base_url = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      // here you only want one for the banner
      // so you gonna random it header
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  // print to see got what
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(
                    "${base_url}${movie?.backdrop_path}"
                )`,
        backgroundPosition: "center center",
      }}
    >
      {/* title */}
      {/* div with 2 buttons */}
      {/* description */}
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>

        <div className="banner__buttons">
          <button className="banner__button">
            <img
              className="play__button"
              alt="play button"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjE2My44NjFweCIgaGVpZ2h0PSIxNjMuODYxcHgiIHZpZXdCb3g9IjAgMCAxNjMuODYxIDE2My44NjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE2My44NjEgMTYzLjg2MTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTM0Ljg1NywzLjYxM0MyMC4wODQtNC44NjEsOC4xMDcsMi4wODEsOC4xMDcsMTkuMTA2djEyNS42MzdjMCwxNy4wNDIsMTEuOTc3LDIzLjk3NSwyNi43NSwxNS41MDlMMTQ0LjY3LDk3LjI3NQ0KCQljMTQuNzc4LTguNDc3LDE0Ljc3OC0yMi4yMTEsMC0zMC42ODZMMzQuODU3LDMuNjEzeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
            />
            <span>Play</span>
          </button>
          <button className="banner__button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 172 172"
              style={{fill: "white"}}
            >
              <g transform="translate(4.73,4.73) scale(0.945,0.945)">
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="none"
                  stroke-linecap="butt"
                  stroke-linejoin="none"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g
                    fill="#ffffff"
                    stroke="#ffffff"
                    stroke-width="10"
                    stroke-linejoin="round"
                  >
                    <path d="M165.12,86c0,43.65603 -35.46397,79.12 -79.12,79.12c-43.65603,0 -79.12,-35.46397 -79.12,-79.12c0,-43.65603 35.46397,-79.12 79.12,-79.12c43.65603,0 79.12,35.46397 79.12,79.12zM13.76,86c0,39.93779 32.30221,72.24 72.24,72.24c39.93779,0 72.24,-32.30221 72.24,-72.24c0,-39.93779 -32.30221,-72.24 -72.24,-72.24c-39.93779,0 -72.24,32.30221 -72.24,72.24zM96.32,48.16c0,5.69958 -4.62042,10.32 -10.32,10.32c-5.69958,0 -10.32,-4.62042 -10.32,-10.32c0,-5.69958 4.62042,-10.32 10.32,-10.32c5.69958,0 10.32,4.62042 10.32,10.32zM92.88,72.24v51.6h6.88v6.88h-27.52v-6.88h6.88v-44.72h-6.88v-6.88z"></path>
                  </g>
                  <path
                    d="M0,172v-172h172v172z"
                    fill="none"
                    stroke="none"
                    stroke-width="1"
                    stroke-linejoin="miter"
                  ></path>
                  <g
                    fill="#ffffff"
                    stroke="none"
                    stroke-width="1"
                    stroke-linejoin="miter"
                  >
                    <path d="M86,6.88c-43.65603,0 -79.12,35.46397 -79.12,79.12c0,43.65603 35.46397,79.12 79.12,79.12c43.65603,0 79.12,-35.46397 79.12,-79.12c0,-43.65603 -35.46397,-79.12 -79.12,-79.12zM86,13.76c39.93779,0 72.24,32.30221 72.24,72.24c0,39.93779 -32.30221,72.24 -72.24,72.24c-39.93779,0 -72.24,-32.30221 -72.24,-72.24c0,-39.93779 32.30221,-72.24 72.24,-72.24zM86,37.84c-5.69958,0 -10.32,4.62042 -10.32,10.32c0,5.69958 4.62042,10.32 10.32,10.32c5.69958,0 10.32,-4.62042 10.32,-10.32c0,-5.69958 -4.62042,-10.32 -10.32,-10.32zM72.24,72.24v6.88h3.44h3.44v44.72h-3.44h-3.44v6.88h3.44h3.44h13.76h3.44h3.44v-6.88h-3.44h-3.44v-51.6h-3.44h-13.76z"></path>
                  </g>
                  <path
                    d=""
                    fill="none"
                    stroke="none"
                    stroke-width="1"
                    stroke-linejoin="miter"
                  ></path>
                  <path
                    d=""
                    fill="none"
                    stroke="none"
                    stroke-width="1"
                    stroke-linejoin="miter"
                  ></path>
                </g>
              </g>
            </svg>
            <span>More Info</span>
          </button>
        </div>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
