import React from 'react';

export default function Nav() {
  const NavLink = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          float: 'right',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        {['About', 'Portfolio', 'Contact', 'Resume']
        .map(navi => (
          <div style={NavLink}>
          <a href={"#" + navi.toLowerCase()}>{navi}</a>
        </div>
        ))}
        
        
      </section>
    </nav>
  );
};





