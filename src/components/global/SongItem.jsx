import PlayButton from "../buttons/PlayButton"

const SongItem = ({ data, handleClick }) => {
  return (
    <div onClick={() => handleClick(data.id)} className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3">
        <div className="relative aspect-square h-full w-full rounded-md overflow-hidden">
            <img src={data.image} alt={data.title} className="object-cover w-full h-full"/>
        </div>
        <div className="flex flex-col items-start w-full pt-4 gap-y-1">
            <h1 className="w-full truncate font-semibold">{data.title}</h1>
            <p className="text-neutral-400 truncate text-xs pb-4 w-full">By {data.author}</p>
        </div>
        <div className="absolute bottom-24 right-5">
            <PlayButton />
        </div>
    </div>
  )
}

export default SongItem