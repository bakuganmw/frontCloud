import React, { useState } from "react";
import Sidebar from "../components/Sidebar/indeks";
import Navbar from "../components/Navbar/indeks";
import HeroSection from "../components/HeroSection/indeks";
import InfoSection from "../components/InfoSection/indeks";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/data";
import Barbers from "../components/Barbers/indeks";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Barbers/>
    </>
  );
};

export default Home;
