import Modal from "../global/Modal"
import GoogleSignInBtn from "../buttons/GoogleSignInBtn"
import { useState } from "react"
import Login from '../forms/Login'
import Signup from '../forms/Signup'

const AuthModal = () => {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <Modal
        title={showLogin ? 'Welcome back!' : 'Welcome!'}
        description={showLogin ? 'Login to your account' : 'Sign up for a new account'}
        isOpen={true}
        onChange={() => {}}
    >
        <GoogleSignInBtn />
        <hr className="mt-6 mb-4 border border-neutral-600"/>
        {showLogin ? <Login setShowLogin={setShowLogin} /> : <Signup setShowLogin={setShowLogin} />}
    </Modal>
  )
}

export default AuthModal