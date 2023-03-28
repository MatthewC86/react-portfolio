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
