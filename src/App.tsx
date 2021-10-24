import React from 'react'
import './App.css';
import {ThemeProvider} from '../src/core/Provider'
import {Button, theme} from "./core";
import {BrowserRouter, Link} from "react-router-dom";
import {Button as ButtonBase} from '@mui/material'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Button component={Link} to={'https://google.com'} color={'primary'}>paiusbhd</Button>
          <ButtonBase component={Link} to={'https://google.com'} color={'secondary'}/>

        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
