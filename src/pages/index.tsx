import type { NextPage } from "next";

import { Navbar } from "../components";
import { About, Header, Footer, Skills, Testimonial, Work } from "../container";

const Home: NextPage = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
