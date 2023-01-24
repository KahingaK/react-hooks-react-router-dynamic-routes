import React from "react";
import { Route, useRouteMatch  } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  console.log(match);

  return (
    <div>
      <MoviesList movies={movies} />
      <h3>Choose a movie from the list above</h3>

      <Route path={`${match.url}/:movieId`}>
        <MovieShow />
      </Route>
    </div>
  );
}
export default MoviesPage;
