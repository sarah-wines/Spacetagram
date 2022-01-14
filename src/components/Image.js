import React, { useState } from 'react';

export function Image(image) {
  const [picture] = useState(image.image);
  console.log(picture.explanation);
  return (
    <div className="explanation">
      <img alt="user pic" src={picture.hdurl} />
      <p>{picture.explanation}</p>
    </div>
  );
}
