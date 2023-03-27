import Navbar from "./components/Navbar/Navbar"
import About from "./components/Pages/About"
import Portfolio from "./components/Pages/Portfolio"
import Contact from "./components/Pages/Contact"
import Resume from "./components/Pages/Resume"
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/resume" element={<Resume />}/>
      </Routes>
    </div>
    </>
  ) 
}

export default App

