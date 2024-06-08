import AppRouting from "./router/AppRouting"
import ModalProvider from "./providers/ModalProvider"

const App = () => {
  return (
    <>
    <ModalProvider />
    <AppRouting />
    </>
  )
}

export default App
