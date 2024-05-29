import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const heroStyle = {
  backgroundColor: '#f8f9fa', // Light grey background for a corporate look
  padding: '60px 0', // Top and bottom padding for spacing
};

const contentStyle = {
  color: '#355E93', // Corporate blue color for text
};

const Hero = () => {
  return (
    <Container fluid style={heroStyle}>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Image
            src="./Images/Mountains.jpg" // Replace with the actual path to your image
            alt="Wallace Scott"
            fluid
          />
        </Col>
        <Col xs={12} md={6}>
          <h1 style={contentStyle}>Wallace Scott</h1>
          <hr className="my-4" style={{ borderColor: 'grey' }} />
          <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>
            Entrepreneur | Software Engineer
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
