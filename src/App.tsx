import { createTheme } from '@mui/material/styles';
import ThemeProvider from '@mui/styles/ThemeProvider';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Registration from './pages/Registration';

const theme = createTheme();


function App() {
  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      <Header/>
      <Registration/>
    </div>
    </ThemeProvider>
  );
}

export default App;
