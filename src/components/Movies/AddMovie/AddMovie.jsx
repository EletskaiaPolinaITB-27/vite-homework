import { useState } from "react"

export const AddMovie = (props) => {
  const [movieValue, setMovieValue] = useState('')

  const submitMovie = () => {
    props.onAddMovie(movieValue)
    setMovieValue('')
  }

  return (
    <div className="add-container">
      <input
        placeholder="write film"
        value={movieValue}
        type="text"
        onChange={e => setMovieValue(e.target.value)}
      />
      <button onClick={submitMovie}>Add</button>
    </div>
  )
}