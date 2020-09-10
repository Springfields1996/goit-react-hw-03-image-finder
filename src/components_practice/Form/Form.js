import React, { useState } from 'react';
import CustomInput from '../UI/CustomInput';
import FireButton from '../UI/FireButton';
import { sendData, getData } from '../../Request';
export const Form = ({ uploadData }) => {
  const [todo, setTodo] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmitForm = async evt => {
    evt.preventDefault();
    await sendData({ todo, description });
    uploadData(getData());
    setTodo('');
    setDescription('');
  };

  const click = () => console.log('Double click');

  return (
    <form onSubmit={handleSubmitForm}>
      <CustomInput
        label="note"
        name="todo"
        handleChange={({ target: { value } }) => setTodo(value)}
        value={todo}
      />
      <CustomInput
        name="description"
        handleChange={({ target: { value } }) => setDescription(value)}
        value={description}
      />
      {/* <FireButton label="SEND" type="submit" handleClick={click} /> */}
    </form>
  );
};
