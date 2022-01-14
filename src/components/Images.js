import axios from 'axios';
import { useEffect } from 'react';

export function Images() {
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=8cGPvrIOA5TQd7CdnZyeQTdEWQvfbftSlpyaDzkp&count=5`
      )
      .then((response) => {
        console.log(response);
        console.log(response.data[0].explanation);
      });
  }, []);
  return <></>;
}
