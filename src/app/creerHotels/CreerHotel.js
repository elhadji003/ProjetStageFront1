'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios'; // Assurez-vous que axios est importé
import Image from 'next/image';
import "animate.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faImage } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Card,
  Title,
  Header,
  Row,
  FrGr2oup,
  Label,
  Input,
  Select,
  Footer,
  Dropzone,
  StyledFrInput,
  StyledSubmitCreer,
  FlexEnd,
  Form,
  DivImage2,
} from '../../styles/Creer.Style';
import { ButtonModal } from '../../styles/Navbar2.Style';
import { ErrorMessage, SuccessMessage } from '../../styles/Connexion.Style';

const CreerHotel = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const [formData, setFormData] = useState({
    nameHotel: '',
    address: '',
    email: '',
    price: '',
    number: '',
    devise: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSeletedImage(file);
    setFormData({
      ...formData,
      image: file,
    });
  };

  const resetMessage = () => {
    setMessage("");
    setIsError(false);
  };

  const [selectedImage, setSeletedImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const res = await axios.post(
        "https://projetstage1backend.onrender.com/api/hotels",
        formDataToSend
      );

      console.log("Response Data:", res.data); // Affiche les données renvoyées par le backend

      if (res.status === 200) {
        setFormData({
          nameHotel: "",
          address: "",
          email: "",
          price: "",
          number: "",
          devise: "",
          image: null
        });

        setSeletedImage(null);
        setMessage("Hotel created successfully!");
        setTimeout(resetMessage, 5000);
        router.push('/cardHotel');
      } else {
        setIsError(true);
        setMessage(res.data.message || "Registration failed. Please try again.");
        setTimeout(resetMessage, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error); // Affiche l'erreur en cas d'échec de la soumission du formulaire
      setIsError(true);
      setMessage("An error occurred. Please try again.");
      setTimeout(resetMessage, 5000);
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false); // Afficher le formulaire de création d'hôtel
  };
  

  return (
    <Container className='animate__animated animate__bounce animate__backInDown'>
      <Card>
        <Header>
          {/* <a href="/cardHotel"> */}
            <ButtonModal onClick={handleClose}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </ButtonModal>
          {/* </a> */}
          <Title>Créer un nouveau hôtel</Title>
        </Header>
        <Form onSubmit={handleSubmit}>
          <Row>
            <FrGr2oup>
              <StyledFrInput>
                <Label htmlFor="hotel-name">Nom de l'hôtel</Label>
                <Input
                  id="hotel-name"
                  type="text"
                  name="nameHotel"
                  placeholder="CAP Marniane"
                  value={formData.nameHotel}
                  onChange={handleChange}
                />
              </StyledFrInput>
              <StyledFrInput>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </StyledFrInput>
              <StyledFrInput>
                <Label htmlFor="price">Prix par nuit</Label>
                <Input
                  id="price"
                  type="text"
                  name="price"
                  placeholder="125.000 XOF"
                  value={formData.price}
                  onChange={handleChange}
                />
              </StyledFrInput>
            </FrGr2oup>
            <FrGr2oup>
              <StyledFrInput>
                <Label htmlFor="address">Adresse</Label>
                <Input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Les îles de ..."
                  value={formData.address}
                  onChange={handleChange}
                />
              </StyledFrInput>
              <StyledFrInput>
                <Label htmlFor="phone">Numéro de téléphone</Label>
                <Input
                  id="phone"
                  type="text"
                  name="number"
                  placeholder="+221 ..."
                  value={formData.number}
                  onChange={handleChange}
                />
              </StyledFrInput>
              <StyledFrInput>
                <Label htmlFor="currency">Devise</Label>
                <Select
                  id="currency"
                  name="devise"
                  value={formData.devise}
                  onChange={handleChange}
                >
                  <option value="XOF">F XOF</option>
                  <option value="Euro">Euro</option>
                  <option value="Dollar">$</option>
                </Select>
              </StyledFrInput>
            </FrGr2oup>
          </Row>
          <Footer>
            <Label htmlFor="file">Ajouter une photo</Label>
            <Dropzone htmlFor="dropzone-file">
              {selectedImage
                ? <Image
                    src={URL.createObjectURL(selectedImage)}
                    alt="selected-img"
                    width={300}
                    height={200}
                  />
                : <DivImage2>
                    <FontAwesomeIcon icon={faImage} size='3x' />
                  </DivImage2>
              }
              <Input
                id="dropzone-file"
                type="file"
                accept='images/*'
                onChange={handleFileChange}
                style={{display: "none"}}
              />
            </Dropzone>
          </Footer>
          <FlexEnd>
            <StyledSubmitCreer type="submit">Enregistrer</StyledSubmitCreer>
          </FlexEnd>
        </Form>
        {message && (isError ? <ErrorMessage>{message}</ErrorMessage> : <SuccessMessage>{message}</SuccessMessage>)}
      </Card>
    </Container>
  );
};

export default CreerHotel;
