import React from 'react';
import { ButtonStyle } from '../styles/style.module.css';

export const Button = ({ onClick }) => (
  <button className={ButtonStyle} type="button" onClick={onClick}>
    Load more
  </button>
);
