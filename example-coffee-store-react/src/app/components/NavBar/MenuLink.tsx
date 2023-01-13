import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { IMenuProps } from './IMenuProps';

export const MenuLink = styled(Link)<IMenuProps>`
  padding: 1rem 0.75rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${({ isOpen }) => (isOpen ? '#202020' : '#d8d8d8')};
  transition: all 0.3s ease-in;
  font-size: 1rem;
  position: relative;
  z-index: 10;

  &:hover {
    color: #a8a8a8;
  }

  @media (max-width: 768px) {
    font-weight: 600;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      width: 0;
      margin: 0 auto;
      transition: all 0.3s linear 0s;
    }

    &:hover:after {
      width: 70%;
      color: #a8a8a8;
      border: 1px solid;
    }
  }
`;
