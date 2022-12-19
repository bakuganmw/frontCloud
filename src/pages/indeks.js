import React, { useState } from "react";
import Sidebar from "../components/Sidebar/indeks";
import Navbar from "../components/Navbar/indeks";
import HeroSection from "../components/HeroSection/indeks";
import InfoSection from "../components/InfoSection/indeks";
import { homeObjOne } from "../components/InfoSection/data";
import Barbers from "../components/Barbers/indeks";
import Services from "../components/Services/indeks";

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
      <Services />
      <Barbers />
    </>
  );
};

export default Home;
