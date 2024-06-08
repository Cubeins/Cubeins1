import React, { useState, useCallback, Suspense, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap CSS is imported
import HeroSection2 from "./Components/Hero";

const About = React.lazy(() => import("./About"));
const Team = React.lazy(() => import("./Components/team"));
const Services2 = React.lazy(() => import("./Components/services2"));
const ServicesSection = React.lazy(() => import("./Components/services"));
const ContactMeSection = React.lazy(() => import("./Components/contact"));
const CTASection = React.lazy(() => import("./Components/colaberation"));
const LoadingScreen = React.lazy(() => import("./Components/loading")); // Make sure the path is correct

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            {/* <Navbar.Brand href="#">Cubeins</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-center"
            >
              <Nav>
                <Nav.Link onClick={() => scrollToSection("hero-section")}>
                  Home
                </Nav.Link>
                <Nav.Link onClick={() => scrollToSection("about-section")}>
                  About
                </Nav.Link>
                <Nav.Link onClick={() => scrollToSection("team-section")}>
                  Team
                </Nav.Link>
                <Nav.Link onClick={() => scrollToSection("services-section")}>
                  Services
                </Nav.Link>
                <Nav.Link onClick={() => scrollToSection("contact-section")}>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div id="hero-section">
          <HeroSection2 />
        </div>

        <div id="about-section">
          <About />
        </div>
        <div id="team-section">
          <Team />
        </div>
        <div id="services-section">
          <Services2 />
          <ServicesSection />
        </div>
        <div id="contact-section">
          <ContactMeSection />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
