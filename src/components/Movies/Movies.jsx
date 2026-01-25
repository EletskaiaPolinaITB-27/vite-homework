import { useState } from "react"

export const Movies = () => {
    const [movies, setMovies] = useState([])

    const onAddMovie = (newMovieTitle) => {
    const newMovie = {
      id: movies.length + 1,
      title: newMovieTitle
    }
    setMovies([...movies, newMovie]);
  }





  
}