"use client"
import styled from "styled-components"; 

export const HotelSection = styled.section`
`;


export const SecContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  @media screen and (min-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const SingleDestination = styled.div`
  margin: 0 auto;
  height: auto;
  display: grid;
  row-gap: 10px;
  align-items: center;
  border-radius: 10px;
  background: var(--cardBg);
  box-shadow: 0 2px 4 rgba(140, 140, 141, 0.549);
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;


  @media screen and (min-width: 320px) {
    width: auto;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
  @media screen and (min-width: 1024px) {
    width: 250px;
  }
  @media screen and (min-width: 1280px) {
    width: 230px;
    position: relative;
  }
  @media screen and (min-width: 1536px) {
    width: 250px;
  }
`;

export const ImageDiv = styled.div`
  height: 150px;
  width: 250px;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: 320px) {
    width: auto;
    height: 200px
  };
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 200px;
  };
  @media screen and (min-width: 1024px) {
    width: 250px;
    height: 200px;
  };
  @media screen and (min-width: 1280px) {
    width: 300px;
    height: 200px;
  };
  @media screen and (min-width: 1536px) {
    width: 300px;
    height: 200px;
  }
`;

export const CardInfo = styled.div`
  padding: 1rem;
`;

export const Continent = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const Address = styled.span`
  font-size: 0.6rem;
  color: red;




  @media screen and (min-width: 320px) {
    font-size: 0.8rem;
    font-weight: bold;
  }
  @media screen and (min-width: 1024px) {
    font-size: 0.6rem;
    font-weight: bold;
  }
`;

export const DestTitle = styled.p`
  font-size: 0.7rem;
  word-wrap: break-word;
  font-weight: bold;
  margin: 0.5rem 0;
  color: #555;

`;

export const Price = styled.div`
  font-size: 1rem;
`;

export const Modal = styled.div`
  width: 100%;
  hight: 100%; 
`



export const TheBtns = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`

export const TIcons = styled.button`
  border: none;
  background: none;
  color: black;
  position: relative;
  
`

export const SeeAllButtons = styled.div`
  display: flex;
  flex-direction: column;
  background: #333;
  border-radius: 0.5rem;
  padding: 0.5rem;
  gap: 1rem;
  // transition: .4s;
`

export const ImageHotel = styled.image`
  width: 300px;
  hight: 200px;
`

export const ModalDetails = styled.div`
  max-width: 40rem;
  background: white;
  margin: 0 auto;
  margin-top: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;  
`

export const ImageModalMere = styled.div`
    
`

export const ModalMere = styled.div`
`


export const ModalTitle = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;  
  margin-bottom: 1rem;


`

export const ModalText = styled.div`
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`

export const ModalTextSpan = styled.span`
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: lighter;
`


export const ModalBtnClose = styled.button`
  background: none;
  padding: 0.2rem 1.5rem;
  border-radius: 1rem;
  margin: 1rem;
  background: #333;
  color: white;
  border: none;

`
export const ModalBtnEdit = styled.button`
  background: none;
  padding: 0.2rem 1.5rem;
  border-radius: 1rem;
  margin: 1rem;
  background: yellow;
  color: #333;
  border: none;
  font-weight: bold;
  a{
    text-decoration: none;
    color: #333;
  }
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModalInput = styled.input`
  margin: 8px 0;
  padding: 8px;
  font-size: 16px;
`;

export const ModalLabel = styled.label`
  font-size: 16px;
  margin: 4px 0;
`;

export const BtnPrev = styled.button`
  background: skyblue;
  border: none;
  border-radius: 1rem;
  padding: 0.3rem;
  color: #fff;
 
`
export const BtnNext = styled.button`
  border: none;
  background: skyblue;
  border: none;
  border-radius: 1rem;
  padding: 0.3rem;
  color: #fff;

`

export const BtnPrevNext = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: end;
  padding: 0.3rem;
  
`

export const LeftRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 320px) {
    flex-direction: column;
  }
  @media screen and (min-width:  768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }

`
