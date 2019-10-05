import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, theme } from '@chakra-ui/core'

import { App } from './components/AppData'
import { secondary } from './design/colors'

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    checkbox: {
      50: secondary.secondary3,
      100: secondary.secondary3,
      200: secondary.secondary3,
      300: secondary.secondary3,
      400: secondary.secondary3,
      500: secondary.secondary3,
      600: secondary.secondary3,
      700: secondary.secondary3,
      800: secondary.secondary3,
      900: secondary.secondary3
    }
  }
}

console.log(customTheme)

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
