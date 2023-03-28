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

import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/about" className="title">
        Matthews Portfolio
      </Link>
      <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/portfolio">Portfolio</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="https://docs.google.com/document/d/16casLWu7l25t-JGJkEKw26k2opi5o3TmjfGNfZ1jadg/edit?usp=sharing" target="_blank">Resume</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}
