import styled from 'styled-components';
import { IMenuProps } from './IMenuProps';

export const Menu = styled.div<IMenuProps>`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    padding-top: ${({ isOpen }) => (isOpen ? '50px' : '0')};
    overflow: hidden;
    flex-direction: column;
    height: ${({ isOpen }) => (isOpen ? '100vh' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
    background-color: #dadada;
    z-index: 2;
  }
`;
