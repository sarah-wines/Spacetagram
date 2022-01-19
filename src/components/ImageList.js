import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image } from './Image.js';
import { Container } from 'react-bootstrap';
import { Loading } from './Loading';
export function ImageList() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=8cGPvrIOA5TQd7CdnZyeQTdEWQvfbftSlpyaDzkp&thumbs=True&count=10`
      )
      .then((response) => {
        setImages(response.data);
        setIsLoading(false);
        console.log(response.data);
      });
  }, []);

  return isLoading ? (
    <>
      <Loading />
    </>
  ) : (
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
