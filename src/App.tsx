import React, { useState, useCallback, Suspense, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import SnakeGame from "./snake";

const About = React.lazy(() => import("./About"));
const Hero = React.lazy(() => import("./Components/Hero"));
const CurrentProjects = React.lazy(() => import("./Components/currentprojects"));
const HeroSection = React.lazy(() => import("./Components/heroSection"));
const Services2 = React.lazy(() => import("./Components/services2"));
const Team = React.lazy(() => import("./Components/team"));
const ServicesSection = React.lazy(() => import("./Components/services"));
const ContactMeSection = React.lazy(() => import("./Components/contact"));
const CTASection = React.lazy(() => import("./Components/colaberation"));
const InternshipCTASection = React.lazy(() => import("./Internship"));
const LoadingScreen = React.lazy(() => import("./Components/loading")); // Make sure the path is correct

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleShowModal = useCallback(() => setShowModal(true), []);
  const handleCloseModal = useCallback(() => setShowModal(false), []);
  const handleSendMessage = useCallback(() => {
    // Implement sending message functionality here
    handleCloseModal();
  }, [handleCloseModal]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LoadingScreen onComplete={handleLoadingComplete} />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <HeroSection />
      </div>

      <div>
        <About />
      </div>
      <div>
        <Team />
      </div>
      <div>
        <Services2 />
        <ServicesSection />
      </div>

      <div>
        <CTASection />
      </div>
     

      <div>
        <ContactMeSection />
      </div>

      {/* <Button
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
      </Modal> */}
    </Suspense>
  );
};

export default App;
