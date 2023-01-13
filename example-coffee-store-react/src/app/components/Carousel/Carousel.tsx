import styled from 'styled-components/macro';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import coffeeOne from '../../assets/images/coffee1.jpg';
import coffeeTwo from '../../assets/images/coffee2.jpg';
import coffeeThree from '../../assets/images/coffee3.jpg';

const ImageCarousel = () => {
  return (
    <CarouselWrapper>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        useKeyboardArrows={true}
        showThumbs={false}
        swipeable={true}
        showStatus={false}
      >
        <div>
          <Image src={coffeeOne} alt=" " />
        </div>
        <div>
          <Image src={coffeeTwo} alt=" " />
        </div>
        <div>
          <Image src={coffeeThree} alt=" " />
        </div>
      </Carousel>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  height: auto;
  max-width: 100%;
`;

export default ImageCarousel;
