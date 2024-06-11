import LikeButtons from "../buttons/LikeButtons"
import MediaItem from "./MediaItem"

const LikedContent = ({ songs }) => {
  if (songs?.length === 0) {
    return (
        <div className="flex flex-col gap-y-2 w-full text-neutral-400">
            No liked songs
        </div>
    )
  } else {
    return (
        <div className="flex flex-col gap-y-2 w-full p-6">
            {songs.map((song) => (
                <div key={song.id} className="flex items-center gap-x-4 w-full">
                    <div className="flex-1">
                        <MediaItem data={song} handleClick={() => {}} />   
                    </div>
                    <LikeButtons songID={song.id} />
                </div>
            ))}
        </div>
    )
  }
}

export default LikedContent