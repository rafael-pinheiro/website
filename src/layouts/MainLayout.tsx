import Grid from '@mui/material/Unstable_Grid2';
import type React from 'react';
import { Sidebar } from '../components/Sidebar';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Grid
      container
      height='100%'
      margin={0}
    >
      <Grid
        xs="auto"
        sx={{
          boxShadow: 1
        }}
      >
        <Sidebar />
      </Grid>
      <Grid
        xs
        height={'100%'}
      >
        {children}
      </Grid>
    </Grid >
  )
}