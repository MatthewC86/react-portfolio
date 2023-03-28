import React from "react";
import { Container } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-light py-3">
      <div className="text-center">
        <a
          href="www.linkedin.com/in/matthew-courtney-83143998"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light mx-3">
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://github.com/Matthewc86"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light mx-3">
          <FaGithub size={32} />
        </a>
        <a href="mailto:cnymhw86@gmail.com" className="text-light mx-3">
          <FaEnvelope size={32} />
        </a>
      </div>
      <div className="text-center mt-3">
        <p>&copy; All rights reserved.</p>
      </div>
    </Container>
  );
};

export default Footer;