import { Outlet } from "react-router-dom"
import Sidebar from '../components/global/Sidebar'

const Layout = () => {
  return (
    <div className="grid grid-flow-col grid-cols-6 h-screen overflow-auto">
        <div className="col-span-1">
            <Sidebar />
        </div>
        <div className="col-span-5">
            <Outlet />
        </div>
    </div>
  )
}

export default Layout