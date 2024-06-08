import Box from "./Box"
import routeNames from '../../router/RouteNames'
import Library from "../sidebar/Library"
import SidebarItem from '../sidebar/SidebarItem'

const Sidebar = () => {
  return (
    <div className="min-w-[250px] h-full md:flex flex-col gap-y-2 p-2">
        <Box styles="flex flex-col gap-y-4 px-5 py-4">
          {Object.keys(routeNames).map((route) => (
            <SidebarItem key={route.name} Icon={routeNames[route].icon} {...routeNames[route]}/>
          ))}
        </Box>
        <Box styles="overflow-y-auto h-full py-4">
          <Library />
        </Box>
    </div>
  )
}

export default Sidebar