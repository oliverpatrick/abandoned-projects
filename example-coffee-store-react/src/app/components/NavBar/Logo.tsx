import styled from 'styled-components/macro';
import { IMenuProps } from './IMenuProps';

export const Logo = styled.a<IMenuProps>`
  padding: 1rem;
  color: ${({ isOpen }) => (isOpen ? '#202020' : '#dadada')};
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;
