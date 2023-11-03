import React from 'react';
import './Rectangle.css';
import reactRectangle from '../assets/img/Rectangle.svg';
import Container from 'react-bootstrap/Container';


export const Rectangle_1 = () => {
  return (
    <Container className="position-absolute top-0 start-100 translate-middle">
    <div className="Rectangle_1" style={{ backgroundImage: `url(${reactRectangle})` }}></div>
    </Container>
  );
};
