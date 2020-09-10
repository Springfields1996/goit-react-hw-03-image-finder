import axios from 'axios';

axios.defaults.baseURL = 'https://todo-list-cde5d.firebaseio.com/todo';

export const sendData = async data => {
  try {
    const responce = await axios.post(`.json`, data);
    getData();
  } catch (error) {
    console.log(error);
  }
};

export const getData = async () => {
  try {
    const { data } = await axios.get(`.json`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async id => {
  try {
    await axios.delete(`${id}.json`);
  } catch (error) {
    console.log(error);
  }
};
