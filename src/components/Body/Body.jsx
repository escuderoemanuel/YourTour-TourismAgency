import React from 'react';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Home from '../Home/Home';
import './Body.css'
import AboutUs from '../AboutUs/AboutUs';
import Excursions from '../Excursions/Excursions';
import Services from '../Services/Services';
import Whatsapp from '../Whatsapp/Whatsapp';

const Body = () => {
  return (
    <section className={`flex flex-col py-6 px-16 gap-4`}>
      <Home />
      <AboutUs />
      <Excursions />
      <Services />
      <Whatsapp />
    </section>
  );
}

export default Body;
