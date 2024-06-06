import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import hassanImg from "./images/hassan.jpg"; // Replace with actual image path
import wallaceImg from "./images/wallace.jpg"; // Replace with actual image path

function Team() {
  const sectionStyle = {
    backgroundColor: "#000000", // Updated to black background
    color: "#ffffff", // Text color changed to white
    padding: "50px 0",
  };

  const cardStyle = {
    backgroundColor: "#1f1f1f", // Darker background color
    borderColor: "#2c2c2c", // Darker border color
    marginBottom: "30px",
  };

  const textStyle = {
    color: "#ffffff", // Text color changed to white
  };

  const iconStyle = {
    fontSize: "1.5rem",
    marginBottom: "15px",
    color: "#007bff",
  };

  const imgStyle = {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    marginBottom: "15px",
  };

  return (
    <div style={sectionStyle}>
      <Container>
        <h2 className="mb-4">Our Team</h2>
        <hr />
        <Row>
          {teamMembers.map((member, index) => (
            <Col xs={12} md={6} lg={6} key={index}>
              <Card style={cardStyle}>
                <Card.Body>
                  <img src={member.image} alt={member.name} style={imgStyle} />
                  <Card.Title style={textStyle}>{member.name}</Card.Title>
                  <hr />
                  <Card.Subtitle className="mb-2" style={textStyle}>
                    <i className={member.icon} style={iconStyle}></i>{" "}
                    {member.role}
                  </Card.Subtitle>
                  <Card.Text style={textStyle}>{member.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

const teamMembers = [
  {
    name: "Hassan Mulla",
    role: "Data Scientist",
    description:
      "Hassan is a skilled data scientist with a passion for turning data into actionable insights.",
    image: hassanImg,
    icon: "fas fa-database",
  },
  {
    name: "Wallace Scott",
    role: "Software Engineer",
    description:
      "Wallace is a talented software engineer who specializes in building scalable and efficient software solutions.",
    image: wallaceImg,
    icon: "fas fa-code",
  },
];

export default Team;
