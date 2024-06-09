import Modal from "../global/Modal"
import GoogleSignInBtn from "../buttons/GoogleSignInBtn"
import { useState } from "react"
import Login from '../forms/Login'
import Signup from '../forms/Signup'
import useAuthStateChange from "../../hooks/useAuthStateChange"
import useAuthModal from '../../hooks/useAuthModal'

const AuthModal = () => {
  const [showLogin, setShowLogin] = useState(true);
  const {isOpen, close} = useAuthModal();
  // Change the following line if causing an error
  useAuthStateChange();

  const handleOpen = (curOpen) => {
    if(!curOpen) {
      close();
    }
  }
  
  return (
    <Modal
        title={showLogin ? 'Welcome back!' : 'Welcome!'}
        description={showLogin ? 'Login to your account' : 'Sign up for a new account'}
        isOpen={isOpen}
        onChange={handleOpen}
    >
        <GoogleSignInBtn />
        <hr className="mt-6 mb-4 border border-neutral-600"/>
        {showLogin ? <Login setShowLogin={setShowLogin} /> : <Signup setShowLogin={setShowLogin} />}
    </Modal>
  )
}

export default AuthModal