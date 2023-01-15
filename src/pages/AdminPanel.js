import React, { useState } from "react";
import Sidebar from "../components/Sidebar/indeks";
import ReservationNavbar from "../components/ReservationNavbar/indeks";
import {
  Form,
  FormButton,
  FormInput,
  FormLabel,
} from "../components/SignIn/SignInElements";
const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ReservationNavbar toggle={toggle} />
      <Form>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput type="text" id="name" autoComplete="off" required />
        <FormLabel htmlFor="text">Description</FormLabel>
        <FormInput type="text" id="description" autoComplete="off" required />
        <FormButton type="submit">Add a service</FormButton>
      </Form>
    </>
  );
};

export default AdminPanel;
