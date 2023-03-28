import Header from "./components/Header"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/Pages/About"
import Portfolio from "./components/Pages/Portfolio"
import Contact from "./components/Pages/Contact"
import Resume from "./components/Pages/Resume"
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Header />
    <Navbar />
    <div className="page-container">
      <div className="content-wrap">
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/resume" element={<Resume />}/>
      </Routes>
      </div>
      <Footer /> 
    </div>
    
    </>
  ) 
}

export default App



