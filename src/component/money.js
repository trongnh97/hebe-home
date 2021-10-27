import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import usFlag from './img/homepage/usFlag.png';
import ukFlag from './img/homepage/ukFlag.png';
import vnFlag from './img/homepage/vnFlag.png';

export default function Currency() {
  const [Currency, setCurrency] = React.useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ ml: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={Currency}
          onChange={handleChange}
        >
          <MenuItem value={10}>
              <img src={usFlag} alt=""/>
          </MenuItem>
          <MenuItem value={20}>
              <img src={ukFlag} alt=""/>
          </MenuItem>
          <MenuItem value={30}>
              <img src={vnFlag} alt=""/>
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ ml: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={Currency}
          onChange={handleChange}
        >
          <MenuItem value={10}>USD</MenuItem>
          <MenuItem value={20}>GBP</MenuItem>
          <MenuItem value={30}>VND</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}