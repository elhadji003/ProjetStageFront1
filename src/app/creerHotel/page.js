'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import vector from '../assets/Vector.png';
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
  SpanAjouterPhoto,
  Form,
} from '../../styles/Creer.Style';
import { ButtonModal } from '../../styles/Navbar2.Style';
import { ErrorMessage, SuccessMessage } from '../../styles/Connexion.Style';

const CreerHotel = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [image, setImage] = useState(null);
  const [values, setValues] = useState({
    nameHotel: '',
    address: '',
    email: '',
    price: '',
    number: '',
    devise: '',
    imgName: '',
  });


  const resetMessage = () => {
    setMessage("");
    setIsError(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:8000/api/hotels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nameHotel: values.nameHotel,
          address: values.address,
          email: values.email,
          price: values.price,
          number: values.number,
          devise: values.devise,
        }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        setValues({
          nameHotel: "",
          address: "",
          email: "",
          price: "",
          number: "",
          devise: "",
        });
        setImage(null);
        setMessage("Hotel created successfully!");
        setTimeout(resetMessage, 5000);
        router.push('/cardHotel');
      } else {
        setIsError(true);
        setMessage(data.message || "Registration failed. Please try again.");
        setTimeout(resetMessage, 5000);
      }
    } catch (error) {
      setIsError(true);
      setMessage("An error occurred. Please try again.");
      setTimeout(resetMessage, 5000);
    }
  };
  

  return (
    <Container>
      <Card>
        <Header>
          <a href="/cardHotel">
            <ButtonModal>
              <FontAwesomeIcon icon={faArrowLeft} />
            </ButtonModal>
          </a>
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
                  value={values.nameHotel}
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
                  value={values.email}
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
                  value={values.price}
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
                  value={values.address}
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
                  value={values.number}
                  onChange={handleChange}
                />
              </StyledFrInput>
              <StyledFrInput>
                <Label htmlFor="currency">Devise</Label>
                <Select
                  id="currency"
                  name="devise"
                  value={values.devise}
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
              <Image src={vector} alt="Vector" />
              <SpanAjouterPhoto>Ajouter une photo</SpanAjouterPhoto>
              <Input
                id="dropzone-file"
                type="file"
                accept='images/*'
                onChange={handleFileChange}
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
