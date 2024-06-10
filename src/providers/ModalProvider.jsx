import AuthModal from "../components/modals/AuthModal"
import UploadModal from "../components/modals/UploadModal"

const ModalProvider = () => {
  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  )
}

export default ModalProvider