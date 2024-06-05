import React from 'react';
import styled from 'styled-components';
import IMG from "./images/cubeins1.png";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background: linear-gradient(135deg, #000000, #000000);
  color: white;
  position: relative;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  z-index: 1;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 50px;
    text-align: left;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5em;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const HeroSubtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 40px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

const HeroButton = styled.button`
  font-size: 1.2em;
  padding: 15px 40px;
  color: #3b82f6;
  background-color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const HeroImageContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 50%;
  opacity: 0.9;
`;

function HeroSection() {
  const handleLearnMoreClick = () => {
    // Scroll to the next section (you can adjust the value according to your needs)
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Cubeins</HeroTitle>
        <hr />
        <HeroSubtitle>Empowering Young Minds</HeroSubtitle>
        <HeroButton onClick={handleLearnMoreClick}>Learn More</HeroButton>
      </HeroContent>
      <HeroImageContainer>
        <HeroImage src={IMG} alt="Cubeins Logo" />
      </HeroImageContainer>
    </HeroContainer>
  );
}

export default HeroSection;
