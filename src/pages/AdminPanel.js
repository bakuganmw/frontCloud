import React, { useState } from "react";
import Sidebar from '../components/Sidebar/indeks';
import ReservationNavbar from "../components/ReservationNavbar/indeks";
const AdminPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <ReservationNavbar toggle={toggle} />
    <div>AdminPanel</div>
    </>
    
  )
}

export default AdminPanel