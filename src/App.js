import React, {useEffect} from 'react'
import {Button, Container} from '@mui/material'

function App() {

  useEffect(()=>{
document.title = "React material Ui - Home";
  }, []);

  return (
    <Container
    maxWidth="xl"
    sx={{
      background:"#fff"
    }}
    >
      <Button variant='contained'>Test</Button>
    </Container>
  );
}

export default App;
