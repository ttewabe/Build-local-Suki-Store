import { TextField, Typography } from "@mui/material";
import styled from '@emotion/styled'
import { Colors } from "../theme";


export const FooterTitle = styled(Typography)(()=>({
textTransform:'uppercase',
marginBottom:'1em'
}));

export const SubscribeTf = styled(TextField)(()=>({
  '.MuiInputLabel-root':{
    color:Colors.secondary
  },
  '.MuiInputLabel-root::before':{
    borderBottom:`1px solid ${Colors.secondary}`
  }
}))
