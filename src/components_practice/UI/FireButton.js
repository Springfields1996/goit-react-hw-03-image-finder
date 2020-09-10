import React from 'react';
import Button from '@material-ui/core/Button';

export const FireButton = ({
  label,
  type,
  handleClick = () => {
    console.log('click');
  },
}) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      type={type}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};
