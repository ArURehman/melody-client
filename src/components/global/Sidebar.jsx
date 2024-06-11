import Box from "./Box"
import routeNames from '../../router/RouteNames'
import Library from "../sidebar/Library"
import SidebarItem from '../sidebar/SidebarItem'
import { useState } from "react"
import { getUserSongs } from "../../services/addSong"
import useUserContext from "../../hooks/useUserContext"

const Sidebar = () => {
  
  const { user } = useUserContext();
  const [songs, setSongs] = useState([]);

  getUserSongs(user?.uid).then(res => {
    setSongs(res);
  }).catch(err => {
    console.log(err);
  });

  return (
    <div className="min-w-[250px] h-full md:flex flex-col gap-y-2 p-2">
        <Box styles="flex flex-col gap-y-4 px-5 py-4">
          {Object.keys(routeNames).map((route, index) => (
            <SidebarItem key={index} Icon={routeNames[route].icon} {...routeNames[route]}/>
          ))}
        </Box>
        <Box styles="overflow-y-auto h-full py-4">
          <Library songs={songs}/>
        </Box>
    </div>
  )
}

export default Sidebar