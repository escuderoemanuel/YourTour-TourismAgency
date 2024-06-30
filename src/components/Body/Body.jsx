import React from 'react';
import { Inter, Raleway } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ weight: ["400"], subsets: ["latin"] });
import './Body.css'
import AboutUs from '../AboutUs/AboutUs';
import Excursions from '../Excursions/Excursions';
import Services from '../Services/Services';
import Whatsapp from '../Whatsapp/Whatsapp';
import Welcome from '../Welcome/Welcome';
import ContactUs from '../ContactUs/ContactUs';

const Body = () => {
  return (
    <section className={`flex flex-col py-6 px-16 gap-4 ${raleway.className} `}>
      <Welcome />
      <AboutUs />
      <Excursions />
      <Services />
      <ContactUs />
      <Whatsapp />
    </section>
  );
}

export default Body;
