import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
} from "../Navbar/NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/home">Crazy Scissors</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
