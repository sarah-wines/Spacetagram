import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image } from './Image.js';
export function Images() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=8cGPvrIOA5TQd7CdnZyeQTdEWQvfbftSlpyaDzkp&count=5`
      )
      .then((response) => {
        // console.log(response.data);

        setImages(response.data);
      });
  }, []);
  return (
    <>
      {images.map((image, idx) => {
        return (
          <div key={idx}>
            <Image image={image} />
          </div>
        );
      })}
    </>
  );
}
