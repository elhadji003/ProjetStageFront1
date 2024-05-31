'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
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
  FlexEnd,
  Form,
  StyledFrInput,
  StyledSubmitCreer,
} from '../../styles/Creer.Style';
import { ButtonModal } from '../../styles/Navbar2.Style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditHotelComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hotelId = searchParams.get('id');

  const [formData, setFormData] = useState({
    nameHotel: '',
    address: '',
    email: '',
    price: '',
    number: '',
    devise: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    fetchHotelData();
  }, [hotelId]);

  const fetchHotelData = async () => {
    try {
      const response = await axios.get(`https://projetstage1backend.onrender.com/api/hotels/${hotelId}`);
      setFormData({
        nameHotel: response.data.nameHotel,
        address: response.data.address,
        email: response.data.email,
        price: response.data.price,
        number: response.data.number,
        devise: response.data.devise,
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      toast.error("Une erreur s'est produite lors de la récupération des données");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.nameHotel ||
      !formData.address ||
      !formData.email ||
      !formData.number ||
      !formData.price
    ) {
      toast.error('Les champs ne doivent pas être vides.');
      return;
    }

    try {
      const res = await fetch(`https://projetstage1backend.onrender.com/api/hotels/${hotelId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        console.log('Update successful:', result);
        router.push('/cardHotel');
        toast.success("Hotel updated successfully!");
      } else {
        toast.error(result.message || "Update failed. Please try again.");
        console.log('Update failed:', result);
      }
    } catch (error) {
      console.error("Error updating form:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <Container>
      <Card className='my-4 border-top'>
        <Header>
          <a href="/cardHotel">
            <ButtonModal>
              <FontAwesomeIcon icon={faArrowLeft} />
            </ButtonModal>
          </a>
          <Title>Modifier l'hôtel</Title>
        </Header>
        <Form onSubmit={handleSubmit}>
          <Row>
            <FrGr2oup>
              <StyledFrInput>
                <Label htmlFor="hotel-name">Nom de l'hôtel</Label>
                <Input
                  type="text"
                  name="nameHotel"
                  value={formData.nameHotel}
                  onChange={handleChange}
                />
              </StyledFrInput>
              <StyledFrInput>
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </StyledFrInput>
              <StyledFrInput>
                <Label htmlFor="price">Prix par nuit</Label>
                <Input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </StyledFrInput>
            </FrGr2oup>
            <FrGr2oup>
              <StyledFrInput>
                <Label htmlFor="address">Adresse</Label>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </StyledFrInput>
              <StyledFrInput>
                <Label htmlFor="phone">Numéro de téléphone</Label>
                <Input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                />
              </StyledFrInput>
              <StyledFrInput>
                <Label htmlFor="currency">Devise</Label>
                <Select
                  name="devise"
                  value={formData.devise}
                  onChange={handleChange}
                >
                  <option value="XOF">F XOF</option>
                  <option value="Euro">Euro</option>
                  <option value="$">$</option>
                </Select>
              </StyledFrInput>
            </FrGr2oup>
          </Row>
          <FlexEnd>
            <StyledSubmitCreer type="submit">Mettre à jour</StyledSubmitCreer>
          </FlexEnd>
        </Form>
      </Card>
      <ToastContainer />
    </Container>
  );
};

const EditHotel = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditHotelComponent />
    </Suspense>
  );
};

export default EditHotel;
