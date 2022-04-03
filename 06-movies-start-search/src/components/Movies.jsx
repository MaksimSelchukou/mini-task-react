import React from "react";
import { Movie } from "./Movie";

export function Movies(props) {
    const { movies } = props;
    return (
        <div className="movies">
            {movies.map(movie => {
                return (
                    <Movie key={movie.id} {...movie} />
                )

            })}
        </div>
    )
}