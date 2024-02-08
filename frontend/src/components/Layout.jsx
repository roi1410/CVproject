import React, { useContext, useEffect } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import DynamicNavBar from './DynamicNavBar';
import { Bounce, Slide, ToastContainer, toast } from 'react-toastify';
import Context from './Context';
import 'react-toastify/dist/ReactToastify.css';
function Layout() {
  const Data = useContext(Context);
useEffect(() => {
  console.log(Data?.toastData?.type)
  if(Data?.toastData?.type =="info")
  {
  toast.info(Data?.toastData?.content, {
    position: "top-center",
    autoClose: 2400,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
    });
    Data.setToastData({})
  }
    if(Data?.toastData?.type == "error")
    {
      toast.error(Data?.toastData?.content, {
        position: "top-center",
        autoClose: 2400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        });
        Data.setToastData({})
    }
    
},[Data?.toastData]);

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
        secondary: '#fff'
      },
      success: {
        main: '#00ff09',
      },
      text: {
        // Set default text color to white
        primary: '#ffffff',
      },
    },
  };

  const theme = createTheme(themeOptions);

  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>

      <ThemeProvider theme={theme}>   
      <ToastContainer/>
        <CssBaseline style={{ color: 'white' }} />
        <DynamicNavBar />
        <Outlet />
        
      </ThemeProvider>
    </div>
  );
}

export default Layout;
