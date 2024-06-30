import './Welcome.css'
import React from 'react';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });



const Welcome = () => {
  return (
    <section className={`min-h-screen py-6 px-16 bg-amber-400`}>
      <h2>Welcome</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, enim consectetur. Deserunt voluptatum enim nemo tenetur. Asperiores accusantium eius laboriosam eum assumenda a natus suscipit. Illum pariatur laboriosam magnam atque.
      </p>
    </section>
  );
}

export default Welcome;
