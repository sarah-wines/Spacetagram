import React, { useState } from 'react';
import { Card, Accordion } from 'react-bootstrap';
import { Like } from './Like.js';

export function Image(image) {
  const [picture] = useState(image.image);
  console.log(picture.hd);
  return (
    <>
      <div className="imageCardCont">
        <div className="imageCard">
          <Card className="card">
            <Card.Img variant="top" alt={picture.title} src={picture.hdurl} />
            <Card.Body>
              <Like />
              <Card.Title>{picture.title}</Card.Title>

              <Card.Title>{picture.date}</Card.Title>
              <Accordion flush>
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
