import React from "react";

export default function About() {
  return (
    <div className="text-center">
        <img className="text-center about-img  m-5" src={require("../Pages/logo.png")}alt="Matthew C"/>
        <h1 classname="about-header m-5 ">About me</h1>
      <p className="content m-5">
        My name is Mattew Courtney and have always had a passion for technology.
        I acquired an associates degree in Systems Developement and Programming
        in 2013, loving every aspect. I'm currently employed with PNC Bank, as
        an Online Banking Support specialist and have been with the company for
        almost 9 years. I love dogs, my family, technology and billiards. I hope
        to obtain a role where I'm recognized for quality work by my peers.
      </p>
    </div>
  );
}


