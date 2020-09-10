import React from 'react';
import { ImageGalleryStyle } from '../styles/style.module.css';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ data, modal }) => (
  <ul
    className={ImageGalleryStyle}
    onClick={evt =>
      evt.target.tagName === 'IMG' && modal(evt.target.dataset.big)
    }
  >
    {data.map(el => (
      <ImageGalleryItem
        key={el.id}
        big={el.largeImageURL}
        src={el.webformatURL}
      />
    ))}
  </ul>
);
