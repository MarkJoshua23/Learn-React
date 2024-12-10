import React from "react";
import Hero from './components/Hero';
import About from './components/About';

const App = () => {
  //min-h-screen is a tailwind class that sets the minimum height of the element to the height of the viewport.
  return (
    <main className="relative min-h-screen w-screen">
      <Hero />
      <About />
      <section className="min-h-screen w-full bg-blue-300"></section>
    </main>
  );
};

export default App;
