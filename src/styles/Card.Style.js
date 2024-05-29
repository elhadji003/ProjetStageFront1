"use client"
import styled from 'styled-components';

export const CardContainer = styled.section`
  width: 100%;
`;

export const Title = styled.div`
  position: relative;
  width: min-content;
  color: ${props => props.theme.textColor};
  margin: 2rem 0;
  z-index: 2;

  &::after {
    position: absolute;
    content: '';
    background: ${props => props.theme.secondaryColor};
    height: 5px;
    width: 120px;
    right: 0;
    bottom: 5px;
    z-index: -1;
  }
`;

export const Content = styled.div`
  padding: 3rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (min-width: 320px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: auto;    
  }

  @media (min-width: 375px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    
  }
  @media (min-width: 425px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    
  }

  @media (min-width: 567px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const IconRow = styled.div`
  width: 330px;
  hight: 100px;
  display: flex;
  padding: 0.5rem; 
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background: ${props => props.theme.cardBg};
  box-shadow: 0 2px 4 rgba(140, 140, 141, 0.549);
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    background: ${props => props.theme.cardHover};
    box-shadow: 1 4px 4 rgba(140, 140, 141, 0.549);
    transition: 0.3 ease;
  }

  @media (min-width: 320px) {
    width: 300px;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    width: 260px;
    gap: 1rem;
  }

  @media (min-width: 1280px) {
    width: 320px;
    position: relative;
    left: 1.5rem;
  }
`;

export const BorderIcon = styled.div`
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px
`

export const ImageContainer = styled.div`
  height: 200px;
  width: 350px;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 2s ease;
`;

export const CardInfo = styled.div`
  padding: 0rem;
`;

export const DestinationTitle = styled.span`
  color: ${props => props.theme.blackColor};
  font-size: 24px;
  font-weight: 600;
`;

export const Continent = styled.div`
  gap: 0.5rem;
`;

export const Icon = styled.span`
  color: ${props => props.theme.textColor};
  font-size: 18px;
`;

export const Number = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

export const Partie = styled.span`
  font-weight: 400;
  font-size: 14px;
`;

export const Price = styled.div`
  width: 100%;
  justify-content: space-between;
  margin: 1em 0;
  font-size: 14px;
  color: ${props => props.theme.priceColor};
`;

export const Grade = styled.div`
  color: ${props => props.theme.textColor};
  min-width: 100px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Small = styled.small`
  text-align: center;
  background: ${props => props.theme.gradientColor};
  border-radius: 1rem;
  color: ${props => props.theme.whiteColor};
  padding: 1px 10px;
  font-size: 10px;
`;

export const Description = styled.div`
  font-size: 13.5px;
  color: ${props => props.theme.textColor};
  font-weight: 500;
`;

export const Button = styled.div`
  margin-top: 1rem;
  color: ${props => props.theme.whiteColor};
  font-weight: 500;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const ButtonIcon = styled.span`
  align-self: center;
  font-size: 18px;
`;

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
`;

export const StyledPrice = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;



// Define more styled-components for colors and other elements if needed...

