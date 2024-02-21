import { addSong , removeSong } from "../Slices/PlaylistSlice";
import {  useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../Data";

const Songs = () => {

  const dispatch = useDispatch()
  const songsPlaylist = useSelector((state) => state.songs)

  const handleSongsAdd  = (song) => {
    dispatch(addSong(song))
  }

  const handleSongsRemove = (song) => {
    dispatch(removeSong(song))
  }
  console.log(songsPlaylist)

  return(
    <div>
      <div>
          <h4>Songs PlayList</h4>
          <button
          onClick={() => handleSongsAdd(createRandomSong())}
          >ADD SONGS</button>
      </div>
      <div>
        <ol>
        {songsPlaylist.map((song) => {
          return(
            <li key={song}>
                {song}
                <button
          onClick={() => handleSongsRemove(song)}
        >
          X
        </button>
            </li>
          )
        })}
        </ol>
      </div>
    </div>
  )
}

export default Songs;