import { MovieItem } from "../MovieItem/MovieItem"

export const MovieList = (props) => {
  return (
    <div>
      {props.movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} onDelete={props.onDeleteMovie}/>
      ))}
    </div>
  )
}