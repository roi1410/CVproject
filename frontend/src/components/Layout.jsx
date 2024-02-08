import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import DynamicNavBar from './DynamicNavBar';

function Layout() {
  const themeOptions = {
    palette: {
      type: 'dark',
      primary: {
        main: '#0082ff',
      },
      secondary: {
        main: '#15ff00',
      },
      background: {
        default: 'white',
        paper: '#313131',
      },
      error: {
        main: '#ff0e00',
      },
      warning: {
        main: '#edff00',
      },
      info: {
        main: '#f900ff',
      },
      success: {
        main: '#00ff09',
      },
    },
  };

  const theme = createTheme(themeOptions);

  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <ThemeProvider theme={theme}>
        <CssBaseline style={{ color: 'white' }} />
        <DynamicNavBar />
        <Outlet />
        
      </ThemeProvider>
    </div>
  );
}

export default Layout;
