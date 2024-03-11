import { useState } from "react";
import Header from "./Header";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Outlet } from "react-router-dom";



function App() {
  const [darkMode,setDarkMode] = useState(false);
  const pallete = darkMode?'dark':'light';
  const bgcolor = darkMode?'black':'#eaeaea';
  const theme = createTheme({
    palette:{
      mode: pallete,
      background:{
        default: bgcolor
      }
    }
  });
  
  function handleThemeChange(){
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Outlet/>
      </Container>
    </ThemeProvider>
  )
}

export default App
