import { useEffect, useRef, useState } from 'react';
import { MessageText, PromotionsContainer } from '../../styles/promotions';
import { Slide } from '@mui/material';
import { Box } from '@mui/system';

const messages = [
  'Get 30% off your initial purchase!',
  'Our holiday sale is live! Drop by any of our stores.',
  'Our premium-quality offers here:)',
]
export default function Promotions() {
  const containerRef = useRef()
  const [show, setShow] = useState(true)
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 3000)
    const intervalId = setInterval(() => {
      // get next message
      setMessageIndex((i) => (i + 1) % messages.length)

      // slide the message in
      setShow(true)

      setTimeout(() => {
        setShow(false)
      }, 3000)
    }, 4000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <PromotionsContainer ref={containerRef}>
      <Slide 
      container={containerRef.current}
      direction={show ? 'right' : 'left'} 
      in={show}
      timeout={{
        enter:1000,
        exit:500
      }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <MessageText>
            {messages[messageIndex]}
          </MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  )
}
