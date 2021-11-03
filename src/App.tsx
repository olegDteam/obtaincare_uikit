import React, {useState} from 'react'
import './App.css';
import {ThemeProvider} from '../src/core/Provider'
import {Autocomplete, Button, colors, Radio, TextField, theme} from "./core";
import {BrowserRouter, Link} from "react-router-dom";
import {Box, Button as ButtonBase} from '@mui/material'
import LinearProgress from "./core/Components/LinearProgress";

function App() {
  const [array, setArray] = useState([{label:'1', value:1},{label:'3', value:3},{label:'2', value:2}])
  const [active, setActive] = useState(true)
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Box style={{width: 300, backgroundColor: colors.background.provider}}>
            <TextField
              fullWidth
              color={'secondary'}
              disabled={!active}
              value={'QPIWUYGUE QPIWUYGUE QPIWUYGUE '}
            />
            <Button color={'success'} disableRipple onClick={()=>setActive(p=>!p)}>ACT</Button>
            <LinearProgress color={'success'} variant={'determinate'} value={51}/>
            <Radio
              checkedIconColor={'primary'}
            />
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
