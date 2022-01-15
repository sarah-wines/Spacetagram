import { useState } from 'react';
import Heart from 'react-animated-heart';

export function Like() {
  const [isClicked, setClick] = useState(false);

  return (
    <>
      <Heart isClick={isClicked} onClick={() => setClick(!isClicked)} />
    </>
  );
}
