import AppRouting from "./router/AppRouting"
import ModalProvider from "./providers/ModalProvider"
import { Toaster } from "react-hot-toast"
import ContextProvider from "./contexts/ContextProvider"

const App = () => {
  return (
    <>
    <ContextProvider>
      <Toaster />
      <ModalProvider />
      <AppRouting />
    </ContextProvider>
    </>
  )
}

export default App
