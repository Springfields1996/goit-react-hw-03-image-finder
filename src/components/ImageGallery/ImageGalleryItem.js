import React from 'react';
import {
  ImageGalleryItemStyle,
  ImageGalleryItem_image,
} from '../styles/style.module.css';

export const ImageGalleryItem = ({ src, big }) => (
  <li className={ImageGalleryItemStyle}>
    <img src={src} data-big={big} alt="" className={ImageGalleryItem_image} />
  </li>
);
