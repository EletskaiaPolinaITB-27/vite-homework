import { MovieItem } from "../MovieItem/MovieItem"
import { LikeDislike } from "../LikeDislike/LikeDislike" 

export const MovieList = ({movies, onToggleWatched, onLike, onDislike}) => {
  return (
     <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <MovieItem 
            title={movie.title}
            watched={movie.watched}
          />

          <button onClick={() => onToggleWatched(movie.id)}>
            {movie.watched ? "✅ watched" : "mark watched"}
          </button>

          
            <LikeDislike
              likeStatus={movie.likeStatus}
              onLike={() => onLike(movie.id)}
              onDislike={() => onDislike(movie.id)}
            />
          
        </div>
      ))}
    </div>
  )
}