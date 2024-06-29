import React from 'react';
import { Inter } from "next/font/google";
import Home from '../Home/Home';
import './Body.css'
import AboutUs from '../AboutUs/AboutUs';
const inter = Inter({ subsets: ["latin"] });

const Body = () => {
  return (
    <section className='bodySection'>
      <Home />
      <AboutUs />
    </section>
  );
}

export default Body;
