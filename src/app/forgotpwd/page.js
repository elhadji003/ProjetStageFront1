"use client"
import React from "react";
import iconRed from "../assets/icon.png";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, StyledBackToLoginLien, StyledButton, StyledContainer, StyledFrm, StyledFrmInput, StyledFrmLabel, StyledIcon, StyledInfo, StyledInput, StyledLogoContainer, StyledText, StyledTextInfo } from "../../styles/Connexion.Style";


const ForgotPwd = () => {
  return (
    <>
      <StyledContainer>
        <StyledLogoContainer>
          <StyledIcon>
            <Image src={iconRed} alt="logo Red" />
          </StyledIcon>
          <StyledText>Red Product</StyledText>
        </StyledLogoContainer>
        <Form>
          <StyledFrm>
            <StyledInfo>Mot de passe oublié?</StyledInfo>
            <StyledTextInfo>
              Entrez votre adresse e-mail ci-dessous et nous vous envoyons des
              instructions sur la façon de modifier votre mot de passe.
            </StyledTextInfo>
            <StyledFrmInput>
              <StyledFrmLabel htmlFor="email" className="font-bold" style={{color: '#45484B'}}>Email</StyledFrmLabel>
              <StyledInput id="email" type="email" />
            </StyledFrmInput>
            <StyledButton type="button">Envoyez</StyledButton>
          </StyledFrm>
        </Form>
        <StyledBackToLoginLien>
          Revenir à la{" "}
          <Link href="/">connexion</Link>
        </StyledBackToLoginLien>
      </StyledContainer>
    </>
  );
};

export default ForgotPwd;
