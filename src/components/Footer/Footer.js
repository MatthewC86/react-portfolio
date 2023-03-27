import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faFacebook, faLinkedin  } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (

//     <footer className="footer">
// 			<div>
// 			<a href="https://github.com/" class="fa fa-github"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					{/* <img
// 						src={require("../../assets/logos/github-logo.png")}
// 						alt="Github"
// 						className="logo"
// 					></img> */}
// 				</a>
// 			</div>
// 			<div>
// 				<a
// 					href="www.linkedin.com/in/matthew-courtney-83143998"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					<img
// 						src={require("../Footer/linkedin.png")}
// 						alt="LinkedIn"
// 						className="logo"
// 					></img>
// 				</a>
// 			</div> 
// 			 <div> 
// 				<a
// 					href="https://facebook.com"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					<img
// 						src={require("../Footer/facebook.png")}
// 						alt="Facebook"
// 						className="logo"
// 					></img>
// 				</a>
// 			</div>
// 		</footer>
//   );
// }
<footer>
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/username"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/username"><i className="fab fa-linkedin"></i></a>
          <a href="https://stackoverflow.com/users/1234567/username"><i className="fab fa-stack-overflow"></i></a>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
