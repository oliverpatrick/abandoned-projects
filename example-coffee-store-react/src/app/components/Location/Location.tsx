import styled from 'styled-components/macro';

import coffeeOne from '../../assets/images/coffee1.jpg';
import Button from '../Button/Button';

interface LocationProps {
  right: boolean;
}

const Location = ({ right }: LocationProps) => {
  return (
    <LocationWrapper>
      {right ? (
        <>
          <AddressWrapper>
            <hr></hr>
            <h4>Example Drive</h4>
            <p>
              <a href="/">224 Bakers Street</a>
              <p>
                <strong>Weekdays</strong> 8am - 8pm
              </p>
              <p>
                <strong>Saturdays</strong> 10am - 5pm
              </p>
              <p>
                <strong>Sunday</strong> 10am - 4pm
              </p>
            </p>
            <Button text="Get Directions"></Button>
          </AddressWrapper>
          <ImageWrapper src={coffeeOne} alt="" />
        </>
      ) : (
        <>
          <ImageWrapper src={coffeeOne} alt="" />
          <AddressWrapper>
            <hr></hr>
            <h4>Example Drive</h4>
            <p>
              <a href="/">224 Bakers Street, London, L20 3DE</a>
              <p>
                <strong>Weekdays</strong> 8am - 8pm
              </p>
              <p>
                <strong>Saturdays</strong> 10am - 5pm
              </p>
              <p>
                <strong>Sunday</strong> 10am - 4pm
              </p>
            </p>
            <Button text="Get Directions"></Button>
          </AddressWrapper>
        </>
      )}
    </LocationWrapper>
  );
};

const LocationWrapper = styled.div`
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
  }
`;

const ImageWrapper = styled.img`
  width: 50%;

  @media (max-width: 760px) {
    width: 100%;
  }
`;

const AddressWrapper = styled.div`
  width: 50%;
  padding: 100px 10%;
  /* text-align: center; */

  @media (max-width: 760px) {
    width: 100%;
  }

  hr {
    float: left;
    width: 30%;
  }

  a {
    color: #f4f4f4;
    text-decoration: none;
  }
`;

export default Location;
