import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faLinkedin  } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="flex flex-row items center justify-center min-h-screen py-2">
      <a href="https://github.com/MatthewC86"><FontAwesomeIcon icon={faGithub} />
      </a>

      <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} />
      </a>

      <a href="www.linkedin.com/in/matthew-courtney-83143998"><FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
}

export default Footer;
