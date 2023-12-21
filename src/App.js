import React, { useEffect } from 'react'
import { Button, Container } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme'
import Appbar from './components/appbar'
import Banner from './components/banner'
import Promotions from './components/promotions'

function App() {
  useEffect(() => {
    document.title = 'React material Ui - Home'
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: '#fff',
        }}
      >
        <Appbar />
        <Banner /> 
        <Promotions /> 
      </Container>
    </ThemeProvider>
  )
}

export default App
