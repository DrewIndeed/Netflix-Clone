import React, { useState } from 'react';

function Row(props) {
    const [movies, setMovies] = useState([])

    return (
        <div>
            <h2>{props.title}</h2>
            
        </div>
    )
}

export default Row
