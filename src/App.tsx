import React, {useState} from 'react'
import './App.css';
import {ThemeProvider} from '../src/core/Provider'
import {Autocomplete, Button, colors, Radio, TextField, theme} from "./core";
import {BrowserRouter, Link} from "react-router-dom";
import {Box, Button as ButtonBase, FormControl, FormControlLabel, RadioGroup} from '@mui/material'
import LinearProgress from "./core/Components/LinearProgress";

function App() {
  const [array, setArray] = useState([{label:'1', value:1},{label:'3', value:3},{label:'2', value:2}])
  const [active, setActive] = useState(true)
  const [value, setValue] = React.useState("female");

  const handleChange = (event:any) => {
    setValue(event.target.value);
    console.log("OLOLO");
  };
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

              <FormControl>
                <RadioGroup
                  aria-label="gender"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel value="female" control={<Radio color={'primary'}/>} label="Female" />
                  <FormControlLabel value="male" control={<Radio color={'error'}/>} label="Male" />
                </RadioGroup>
              </FormControl>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
