import styled from 'styled-components/macro';

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <ButtonWrapper>{text}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  color: #cac9b8;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  padding: 10px 30px;
  background: none;
  outline: 2px solid #cac9b8;
  transition: outline 0.1s linear;
  border: none;
`;

export default Button;
