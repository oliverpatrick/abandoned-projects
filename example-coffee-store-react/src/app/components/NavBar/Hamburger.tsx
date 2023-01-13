import styled from 'styled-components/macro';
import { IMenuProps } from './IMenuProps';

export const Hamburger = styled.div<IMenuProps>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 1rem;

  svg {
    height: 25px;
    width: 25px;
    color: ${({ isOpen }) => (isOpen ? '#202020' : '#dadada')};
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
