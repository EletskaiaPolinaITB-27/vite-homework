export const MovieItem = (props) => {
  return (
    <div className="movie-item">
      <p>{props.movie.title}</p>
      <button onClick={() => props.onDelete(props.movie.id)}>delete</button>
    </div>
  )
}
