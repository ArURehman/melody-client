import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom"

const ListItem = ({ image, name, href }) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(href)
  }

  return (
    <button className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4" onClick={handleClick}>
        <div className="relative max-h-[64px] max-w-[64px]">
            <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>
        <span className="font-medium truncate py-5">{name}</span>
        <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-blue-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
            <FaPlay className="text-black" />
        </div>
    </button>
  )
}

export default ListItem