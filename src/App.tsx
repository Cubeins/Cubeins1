import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap"; // Importing Button and Modal from react-bootstrap

import About from "./About";
import Hero from "./Components/Hero";
import CurrentProjects from "./Components/currentprojects";
import HeroSection from "./Components/heroSection";
import Services2 from "./Components/services2";
import Team from "./Components/team";
import ServicesSection from "./Components/services";
import ContactMeSection from "./Components/contact";
import CTASection from "./Components/colaberation";
import InternshipCTASection from "./Internship";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSendMessage = () => {
    // Implement sending message functionality here
    // For example, you can send a request to your backend API
    // to handle the message submission
    handleCloseModal();
  };

  return (
    <>
      <div>
        <HeroSection></HeroSection>
      </div>

      <div>
        <About></About>
      </div>
      <div>
        <Team></Team>
      </div>
      <div>
      <Services2></Services2>
      <ServicesSection></ServicesSection>
      </div>
      
      <div>
        <CTASection></CTASection>
      </div> 

      <div>
        <ContactMeSection></ContactMeSection>
      </div>

      <Button
        onClick={handleShowModal}
        style={{
          position: "fixed",
          left: "20px",
          bottom: "20px",
          zIndex: "1000",
          borderRadius: "50%", // Making the button round
          width: "60px",
          height: "60px",
          fontSize: "30px",
        }}
      >
        <i className="fas fa-envelope"></i>
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Get in Touch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSendMessage}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
