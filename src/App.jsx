import AppRouting from "./router/AppRouting"
import ModalProvider from "./providers/ModalProvider"
import { Toaster } from "react-hot-toast"
import ContextProvider from "./contexts/ContextProvider"
import PlayerProvider from "./providers/PlayerProvider"

const App = () => {
  return (
    <>
    <ContextProvider>
      <Toaster />
      <ModalProvider />
      <AppRouting />
      <PlayerProvider />
    </ContextProvider>
    </>
  )
}

export default App
