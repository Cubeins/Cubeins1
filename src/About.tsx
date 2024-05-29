import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import uploadedImage from "./Components"; // Adjust the path as needed

function AboutUs() {
  const sectionStyle = {
    backgroundColor: "#1e1e1e",
    color: "white",
    padding: "50px 0",
  };

  const iconStyle = {
    fontSize: "2rem",
    marginBottom: "15px",
  };

  const textStyle = {
    color: "#b0b0b0",
  };

  const colStyle = {
    marginBottom: "30px",
  };

  return (
    <div style={sectionStyle}>
      <Container>
        <h2 className="mb-4 ">About Us</h2>
        <p className="mb-5" style={textStyle}>
          We are two entrepreneurs dedicated to making a difference in the tech industry. One of us is a Data Scientist based in England, and the other is a Cyber Security Analyst in Bangalore. Together, we have founded this tech company with the mission to innovate and create cutting-edge technology solutions that meet the needs of our diverse client base.
        </p>
        <Row>
          <Col xs={12} md={6} lg={3} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>Energy Saving</h3>
            <p style={textStyle}>
              Our solutions are designed with energy efficiency in mind, ensuring that we not only help businesses save costs but also contribute to a sustainable future.
            </p>
          </Col>
          <Col xs={12} md={6} lg={3} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-bolt"></i>
            </div>
            <h3>Smart Technology</h3>
            <p style={textStyle}>
              Leveraging the latest advancements in technology, we create smart solutions that are both innovative and practical, helping businesses stay ahead of the curve.
            </p>
          </Col>
          <Col xs={12} md={6} lg={3} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Eco System</h3>
            <p style={textStyle}>
              We are committed to developing products that are environmentally friendly, promoting an ecosystem where technology and nature can coexist harmoniously.
            </p>
          </Col>
          <Col xs={12} md={6} lg={3} style={colStyle}>
            <div style={iconStyle}>
              <i className="fas fa-headset"></i>
            </div>
            <h3>Customer Support</h3>
            <p style={textStyle}>
              Our customer support team is always ready to assist, ensuring that our clients receive the best possible service and support at all times.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
