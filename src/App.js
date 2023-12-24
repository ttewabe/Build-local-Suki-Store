import React, { useEffect } from 'react'
import { Container, Typography, Box, } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import theme from './styles/theme'
import Appbar from './components/appbar'
import Banner from './components/banner'
import Promotions from './components/promotions'
import Products from './components/products'

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
        <Box display="flex" justifyContent="center" sx={{ pt: 4 }}>
          <Typography variant="4"><h1>OUR PRODUCTS</h1></Typography>
        </Box>
        <Products /> 
      </Container>
    </ThemeProvider>
  )
}

export default App
