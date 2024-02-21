import { createRandomMovie } from "../Data";
import { addMovie , removeMovie } from "../Slices/PlaylistSlice";
import { useDispatch , useSelector } from "react-redux";

const Movies = () => {

  const dispatch = useDispatch()
  const movieList = useSelector((state) => state.movies)
  
  const handleMovieAdd = (movie) => {
    dispatch(addMovie(movie))
  }

  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie))
  }

  return(
    <div>
    <div>
        <h4>Movies PlayList</h4>
        <button
        onClick={() => handleMovieAdd(createRandomMovie())}
        >ADD MOVIES</button>
    </div>
    <div>
      <ul>
        {movieList.map((movie) => {
          return(
            <li key={movie}>
              {movie}
              <button 
              onClick={() => handleMovieRemove(movie)}>
                X
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
  )
}

export default Movies;