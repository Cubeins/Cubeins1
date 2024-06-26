import React from "react";
import { Container, Button } from "react-bootstrap";

const CTASection = () => {
  const gradientStyle = {
    background: "linear-gradient(45deg, #000000, #000000)",
    color: "white",
    padding: "60px 20px",
    margin: 0,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const titleStyle = {
    letterSpacing: "-2px",
    fontWeight: "700",
  };

  const handleContactClick = () => {
    // Replace with your email address
    const email = "cubeins69@gmail.com";
    window.location.href = `mailto:${email}`;
  };

  return (
    <section style={gradientStyle} className="">
      <Container>
        <h2 className="display-1 mb-4" style={titleStyle}>
          Ready to start your next project? Contact us for a consultation.
        </h2>
        <p className="lead mb-4">Join us now and enjoy an additional 5% off.</p>
        <Button
          variant="outline-primary"
          size="lg"
          style={{ color: "white" }}
          onClick={handleContactClick}
        >
          Contact Us For Consultation.
        </Button>
      </Container>
    </section>
  );
};

export default CTASection;
