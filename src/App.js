import React from 'react';
import Header from './components/Header';
import Nav from './components/Navbar';



// Pass users array to the List component as a prop
export default function App() {
  return (
    <div>
      <Header></Header>
      <Nav />
      
    </div>
  );
}