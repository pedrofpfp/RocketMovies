import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Global/global'

import theme from './global/theme'


import { Routes } from './Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
