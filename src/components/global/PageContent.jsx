import useOnPlay from "../../hooks/useOnPlay"
import SongItem from "./SongItem"

const PageContent = ({ songs }) => {
  const onPlay = useOnPlay(songs);
  if (songs.length === 0) {
    return (
      <div className="text-neutral-400 mt-4 text-lg font-semibold">No songs found</div>
    )
  } else {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
        {songs.map((song) => (
            <SongItem key={song.id} data={song} handleClick={() => onPlay(song)}/>
        ))}
      </div>
    )
  }
}

export default PageContent