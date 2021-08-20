import instance from '../axios';
import React, { useState, useEffect } from 'react';

function Row(props) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData () {
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
    }, [props.fetchUrl])

    // to see if the request using useEffect works
    console.log(movies);

    return (
        <div>
            <h2>{props.title}</h2>
            
        </div>
    )
}

export default Row
