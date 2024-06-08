import { BiSearch, BiSolidHome } from "react-icons/bi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useNavigate } from "react-router-dom"
import { twMerge } from "tailwind-merge";
import Button from "./Button";

const Header = ({ children, styles }) => {

  const navigate = useNavigate();
  const handleLogout = () => {
    // TODO: handle logout
  }

  return (
    <div className={
        twMerge(`h-fit bg-gradient-to-b from-blue-800 p-6`, styles)
    }>
        <div className="w-full mb-4 flex items-center justify-between">
            <div className="hidden md:flex gap-x-2 items-center">
                <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition" 
                onClick={() => {
                    navigate(-1)
                }}><RxCaretLeft size={35} className="text-white"/></button>
                <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition" 
                onClick={() => {
                    navigate(1)
                }}><RxCaretRight size={35} className="text-white"/></button>
            </div>
            <div className="flex md:hidden gap-x-2 items-center">
                <button className="rounded-full p-2 bg-neutral-100 flex items-center justify-center hover:opacity-75 transition"><BiSolidHome size={20} className="text-black"/></button>
                <button className="rounded-full p-2 bg-neutral-100 flex items-center justify-center hover:opacity-75 transition"><BiSearch size={20} className="text-black"/></button>
            </div>
            <div className="flex justify-between items-center gap-x-4">
                <>
                    <Button styles="bg-transparent text-neutral-300 font-medium" onClick={() => {}}>
                        Signup
                    </Button>
                    <Button styles="bg-white px-6 py-2" onClick={() => {}}>
                        Login
                    </Button>
                </>
            </div>
        </div>
        {children}
    </div>
  )
}

export default Header