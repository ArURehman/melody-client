import { FaPlay } from "react-icons/fa"

const PlayButton = () => {
  return (
    <button className="transition opacity-0 rounded-full flex items-center p-4 bg-transparent backdrop-blur-md drop-shadow-sm translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 outline outline-2 outline-blue-500">
        <FaPlay className="text-blue-500"/>
    </button>
  )
}

export default PlayButton