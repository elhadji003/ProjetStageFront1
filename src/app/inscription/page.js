"use client";
import React, { useState } from "react";
import Image from "next/image";
import iconRed from "../assets/icon.png";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Form,
  StyledButton,
  StyledCheckboxContainer,
  StyledCheckboxInput,
  StyledCheckboxText,
  StyledContainer,
  StyledFrm,
  StyledFrmInput,
  StyledFrmLabel,
  StyledIcon,
  StyledInfo,
  StyledInput,
  StyledLogoContainer,
  StyledSignupLien,
  StyledText,
} from "../../styles/Connexion.Style"; // Assurez-vous que ces composants existent

const Inscription = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    checkbox: false,
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.fullName || !values.email || !values.password || !values.checkbox) {
      toast.error('All fields are necessary and terms must be accepted!');
      return;
    }

    try {
      const res = await fetch("https://projetstage1backend.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          password: values.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setValues({
          fullName: "",
          email: "",
          password: "",
          checkbox: false,
        });

        e.target.reset();
        
        router.push("/");
        toast.success('Registration successful!');

      } else {
        console.log("User registration failed.");
        toast.error(data.message || "Registration failed. Please try again.");

      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <StyledContainer>
      <StyledLogoContainer>
        <StyledIcon>
          <Image src={iconRed} alt="logo Red" />
        </StyledIcon>
        <StyledText>Red Product</StyledText>
      </StyledLogoContainer>
      <Form>
        <StyledFrm onSubmit={handleSubmit}>
          <StyledInfo>Inscrivez-vous en tant qu'admin</StyledInfo>
          <StyledFrmInput>
            <StyledFrmLabel htmlFor="fullName">Prénom</StyledFrmLabel>
            <StyledInput id="fullName" name="fullName" type="text" value={values.fullName} onChange={handleChange} />
          </StyledFrmInput>
          <StyledFrmInput>
            <StyledFrmLabel htmlFor="email">Email</StyledFrmLabel>
            <StyledInput id="email" name="email" type="email" value={values.email} onChange={handleChange} />
          </StyledFrmInput>
          <StyledFrmInput>
            <StyledFrmLabel htmlFor="password">Mot de passe</StyledFrmLabel>
            <StyledInput id="password" name="password" type="password" value={values.password} onChange={handleChange} />
          </StyledFrmInput>
          <StyledCheckboxContainer>
            <StyledCheckboxInput id="checkbox" name="checkbox" type="checkbox" checked={values.checkbox} onChange={handleChange} />
            <StyledCheckboxText>Accepter les termes et la politique</StyledCheckboxText>
          </StyledCheckboxContainer>
          <StyledButton type="submit">Inscription</StyledButton>
        </StyledFrm>
      </Form>
      <StyledSignupLien>
        Vous avez déjà un compte? <Link href="/">Se connecter</Link>
      </StyledSignupLien>
      
      <ToastContainer/>
    </StyledContainer>
  );
};

export default Inscription;
