import { createTheme } from '@mui/material/styles';
import { lighten } from "polished";

export const Colors = {
  primary: '#5f2c3e',
  secondary: '#d1adcc',
  success: '#4CAF50',
  info: '#00a2ff',
  danger: '#FF5722',
  warning: '#FFC107',
  dark: '#0e1b20',
  light: '#aaa',
  muted: '#abafb3',
  border: '#DDDFE1',
  inverse: '#2F3D4A',
  shaft: '#333',
  dim_grey: '#696969',
  dove_gray: '#d5d5d5',
  body_bg: '#f3f6f9',
  light_gray: 'rgb(230,230,230)',
  white: '#fff',
  black: '#000',
}

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    tertiary: {
      main: Colors.tertiary,  
  },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 250,
          background:Colors.primary,
          color:Colors.secondary,
          borderRadius: '0px 100px 0px 0px',
          borderRight:`10px solid ${Colors.secondary}`
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor:lighten(0.2, Colors.secondary)
        }
      }
    },

    MyCustomShopButton: {
      styleOverrides: {
        root: {
          color: Colors.white,
        },
        primary: {
          background: Colors.primary,
          "&:hover": {
            background: lighten(0.05, Colors.secondary),
            color: Colors.black,
          },
        },
        secondary: {
          background: `${Colors.secondary}`,
          "&:hover": {
            background: lighten(0.05, Colors.primary),
          },
        },
      },
    },
  },
})

export default theme
