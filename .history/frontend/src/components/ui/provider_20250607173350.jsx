'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'
import { extendTheme } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
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
