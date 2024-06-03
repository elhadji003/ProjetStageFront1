'use client'
import React, { useState } from "react";
import Link from "next/link";
import iconRed from "../../assets/icon.png";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { 
  Form, 
  IconDiv, 
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
  StyledTextInfo 
} from "../../../styles/Connexion.Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const token = window.location.pathname.split('/').pop(); // Assumes the token is in the URL
      const response = await axios.post('http://localhost:8000/api/auth/reset-password', { token, password });
      
      if(response.status === 200){
        toast.success(response.data.message);
        setPassword('');
        setConfirmPassword('');
        router.push('/');
      } else {
        toast.error(response.data.message || "Une erreur s'est produite.");
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Une erreur s'est produite.");
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
        <Form onSubmit={handleSubmit}>
          <StyledFrm>
            <StyledInfo>Réinitialisation de mot de passe</StyledInfo>
            <StyledTextInfo>
              Entrez votre nouveau mot de passe.
            </StyledTextInfo>
            <StyledFrmInput>
              <StyledFrmLabel htmlFor="password" className="font-bold" style={{ color: '#45484B' }}>Nouveau mot de passe</StyledFrmLabel>
              <div style={{ position: "relative" }}>
                <StyledInput 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
                <div 
                  style={{ 
                    position: "absolute", 
                    right: 10, 
                    top: "50%", 
                    transform: "translateY(-50%)", 
                    cursor: "pointer" 
                  }}
                  onClick={togglePasswordVisibility}
                >
                  <IconDiv>
                    {showPassword ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}
                  </IconDiv>
                </div>
              </div>
            </StyledFrmInput>
            <StyledFrmInput>
              <StyledFrmLabel htmlFor="confirmPassword" className="font-bold" style={{ color: '#45484B' }}>Confirmez le mot de passe</StyledFrmLabel>
              <div style={{ position: "relative" }}>
                <StyledInput 
                  id="confirmPassword" 
                  type={showConfirmPassword ? "text" : "password"} 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                  required 
                />
                <div 
                  style={{ 
                    position: "absolute", 
                    right: 10, 
                    top: "50%", 
                    transform: "translateY(-50%)", 
                    cursor: "pointer" 
                  }}
                  onClick={toggleConfirmPasswordVisibility}
                >
                  <IconDiv>
                    {showConfirmPassword ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}
                  </IconDiv>
                </div>
              </div>
            </StyledFrmInput>
            <StyledButton type="submit">Réinitialiser le mot de passe</StyledButton>
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

export default ResetPassword;
