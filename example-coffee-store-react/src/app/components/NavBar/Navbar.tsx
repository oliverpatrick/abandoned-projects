import { useState } from 'react';
import styled from 'styled-components/macro';

import { FaBars, FaTimes } from 'react-icons/fa';

import { Hamburger } from './Hamburger';
import { Menu } from './Menu';
import { MenuLink } from './MenuLink';
import { Logo } from './Logo';
import { MenuSocialLink } from './MenuSocialLinks';
import { IMenuProps } from './IMenuProps';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleHamburgerMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <Nav isOpen={isOpen}>
      <Logo isOpen={isOpen} href="">
        Example<span>Website</span>
      </Logo>
      {isOpen ? (
        <Hamburger isOpen={isOpen}>
          <FaTimes onClick={handleHamburgerMenu} />
        </Hamburger>
      ) : (
        <Hamburger isOpen={isOpen}>
          <FaBars onClick={handleHamburgerMenu} />
        </Hamburger>
      )}
      <Menu isOpen={isOpen}>
        <MenuLink
          isOpen={isOpen}
          onClick={handleHamburgerMenu}
          to="/example-react-site"
        >
          Home
        </MenuLink>
        <MenuLink
          isOpen={isOpen}
          onClick={handleHamburgerMenu}
          to="/example-react-site/events"
        >
          Events
        </MenuLink>
        <MenuLink
          isOpen={isOpen}
          onClick={handleHamburgerMenu}
          to="/example-react-site/about"
        >
          About
        </MenuLink>
        <MenuLink
          isOpen={isOpen}
          onClick={handleHamburgerMenu}
          to="/example-react-site/contact"
        >
          Contact
        </MenuLink>
        <MenuSocialLink isOpen={isOpen} onClick={handleHamburgerMenu} href="">
          Facebook
        </MenuSocialLink>
        <MenuSocialLink isOpen={isOpen} onClick={handleHamburgerMenu} href="">
          Twitter
        </MenuSocialLink>
        <MenuSocialLink isOpen={isOpen} onClick={handleHamburgerMenu} href="">
          Instagram
        </MenuSocialLink>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div<IMenuProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: ${({ isOpen }) => (isOpen ? '#dadada' : '#202020')};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: color 2s ease-in;
  height: 4.5rem;
`;
