import React, { useState } from "react";
import Sidebar from "../components/Sidebar/indeks";
import ReservationNavbar from "../components/ReservationNavbar/indeks";
import ReservationForm from "../components/ReservationForm/indeks";
const ReservationsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ReservationNavbar toggle={toggle} />
      <div>ReservationsPage</div>
      <ReservationForm/>
    </>
  );
};

export default ReservationsPage;
