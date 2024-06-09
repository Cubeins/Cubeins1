import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import chargerImage from "./Components/images/product.jpg"; // Replace with your image path

const ProductSectionContainer = styled.section`
  padding: 80px 0;
  background-color: #f7f7f7;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 40px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAButton = styled(Button)`
  font-size: 1.2rem;
  padding: 15px 30px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 12px 25px;
    margin-top: 10px;
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    text-align: right;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 5px;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.2);
  margin-top: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 10px;
  }
`;

const handleContactClick = () => {
  // Replace with your email address
  const email = "cubeins69@gmail.com";
  window.location.href = `mailto:${email}`;
};

const ProductSection = () => {
  return (
    <ProductSectionContainer>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <Title>Our Premium EV Car Charger</Title>
            <hr />
            <Description>
              Experience the fastest and most reliable charging for your
              electric vehicle. Designed for both home and business use, our
              charger ensures your car is always ready to go.
            </Description>
            <Button
              variant="outline-primary"
              size="lg"
              style={{ color: "" }}
              onClick={handleContactClick}
            >
              Learn More.
            </Button>
          </Col>
          <Col xs={12} md={6}>
            <ImageWrapper>
              <ProductImage src={chargerImage} alt="EV Car Charger" />
            </ImageWrapper>
          </Col>
        </Row>
      </Container>
    </ProductSectionContainer>
  );
};

export default ProductSection;
