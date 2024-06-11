import useOnPlay from '../../hooks/useOnPlay'
import LikeButton from '../buttons/LikeButtons'
import MediaItem from './MediaItem'

const SearchContent = ({ songs }) => {

  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full py-3 text-neutral-400">
        No Songs Found
      </div>
    )
  } else {
    return (
        <div className="flex flex-col w-full py-3 gap-y-2">
            {songs.map((song) => (
                <div key={song.id} className="flex items-center w-full gap-x-4">
                    <div className="flex-1">
                        <MediaItem 
                            data={song}
                            handleClick={() => onPlay(song)}
                        />
                    </div>
                    <LikeButton songID={song.id} />
                </div>
            ))}
        </div>
    )
  }

}

export default SearchContent