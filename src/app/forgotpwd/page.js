"use client"
import React, { useState } from "react";
import iconRed from "../assets/icon.png";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  StyledBackToLoginLien,
  StyledButton,
  StyledContainer,
  StyledFrm,
  StyledFrmInput,
  StyledFrmLabel,
  StyledIcon,
  StyledInfo,
  StyledInput,
  StyledLogoContainer,
  StyledText,
  StyledTextInfo,
} from "../../styles/Connexion.Style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPwd = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        toast.success("Un e-mail de réinitialisation de mot de passe a été envoyé.");
      } else {
        toast.error("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (error) {
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
      console.error("Erreur lors de l'envoi de la demande de réinitialisation de mot de passe :", error);
    }
  };

  return (
    <>
      <ToastContainer />
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
              Entrez votre adresse e-mail ci-dessous et nous vous enverrons des instructions sur la façon de modifier votre mot de passe.
            </StyledTextInfo>
            <StyledFrmInput>
              <StyledFrmLabel htmlFor="email" className="font-bold" style={{ color: "#45484B" }}>
                Email
              </StyledFrmLabel>
              <StyledInput id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </StyledFrmInput>
            <StyledButton type="button" onClick={handleForgotPassword}>
              Envoyer
            </StyledButton>
          </StyledFrm>
        </Form>
        <StyledBackToLoginLien>
          Revenir à la <Link href="/">connexion</Link>
        </StyledBackToLoginLien>
      </StyledContainer>
    </>
  );
};

export default ForgotPwd;
