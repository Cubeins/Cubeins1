import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import hassanImg from "./images/musroom.jpg"; // Replace with actual image path
import wallaceImg from "./images/wallace.jpg"; // Replace with actual image path

function Team() {
  const sectionStyle = {
    // backgroundColor: "#343a40",
    background: "linear-gradient(45deg, #0C50B0, #73A3EC, #0C50B0)",

    color: "white",
    padding: "50px 0",
  };

  const cardStyle = {
    backgroundColor: "#495057",
    borderColor: "#495057",
    marginBottom: "30px",
    textAlign: "center",
  };

  const textStyle = {
    color: "white",
  };

  const iconStyle = {
    fontSize: "1.5rem",
    // color: "#007bff",
    marginBottom: "15px",
  };

  const imgStyle = {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    objectFit: "cover",
    marginBottom: "15px",
  };

  return (
    <div style={sectionStyle}>
      <Container>
        <h2 className="mb-4 ">Our Team</h2>
        <Row>
          {teamMembers.map((member, index) => (
            <Col xs={12} md={6} lg={6} key={index}>
              <Card
                style={{
                  backgroundColor: "rgba(73, 80, 87, 0.1)", // Adjust the transparency level here (0.8 represents 80% opacity)
                  // borderColor: "#495057",
                  marginBottom: "30px",
                  textAlign: "center",
                }}
              >
                <Card.Body>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      borderRadius: "50%",
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      marginBottom: "15px",
                    }}
                  />
                  <Card.Title>{member.name}</Card.Title>
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
