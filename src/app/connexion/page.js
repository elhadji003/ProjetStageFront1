'use client'

import React, { useState } from "react";
import Link from "next/link";
import iconRed from "../assets/icon.png";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  StyledCheckboxContainer,
  StyledCheckboxInput,
  StyledCheckboxText,
  StyledContainer,
  StyledForgotPasswordLien,
  StyledFrm,
  Form,
  StyledFrmInput,
  StyledFrmLabel,
  StyledIcon,
  StyledInfo,
  StyledInput,
  StyledLogoContainer,
  StyledSignupLien,
  StyledSubmitButton,
  StyledText,
  ErrorMessage,
  ShowHideButton,
  IconDiv,
  IconDivBtn,
  PwdDiv
} from "../../styles/Connexion.Style";

const Connexion = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const resetMessage = () => {
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = values;

    try {
      const response = await fetch("https://projetstage1backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      router.replace("/dashboard"); // Redirect to the dashboard after successful login
      toast.success('Connexion réussie');

    } catch (error) {
      toast.error('Invalid credentials');
      setTimeout(resetMessage, 5000);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
          <StyledFrm onSubmit={handleSubmit}>
            <StyledInfo>Connectez-vous en tant qu'admin</StyledInfo>
            <StyledFrmInput>
              <StyledFrmLabel htmlFor="email">Email</StyledFrmLabel>
              <StyledInput
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
              />
            </StyledFrmInput>
            <StyledFrmInput>
              <StyledFrmLabel htmlFor="password">Mot de passe</StyledFrmLabel>
              <PwdDiv>
                <StyledInput
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                />
                <IconDivBtn type="button" onClick={toggleShowPassword}>
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </IconDivBtn>
              </PwdDiv>
            </StyledFrmInput>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <StyledCheckboxContainer>
              <StyledCheckboxInput
                type="checkbox"
                id="coding"
                name="interest"
                value="coding"
              />
              <StyledCheckboxText>Garder-moi connecté</StyledCheckboxText>
            </StyledCheckboxContainer>
            <StyledSubmitButton type="submit">Se connecter</StyledSubmitButton>
          </StyledFrm>
        </Form>
        <Link href="/forgotpwd">
          <StyledForgotPasswordLien>Mot de passe oublié?</StyledForgotPasswordLien>
        </Link>
        <StyledSignupLien>
          Vous n'avez pas de compte?{" "}
          <Link href="/inscription">Inscription</Link>
        </StyledSignupLien>
        
        <ToastContainer />
      </StyledContainer>
    </>
  );
};

export default Connexion;
