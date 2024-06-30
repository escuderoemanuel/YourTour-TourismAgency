import React from 'react';
import { Inter } from "next/font/google";
import './AboutUs.css'
const inter = Inter({ subsets: ["latin"] });



const AboutUs = () => {
  return (
    <section className={`min-h-screen py-6 px-16 bg-amber-400`}>
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, enim consectetur. Deserunt voluptatum enim nemo tenetur. Asperiores accusantium eius laboriosam eum assumenda a natus suscipit. Illum pariatur laboriosam magnam atque.
      </p>
    </section>
  );
}

export default AboutUs;
