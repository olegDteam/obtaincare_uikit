import React from 'react'
import './App.css';
import {ThemeProvider} from '../src/core/Provider'
import {Button, theme} from "./core";
import {BrowserRouter, Link} from "react-router-dom";
import {Box, Button as ButtonBase} from '@mui/material'
import LinearProgress from "./core/Components/LinearProgress";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Box style={{width: 438, position: 'absolute', top: '50%', left: '50%'}}>
            <LinearProgress value={30} color={"info"}/>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
