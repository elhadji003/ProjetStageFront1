import styled from "styled-components";

export const Container = styled.div`
  // background-color: #171717; /* equivalent to bg-neutral-900 */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0;

  @media (min-width: 640px) {
    padding: 26px 0;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 40rem; /* equivalent to max-w-xl */
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  opacity: 1;

`;

export const Header = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  border-bottom: 1px dotted gray;
`;

export const Title = styled.span`
  @media (max-width: 567px) {
    text-align: center;
  }
`;

export const Form = styled.form`
  margin: 1rem 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const FrGr2oup = styled.div`
  flex: 1;
  min-width: 280px; /* ensures inputs are responsive */
`;

export const Label = styled.label`
  display: block;
  color: #6b7280; /* equivalent to text-gray-500 */
  font-size: 0.875rem; /* equivalent to text-sm */
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 0.5rem;
  color: #4b5563;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5); /* focus:ring focus:shadow-outline */
  }
`;

export const Select = styled.select`
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 0.5rem;
  color: #4b5563;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5); /* focus:ring focus:shadow-outline */
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: 1rem;
`;

export const Dropzone = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 16rem;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f8fafc;
  }
`;

export const DropzoneContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  text-align: center;
  color: #6b7280;
`;

export const StyledP = styled.p`
  margin-bottom: 0.5rem;
`;

export const StyledFrInput = styled.div`
  margin-bottom: 0.5rem;
`;

export const StyledSubmitCreer = styled.button`
width: 100%;
background: #45484B;
color: #ffffff;
text-align: center;
font-weight: bold;
border-radius: 1rem;
padding: 1rem 1rem;
margin-top: 1rem;
border-radius: 0.5rem;
transition: background-color 0.3s;
cursor: pointer;
outline: none;
border: none;
line-height: 5px;
&:hover {
  background-color: #000;
}

`;

export const FlexEnd = styled.div`
    display: flex;
    justify-content: end;

    @media only screen and (min-width: 320px) {
        justify-content: center;
        flex-direction: column;
    }

    @media only screen and (min-width: 768px) {
        justify-content: end;
        
    }

    @media only screen and (min-width: 1024px) {
        justify-content: end;
        flex-direction: row;

    }

    @media only screen and (min-width: 1280px) {
        justify-content: end;
        flex-direction: row;
    }
`

export const SpanAjouterPhoto = styled.span`
    color: grey;
    opactity: 0.5;
    padding: 0.5rem;
    font-weight: bold;
`


export const DivImage = styled.div`
   
`

export const DivImage2 = styled.div`
    display: flex;
    justify-content: center;
   
`


