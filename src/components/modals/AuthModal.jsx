import Modal from "../global/Modal"
import GoogleSignInBtn from "../buttons/GoogleSignInBtn"

const AuthModal = () => {

  return (
    <Modal
        title={'Welcome Back'}
        description={'Login to your account'}
        isOpen={true}
        onChange={() => {}}
    >
        <GoogleSignInBtn />
    </Modal>
  )
}

export default AuthModal