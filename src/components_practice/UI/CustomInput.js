import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function FormPropsTextFields({ name, handleChange, value }) {
  return (
    <div>
      <TextField
        id="outlined-search"
        label={name}
        type="search"
        variant="outlined"
        name={name}
        onChange={handleChange}
      />
    </div>
  );
}
