import React from 'react';
import FormControl from '@material-ui/core/FormControl';  

const CreateNote = () => {
  return (
    <div className="container">
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
    </div>
  )
}

export default CreateNote;
