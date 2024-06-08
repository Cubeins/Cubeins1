import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import IMG from "./images/cubeins1.png"; // Make sure the path to the image is correct

interface BallPosition {
  x: number;
  y: number;
}

// Keyframes for ball animation
const move = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
`;


const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: black;
  position: relative;
  overflow: hidden;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 50px;
  }
`;

const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: whitesmoke;
  opacity: 0;
  animation: backgroundAnimation 10s infinite linear;

  @keyframes backgroundAnimation {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

  @media (max-width: 576px) {
    opacity: 0;
  }
`;

const Ball = styled.div<{ x: number; y: number }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  background: linear-gradient(135deg, #3b82f6, #a1c4fd);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1),
    0 -5px 15px rgba(255, 255, 255, 0.1), 10px 0 15px rgba(255, 255, 255, 0.1),
    -10px 0 15px rgba(255, 255, 255, 0.1);
  animation: ${move} 2s infinite ease-in-out;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 576px) {
    width: 15px;
    height: 15px;
  }
`;

const ContentStyle = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  color: black;
  padding: 30px;
  text-align: center;
  max-width: 600px;
  margin: auto;
`;

const HeroButton = styled(Button)`
  font-size: 1em;
  padding: 10px 20px;
  color: white;
  background-color: #3b82f6;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 20px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const ResponsiveImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 10px;
  margin: 20px 0;

  @media (min-width: 768px) {
    margin-right: 30px;
  }
`;

function HeroSection2() {
  const [ballPosition, setBallPosition] = useState<BallPosition>({
    x: 0,
    y: 0,
  });
  const handleLearnMoreClick = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    setBallPosition({
      x: e.clientX - 5,
      y: e.clientY - 5,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <HeroContainer>
      <AnimatedBackground />
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center">
            <ResponsiveImage src={IMG} alt="Cubeins Logo" />
          </Col>
          <Col xs={12} md={8}>
            <ContentStyle>
              <h1 style={{ color: "#355E93" }}>Cubeins</h1>
              <hr className="my-4" style={{ borderColor: "grey" }} />
              <p
                style={{
                  fontSize: "1.0rem",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                Empowering Young Minds.
              </p>
            </ContentStyle>
          </Col>
        </Row>
      </Container>
      <Ball x={ballPosition.x} y={ballPosition.y} />
    </HeroContainer>
  );
}

export default HeroSection2;
