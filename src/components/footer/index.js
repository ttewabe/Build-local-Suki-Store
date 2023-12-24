import { Box, Grid} from '@mui/material';
import { FooterTitle } from '../../styles/footer';
import { Colors } from '../../styles/theme';


export default function Footer() {

  return (
    <Box
    sx={{
      background: Colors.shaft,
      color:Colors.white,
      p:{xs:4, md:10}
    }}
    >
      <Grid contaner spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About Us</FooterTitle>
        </Grid>
      </Grid>
    </Box>
  )
}
