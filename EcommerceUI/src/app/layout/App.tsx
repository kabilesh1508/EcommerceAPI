import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";



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
        <Catalog />
      </Container>
    </ThemeProvider>
  )
}

export default App
