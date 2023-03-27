// import React from 'react';

// export default function Nav() {
//   const NavLink = { border: '1px black', padding: '5px' };

//   return (
//     <nav className="main-header-menu">
//       <section
//         style={{
//           display: 'flex',
//           float: 'right',
//           fontFamily: 'helvetica',
//           flexDirection: 'row',
//           alignItems: 'flex-start',
//           justifyContent: 'flex-start',
//         }}
//       >
//         {['About', 'Portfolio', 'Contact', 'Resume']
//         .map(navi => (
//           <div style={NavLink}>
//           <a href={"#" + navi.toLowerCase()}>{navi}</a>
//         </div>
//         ))}

//       </section>
//     </nav>
//   );
// };

// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="nav">
//       <ul>
//         <CustomLink to="/" className="About">About</CustomLink>
//         <CustomLink to="./components/Pages/Portfolio/Portfolio">Portfolio</CustomLink>
//         <CustomLink to="./components/Pages/Contact/Contact">Contact</CustomLink>
//         <CustomLink to="./components/Pages/Resume/Resume">Resume</CustomLink>
//         </ul>
//       </nav>

//   )
// }

// function CustomLink({ href, children, ...props}) {
//   const path = window.location.pathname

//   return (
//     <li className={path === href ? "active" : ""}>
//       <Link href={href} {...props}>
//         {children}
//       </Link>

//     </li>
//   )
// }

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="title">
        Matthew C
      </a>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
}
