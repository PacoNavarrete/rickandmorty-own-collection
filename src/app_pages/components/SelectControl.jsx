import { useState } from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function SelectControl({ filterNames = [], filterTag="tag name" }) {
  
  const names = [...filterNames];

  const [personName, setPersonName] = useState([]);

  console.log(personName)

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m:1, width: 200}}>
        <InputLabel id={filterTag} sx={{color:"white"}}>{filterTag}</InputLabel>
        <Select
          labelId={filterTag}
          id={filterTag + "checkbox"}
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput sx={{ color:"white"}}  label={filterTag} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          sx={{ color: 'white'}}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
