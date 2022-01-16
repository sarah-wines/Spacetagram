import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image } from './Image.js';
import { Container } from 'react-bootstrap';
export function ImageList() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=8cGPvrIOA5TQd7CdnZyeQTdEWQvfbftSlpyaDzkp&count=10`
      )
      .then((response) => {
        // console.log(response.data);

        setImages(response.data);
      });
  }, []);
  return (
    <>
      <Container fluid="sm">
        <div className="titles">
          <h1>Spacetagram</h1>
          <h3>Brought to you by NASA's image API</h3>
        </div>

        <div className="imageContainer">
          {images.map((image, idx) => {
            return (
              <div key={idx}>
                <Image image={image} />
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
