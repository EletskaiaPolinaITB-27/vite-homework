export const LikeDislike = ({ likeStatus, onLike, onDislike }) => {
  return (
    <div>
      <button onClick={onLike}>
        {likeStatus === "like" ? "👍" : "Like"}
      </button>

      <button onClick={onDislike}>
        {likeStatus === "dislike" ? "👎" : "Dislike"}
      </button>
    </div>
  )
}
