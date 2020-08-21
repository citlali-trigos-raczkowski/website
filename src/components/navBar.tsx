import React, { ReactElement, useState } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Menu } from '@styled-icons/feather';
import { NavLink } from 'react-router-dom';

const NavFont = styled.h1`
  font-family: 'Sue Ellen Francisco', cursive;
  size: 2em;
  color: black;
  @media (max-width: 700px) {
    font-size: 1em;
  }
  &:hover {
    text-shadow: 2px 2px #fcb377;
    cursor: pointer;
  }
`;
const Small = styled(NavFont)`
  size: 1.3em;
  margin-left: 1em;
`;

const Hamburger = styled(Menu)`
  color: transparent;
  height: 2em;
  @media (max-width: 991px) {
    color: white;
    &:hover {
      color: hotpink;
      cursor: pointer;
    }
  }
`;
const Navigation = styled(Navbar)`
  padding: 1em 2em 3em 2em;
`;

export const NavBar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navigation light expand='lg'>
      <NavbarBrand className='transition-swipe'>
        <NavLink to='/home' style={{ textDecoration: 'none' }}>
          <NavFont>Citlali Trigos-Raczkowski </NavFont>
        </NavLink>
      </NavbarBrand>
      <Hamburger onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='justify-content-end' style={{ width: '95%' }}>
          <NavItem>
            <NavLink to='/blog/' style={{ textDecoration: 'none' }}>
              <Small>blog </Small>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/work/' style={{ textDecoration: 'none' }}>
              <Small>work</Small>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navigation>
  );
};
