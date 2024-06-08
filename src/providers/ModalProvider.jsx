import Modal from '../components/global/Modal'

const ModalProvider = () => {
  return (
    <>
    <Modal 
        title={'Modal Title'}
        description={'Modal Description'}
        isOpen={true}
        onChange={() => {}}
    >
        Modal Content
    </Modal>
    </>
  )
}

export default ModalProvider