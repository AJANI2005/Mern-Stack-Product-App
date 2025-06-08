import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Provider as ChakraProvider } from "./components/ui/provider"
import ColorModeScript from "./components/ui/color-mode"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <ChakraProvider>
         <ColorModeScript initialColorMode="light" />
         <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
