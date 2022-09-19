import { createTheme, ThemeProvider as Provider } from "@mui/material";
import lightBlue from '@mui/material/colors/lightBlue';
import pink from '@mui/material/colors/pink';
import grey from '@mui/material/colors/grey';
import type React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue['A200'],
    },
    secondary: {
      main: pink['A100'],
    },
  },
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Provider theme={theme}>
    {children}
  </Provider>
)