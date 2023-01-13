import { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export const Footer = (): ReactElement => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLinks>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy policy</li>
            <li>Contact</li>
            <li>About</li>
            <li>Site by Code In Orange</li>
          </ul>
        </FooterLinks>
        <SocialLinks>
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
        </SocialLinks>
        <LineSplit />
      </FooterContent>
      <Copyright>
        Copyright &copy; 2021 All Rights Reserved by{' '}
        <a href="/">ExampleWebsite</a>.
      </Copyright>
    </FooterWrapper>
  );
};

const FooterLinks = styled.ul`
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -ms-flex-align: start;
  -webkit-align-items: flex-start;
  -moz-align-items: flex-start;
  -ms-align-items: flex-start;
  -o-align-items: flex-start;
  align-items: flex-start;
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: auto;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    color: #5e5e5e;
    display: inline-block;
    padding: 0 10px;
    margin-bottom: 10px;
    font-size: 1.1rem;
    letter-spacing: 1px;
  }
`;

const SocialLinks = styled.div`
  padding-bottom: 0;

  svg {
    color: #f4f4f4;
    margin: 10px;
  }
`;

const LineSplit = styled.hr`
  border-top-color: #f4f4f4;
  opacity: 0.5;
`;

const FooterContent = styled.div`
  padding: 0 20px;
`;

const Copyright = styled.p`
  font-family: inherit;
  font-size: 0.9rem;
  margin: 0;
  color: #5e5e5e;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const FooterWrapper = styled.footer`
  text-align: center;
  background-color: #202020;
  padding: 20px 0;
  color: #f4f4f4;
`;
