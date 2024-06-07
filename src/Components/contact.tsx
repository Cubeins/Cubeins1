import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaEnvelope, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactMeSection = () => {
  const handleOpenURL = () => {
    window.open(
      "https://img1.wsimg.com/blobby/go/c2d42004-8296-4a70-9aaa-ea7e3f01228f/Wallace%20Dsouza.pdf",
      "_blank"
    );
  };

  return (
    <section
      className="contact-me-section"
      style={{
        backgroundColor: "black",
        color: "#FFFFFF",
        padding: "50px 0",
        margin: 0,
      }}
    >
      <Container>
        <h1 className="mb-4">Contact Us.</h1>
        <hr className="my-4" style={{ borderColor: "#FFCA2C" }} />
        <p className="mb-4">Feel free to reach out to me for any inquiries.</p>
        <Row className="contact-details">
          <Col md={6} lg={6}>
            <div className="mb-3">
              <p style={{ color: "#FFFFFF" }}>
                <FaEnvelope /> Email: cubeins69@gmail.com
              </p>
            </div>

            <div>
              <p style={{ color: "#FFFFFF" }}>
                <FaInstagram /> Instagram:{" "}
                <a
                  href="https://www.instagram.com/cubeins?igsh=MWtyZHNrMnNwdXNzeg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FFFFFF" }}
                >
                  cubeins
                </a>
              </p>
            </div>
          </Col>
          <Col md={6} lg={6} className="text-center mt-3 mt-md-0">
            {/* <Button
              variant="outline-warning"
              style={{
                borderRadius: 0,
                fontSize: "1rem",
                fontWeight: "lighter",
                color: "white",
                width: "100%",
              }}
              onClick={handleOpenURL}
            >
              Download Complete Resume
            </Button> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactMeSection;
