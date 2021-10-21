import React from 'react';
import './App.css';
import CircularProgress from "./core/Components/CircularProgress";
import {ThemeProvider} from '../src/core/Provider'
import {theme} from "./core";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CircularProgress value={40} size={72}/>

      </ThemeProvider>
    </div>
  );
}

export default App;
