// import React from 'react';

// import Header from './components/Header';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Navba from './components/Navbar/Navbar';
// // import About from './components/About/About';
// // import Footer from './components/Footer/Footer';
// // import Contact from './components/Contact';
// // import Contact from './components/Contact';
// // import Portfolio from './components/Portfolio';
// // import { library } from "@fortawesome/fontawesome-svg-core";
// // import { fab } from "@fortawesome/free-brands-svg-icons";

// // library.add(fab);

// // Pass users array to the List component as a prop
// function App() {
//   return (
//     <div>
//       <Nav/>
//       <Header/>
//       {/* <About/> */}
//       {/* <Contact/> */}
//       {/* <Footer/>  */}
//       </div>

//   );
// }
// export default App;

// import "./index.css";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar"
// import About from "./components/Pages/About/About";
// import Portfolio from "./components/Pages/Portfolio/Portfolio";
// import Contact from "./components/Pages/Contact/Contact";
// import Resume from "./components/Pages/Resume/Resume";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//       <Routes>
//         <Route exact path="/" element={<About />}></Route>
//         <Route path="/Portfolio" element={<Portfolio />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/Resume" element={<Resume />} />
//       </Routes>
//       </div>
//     </>
//   );
// }

// export default App;

import Navbar from "./components/Navbar/Navbar"

function App() {
  return <Navbar />
}

export default App

