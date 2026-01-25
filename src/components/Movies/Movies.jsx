import { useState } from "react"
import { AddMovie } from "./AddMovie/AddMovie"

export const Movies = () => {
    const [movies, setMovies] = useState([])

    const onAddMovie = (newMovieTitle) => {
    const newMovie = {
      id: movies.length + 1,
      title: newMovieTitle
    }
    setMovies([...movies, newMovie])
  }

  const onDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  return (
    <div className="movies-container">
      <AddMovie onAddMovie={onAddMovie} />
      <MovieList movies={movies} onDeleteMovie={onDeleteMovie} />
    </div>
  )




}