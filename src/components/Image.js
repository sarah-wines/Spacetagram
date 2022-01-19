import React, { useState } from 'react';
import { Card, Accordion } from 'react-bootstrap';

import Heart from 'react-heart';

export function Image(image) {
  const [picture] = useState(image.image);
  const [active, setActive] = useState(false);

  const tabIndex = 0;
  console.log(picture.media_type);
  return (
    <>
      <div className="imageCardCont">
        <div className="imageCard">
          <Card className="card">
            {/*conditional rendering accounts for issue rendering video discovered during manual testing. Thumbnails are displayed for videos*/}

            {picture.media_type === 'image' ? (
              <Card.Img variant="top" alt={picture.title} src={picture.url} />
            ) : (
              <Card.Img
                variant="top"
                alt={picture.title}
                src={picture.thumbnail_url}
              />
            )}

            <Card.Body>
              <div>
                <Heart
                  aria-label="Like"
                  tabIndex={tabIndex}
                  style={{ width: '1.5rem' }}
                  isActive={active}
                  onClick={() => setActive(!active)}
                />
              </div>
              <Card.Title>{picture.title}</Card.Title>

              <Card.Title>{picture.date}</Card.Title>
              <Accordion className="accordion" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Details</Accordion.Header>
                  <Accordion.Body>{picture.explanation}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
