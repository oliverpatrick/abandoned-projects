import styled from 'styled-components/macro';

type WithChildren<T = {}> = T & { children?: React.ReactNode };

type HeroProps = WithChildren<{
  title?: string;
  paragraph?: string;
  backgroundImage?: string;
}>;

const HeroSection = ({
  title,
  paragraph,
  backgroundImage,
  children,
}: HeroProps) => {
  return (
    <HeroWrapper>
      <HeroSeparator />
      <HeroTitle>{title}</HeroTitle>
      {paragraph ? <p>{paragraph}</p> : null}
      {children}
      {backgroundImage ? (
        <ImageBackground src={backgroundImage} alt="" />
      ) : null}
    </HeroWrapper>
  );
};

const HeroSeparator = styled.hr`
  content: '';
  display: block;
  width: 30%;
  height: 3px;
  margin-bottom: 20px;
  background-color: #cac9b8;
  margin: 0 auto 20px;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  margin: 0 0 20px;
  z-index: 1;
`;

const ImageBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  height: 100%;
  z-index: -1;
  opacity: 0.5;
`;

const HeroWrapper = styled.section`
  position: relative;
  text-align: center;
  z-index: 1;
  padding: 3rem 0;

  p {
    padding: 0 2rem;
    margin: 3rem 0;
    font-family: inherit;
  }

  h2 {
    margin: 0;
  }

  h4 {
    font-weight: 200;
    margin: 0;
    margin-bottom: 1rem;
    padding: 0 10%;
  }
`;

export default HeroSection;
