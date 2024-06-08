import { Link, useLocation } from "react-router-dom"
import { twMerge } from "tailwind-merge"

const SidebarItem = ({ Icon, name, path }) => {
  const { pathname } = useLocation();

  return (
    <Link to={path} className={twMerge(`flex flex-row h-auto items-center w-full gap-x-4 text-base font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`, pathname === path && 'text-white')}>
        <Icon className="w-6 h-6" size={26}/>
        <span className="truncate w-full">{name}</span>
    </Link>
  )
}

export default SidebarItem