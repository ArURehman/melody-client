import { Outlet } from "react-router-dom"
import Sidebar from '../components/global/Sidebar'

const Layout = () => {
  return (
    <div className="flex flex-row h-screen overflow-auto">
        <div className="basis-1/6">
            <Sidebar />
        </div>
        <Outlet />
    </div>
  )
}

export default Layout