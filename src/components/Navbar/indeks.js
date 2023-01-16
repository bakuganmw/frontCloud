import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import getUser from "../storage";
const Navbar = ({ toggle }) => {
  const user = getUser();
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/home">Crazy Scissors</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavBtn>
              {user.isAdmin ? (
                <NavBtnLink to="AdminPanel">Admin Panel</NavBtnLink>
              ) : (
                <NavBtnLink to="reservations">Reservations</NavBtnLink>
              )}
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
