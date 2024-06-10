
const MediaItem = ({ data, handleClick }) => {

  const onClick = () => {
    if (handleClick) {
      handleClick(data.id);
    }
    // TODO: Add the logic to play the song
  }

  return (
    <div className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 p-2 rounded-md w-full">
        <div className="relative rounded-md max-h-[48px] max-w-[48px] overflow-hidden">
            <img src={data.image} alt={data.title} className="object-cover min-h-[48px] min-w-[48px]"/>
        </div>
        <div className="flex flex-col gap-y-1 overflow-hidden pb-1">
            <p className="text-white font-semibold text-sm truncate">{data.title}</p>
            <p className="text-neutral-400 text-xs truncate">{data.author}</p>
        </div>
    </div>
  )
}

export default MediaItem