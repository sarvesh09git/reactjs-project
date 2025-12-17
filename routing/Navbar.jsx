import React from "react";
import "./Navbar.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import img from "./images/coffee-hero-section.png"
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";



const Navbar = () => {
  return (
    <>
    <BrowserRouter>
<nav className="navbar">
<div className="nav-logo">
<span className="coffee-icon" data-aos="fade-down" data-aos-duration="1000">☕</span>
<span className="brand" data-aos="fade-down" data-aos-duration="1000">Coffee</span>
</div>


<ul className="nav-links">
<li><a href="/Home" data-aos="fade-down" data-aos-duration="1000" >Home</a></li>
<li><a href="/About" data-aos="fade-down" data-aos-duration="1000" >About</a></li>
<li><a href="/Menu"  data-aos="fade-down" data-aos-duration="1000">Menu</a></li>
<li><a href="/Contact" data-aos="fade-down" data-aos-duration="1000" >Contact</a></li>
</ul>
</nav>



<div className="text" data-aos="fade-down" data-aos-duration="3500"> <span>Best Coffee</span> </div> <div className="text1"> 
  <span data-aos="fade-down" data-aos-duration="4000">Make Your Day Great With our Special Offer </span> </div> <div className="text2"> 
    <span data-aos="fade-down" data-aos-duration="5000">Welcome To Your Coffee Paradise,Where Beans Tells a Story Of Every Cup Sparks Joy. </span> </div>
 <button className="order" data-aos="fade-down" data-aos-duration="5500">Order Now </button>

<div className="hero-right" data-aos="fade-down" data-aos-duration="1500" >

<img src={img} alt="Coffee" />
</div>
  <Routes>
  <Route path='/' element={<h1>hello</h1>}/>
    <Route path='/About' element={<About/>}/>
  <Route path='/Menu' element={<Menu/>}/>
    <Route path='/Contact' element={<Contact/>}/>
</Routes>
</BrowserRouter>  

</>

  );
}

export default Navbar;
