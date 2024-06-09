import { BiSearch, BiSolidHome } from "react-icons/bi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useNavigate } from "react-router-dom"
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import useAuthModal from "../../hooks/useAuthModal";
import { auth } from "../../config/firebaseConfig";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import useUserContext from "../../hooks/useUserContext";
import { FaUserAlt } from "react-icons/fa";

const Header = ({ children, styles }) => {
  
  const { open } = useAuthModal();
  const navigate = useNavigate();
  const { user } = useUserContext();

  const handleLogout = () => {
    signOut(auth).then(() => {
      window.location.reload();
      toast.success('Logged out successfully', {
        duration: 4000,
        position: 'bottom-right',
        className: 'bg-gray-500 text-white font-sans font-semibold border border-gray-600 rounded-md p-2 shadow-lg',
      });
    }).catch((error) => {
        toast.error(error.message, {
            duration: 4000,
            position: 'bottom-right',
            className: 'bg-red-500 text-white font-sans font-semibold border border-red-600 rounded-md p-2 shadow-lg', 
        });
    });
  }

  return (
    <div className={
        twMerge(`h-[150px] bg-gradient-to-b from-blue-800 p-6`, styles)
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
                {user ? (
                    <div className="flex gap-x-4 items-center">
                        <Button onClick={handleLogout} styles="bg-white px-6 py-2">Logout</Button>
                        <Button styles="bg-white py-3" onClick={() => {}}>
                            <FaUserAlt />
                        </Button>
                    </div>
                ) : (
                    <>
                        <Button styles="bg-transparent text-neutral-300 font-medium" onClick={open}>
                            Signup
                        </Button>
                        <Button styles="bg-white px-6 py-2" onClick={open}>
                            Login
                        </Button>
                    </>
                )}
            </div>
        </div>
        {children}
    </div>
  )
}

export default Header