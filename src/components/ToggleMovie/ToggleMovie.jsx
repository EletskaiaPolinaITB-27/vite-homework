export const ToggleMovie = ({ watched, onToggle }) => {
  return (
    <button onClick={onToggle}>
      {watched ? '✅' : ''}
    </button>
  )
}