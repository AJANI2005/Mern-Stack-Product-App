'use client'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'
import extendTheme from './theme'
// Optional: Your Chakra theme config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({ config })

export function Provider({ children }) {
  return (
    <>
      {/* Ensures correct color mode hydration */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      
      <ChakraProvider theme={theme}>
        <ColorModeProvider>
          {children}
        </ColorModeProvider>
      </ChakraProvider>
    </>
  )
}
