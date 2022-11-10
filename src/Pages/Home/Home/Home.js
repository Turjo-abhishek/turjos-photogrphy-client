import React from "react";
import Services from "../Services/Services";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Turjo's Photography - Home</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Features></Features>
    </div>
  );
};

export default Home;
