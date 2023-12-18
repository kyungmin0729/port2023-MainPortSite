import React from "react";
import Header from "../Header";
import Skip from "../Skip";
import Intro from "../Intro";
import Site from "../Site";
import Contact from "../Contact";
import Footer from "../Footer";
import Main from "../Main";

const HomeView = () => {
  return (
    <div className="HomeView">
      <Skip />
      <Header />
      <Main>
        <Intro />

        <Site />
        <Contact />
      </Main>
      <Footer />
    </div>
  );
};

export default HomeView;
