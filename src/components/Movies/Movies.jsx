import { useState } from "react"
import { AddMovie } from "./AddMovie/AddMovie"
import { MovieList } from "../MovieList/MovieList"

export const Movies = () => {
    const [movies, setMovies] = useState([])

    const onAddMovie = (title) => {
    const newMovie = {
      id: movies.length + 1,
      title,
      watched: false,
      likeStatus: null
    }
    setMovies([...movies, newMovie])
  }

  const onToggleWatched = (id) => {
    const updatedMovies = movies.map(movie => {
      if (movie.id === id) {
        return { 
        ...movie, 
        watched: !movie.watched, 
        likeStatus: null 
      }
    }
    return movie
  })

  setMovies(updatedMovies)
}

const onLike = (id) => {
  const updatedMovies = movies.map(movie => {
    if (movie.id === id) {
      return { ...movie, likeStatus: "like" }
    }
    return movie
  })

  setMovies(updatedMovies)
}

const onDislike = (id) => {
  const updatedMovies = movies.map(movie => {
    if (movie.id === id) {
      return { ...movie, likeStatus: "dislike" }
    }
    return movie
  })

  setMovies(updatedMovies)
}

  return (
    <div className="movies-container">
      <AddMovie onAddMovie={onAddMovie} />
      <MovieList movies={movies}                 
        onToggleWatched={onToggleWatched}
        onLike={onLike}
        onDislike={onDislike} />
    </div>
  )
}