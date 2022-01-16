import { useState } from 'react';
import Heart from 'react-heart';

export function Like() {
  const [active, setActive] = useState(false);

  return (
    <div
      ariaLabel="Like"
      role="button"
      tabIndex="0"
      className="heart"
      style={{ width: '1.5rem' }}
    >
      <Heart
        tabIndex="0"
        isActive={active}
        onClick={() => setActive(!active)}
      />
    </div>
  );
}
