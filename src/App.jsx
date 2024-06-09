import AppRouting from "./router/AppRouting"
import ModalProvider from "./providers/ModalProvider"
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <>
    <Toaster />
    <ModalProvider />
    <AppRouting />
    </>
  )
}

export default App
