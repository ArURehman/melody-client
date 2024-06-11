import { Outlet } from "react-router-dom"
import Sidebar from '../components/global/Sidebar'
import Header from "./global/Header"
import Box from './global/Box'
import { twMerge } from "tailwind-merge"

const Layout = () => {
  return (
    <div className={twMerge("flex flex-row h-screen overflow-auto bg-neutral-950 text-white")}>
        <div className="hidden md:basis-1/6 md:block">
            <Sidebar />
        </div>
        <div className="w-full flex-1 py-2 mr-2">
            <Box styles="h-full overflow-y-auto">
              <Header>
                <Outlet />
              </Header>
            </Box>
        </div>
    </div>
  )
}

export default Layout