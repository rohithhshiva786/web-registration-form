import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Styles from './blue.module.css';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };





export default function BasicTextFields() {
  return (
    <div className={Styles.box}>
     <center><h1>Register</h1></center>
      <Stack direction="row" spacing={3}>
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <TextField id="filled-basic" label="Firstname" variant="filled"/>
      <TextField id="filled-basic" label="Lastname" variant="filled"/>
      <TextField id="filled-basic" label="Department" variant="filled"/>
    </Stack><br></br>
    <h3>Gender</h3>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl><br></br><br></br>
    <h3>Qualifications</h3>
      <Checkbox {...label} />MBA
      <Checkbox {...label} />B.E
      <Checkbox {...label} />B.COM<br></br>
      <h3>Year Of Passing</h3>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="2023" control={<Radio />} label="2023" />
        <FormControlLabel value="2024" control={<Radio />} label="2024" />
        <FormControlLabel value="2025" control={<Radio />} label="2025" />
        <FormControlLabel value="2026" control={<Radio />} label="2026" />

      </RadioGroup>
      </FormControl><br></br>
      <center>
      <Button variant="contained">Submit</Button>
      </center>
    

            {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
     
    </div>
);
}