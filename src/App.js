import React from 'react';

import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Navbar';
// import About from './components/About/About';
// import Footer from './components/Footer/Footer';
// import Contact from './components/Contact';
// import Contact from './components/Contact';
// import Portfolio from './components/Portfolio';
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";

// library.add(fab);



// Pass users array to the List component as a prop
function App() {
  return (
    <div>
      <Nav/>
      <Header/>
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Footer/>  */}
      </div>
    
  );
}
export default App;