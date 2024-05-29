"use client"
import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: #1e1e1e;
  height: 110vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none !important;
  }
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem
`;
export const StyledIcon = styled.div`
  width: 2rem; 
  height: 2rem;
`;

export const StyledText = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 1.125rem;
`;

export const Form = styled.div`
  width: 100%;
  max-width: 24rem;
  margin-bottom: 1rem;
`;

export const StyledFrm = styled.form`
  width: 100%;
  margin-bottom: 1rem;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  padding: 1.5rem 1.5rem;
`;

export const StyledFrmInput = styled.form`
  margin-bottom: 0.75rem; 
`;

export const StyledFrmLabel = styled.label`
  font-weight: bold;
  color: #45484B;
`;

export const StyledInfo = styled.p`
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  padding: 0.75rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #494c4f;
  border-radius: 1rem;
  padding: 0.5rem 0.75rem;
  color: #4b5563;
  margin-bottom: 1rem;
  background-color: transparent;
  &:focus {
    outline: none;
    border: 1px solid #494c4f;
    border-radius: 1rem;

  }
`;

export const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const StyledCheckboxInput = styled.input`
    margin-bottom: 0.75rem
`;

export const StyledCheckboxText = styled.p`
  color: #4b5563; 
  font-weight: bold;
  font-size: 0.875rem;
  margin-bottom: 0.75rem
`;

export const StyledSubmitButton = styled.button`
  width: 100%;
  background: #45484B;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  padding: 0.5rem 0;
  border-radius: 0.25rem;
  transition: background-color 0.3s;
  cursor: pointer;
  outline: none;
  border: none;
  &:hover {
    background-color: #000;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  background: #45484B;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  padding: 0.5rem 0;
  border-radius: 0.25rem;
  transition: background-color 0.3s;
  cursor: pointer;
  outline: none;
  border: none;
  &:hover {
    background-color: #000;
  }
`;

export const StyledForgotPasswordLien = styled.div`
  color: #ffcc00;
`;

export const StyledSignupLien = styled.div`
  color: white;
  margin-bottom: 1rem;
  a{
    color: #ffcc00;
  }
`;

export const StyledBackToLoginLien = styled.div`
  color: white;
  margin-bottom: 0rem;
  a{
    color: #ffcc00;
  }
`;

export const StyledTextInfo = styled.div`
color: #a1a2a3;
margin-bottom: 2rem;
`;

export const ErrorMessage = styled.div`
  background: red;
  border-radius: 0.5rem;
  text-align: center;
  color: #6a0303;
  width: 100%
  padding: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;

`

export const SuccessMessage = styled.div`
  background: lime;
  border-radius: 0.5rem;
  text-align: center;
  width: 100%
  padding: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #037430;

`
