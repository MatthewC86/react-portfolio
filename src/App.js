import React from 'react';
import Header from './components/Header';
import Nav from './components/Navbar';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);



// Pass users array to the List component as a prop
function App() {
  return (
    <div>
      <Nav/>
      <Header></Header>
      
      
    </div>
  );
}
export default App;