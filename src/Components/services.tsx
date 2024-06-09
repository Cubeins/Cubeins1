import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLaptop, FaEllipsisH, FaCog } from "react-icons/fa";

const ServicesSection = () => {
  const sectionStyle = {
    background: "linear-gradient(45deg, #0C50B0, #73A3EC, #0C50B0)",
    padding: "60px 20px",
    margin: 0,
    color: "white",
  };

  const serviceStyle = {
    marginBottom: "30px",
  };

  const iconStyle = {
    fontSize: "3rem",
    marginBottom: "20px",
    color: "#FFFFFF",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "15px",
    letterSpacing: "-2px",
  };

  const descriptionStyle = {
    fontSize: "1rem",
  };

  return (
    <section style={sectionStyle}>
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <div style={serviceStyle}>
              <FaLaptop style={iconStyle} />
              <h3 style={titleStyle}>Home Charging Solutions</h3>
              <p style={descriptionStyle}>
                Convenient and efficient home charging solutions for your electric vehicle.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div style={serviceStyle}>
              <FaEllipsisH style={iconStyle} />
              <h3 style={titleStyle}>Installation & Maintenance</h3>
              <p style={descriptionStyle}>
                Professional installation and maintenance services for your EV charging infrastructure.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div style={serviceStyle}>
              <FaCog style={iconStyle} />
              <h3 style={titleStyle}>Solar Integration</h3>
              <p style={descriptionStyle}>
                Implementing solar energy solutions to power your EV charging stations sustainably.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
