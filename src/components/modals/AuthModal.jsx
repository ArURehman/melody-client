import Modal from "../global/Modal"

const AuthModal = () => {
  return (
    <Modal
        title={'Welcome Back'}
        description={'Please login to continue'}
        isOpen={true}
        onChange={() => {}}
    >
        Auth Modal
    </Modal>
  )
}

export default AuthModal