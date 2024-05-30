'use client'

import React, { useEffect, useState } from "react";
import 'animate.css';
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faPlus, faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

import {
  HotelSection,
  SecContent,
  SingleDestination,
  ImageModalMere,
  CardInfo,
  Continent,
  Address,
  DestTitle,
  Price,
  SeeAllButtons,
  TheBtns,
  TIcons,
  ModalDetails,
  ModalMere,
  ModalTitle,
  ModalText,
  ModalTextSpan,
  ModalBtnClose,
  ModalBtnEdit,
} from "../../styles/Hotel.Style";
import { 
  Navbar2Container, 
  Header2Title,
  Header2Subtitle,
  Header2Container,
  Hidden2Container,
  Flex2ColumnContainer,
  Header1Subtitle,
  Header3Title,
  HeaderButtonPlus,
  StyleSpanCreer,
  StyleIconCreer,
  ButtonModal
} from '../../styles/Navbar2.Style';
import { useSearchParams } from "next/navigation";

const CardTest = () => {
  const [hotels, setHotels] = useState([]);
  const [nombre, setNombre] = useState(0);
  const [seeButtons, setSeeButtons] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    number: "",
    price: "",
    image: ""
  });

  const searchParams = useSearchParams();
  const hotelId = searchParams.get('id');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://projetstage1backend.onrender.com/api/hotels");
      setHotels(response.data);
      setNombre(response.data.length);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      setError('Erreur lors de la récupération des données.');
    }
  };

  const handleSeeButton = (index, hotel) => {
    setSelectedHotel(hotel);
    setSeeButtons(index === seeButtons ? null : index);
    setShowModal(true);
    setIsEditing(false);
  };

  const handleEditButton = (index, hotel) => {
    setSelectedHotel(hotel);
    setSeeButtons(index === seeButtons ? null : index);
    setShowModal(true);
    setIsEditing(true);
    fillFormWithHotelData(hotel); // Remplir le formulaire avec les données de l'hôtel sélectionné
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://projetstage1backend.onrender.com/api/hotels/${id}`);
      setHotels(hotels.filter(hotel => hotel._id !== id));
    } catch (error) {
      setError('Erreur lors de la suppression de l\'hôtel.');
      console.error('Delete error:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedHotel(null);
    setIsEditing(false);
  };

  const fillFormWithHotelData = (hotel) => {
    setFormData({
      name: hotel.nameHotel,
      address: hotel.address,
      email: hotel.email,
      number: hotel.number,
      price: hotel.price,
      image: hotel.image
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedHotel = {
        nameHotel: formData.name,
        address: formData.address,
        email: formData.email,
        number: formData.number,
        price: formData.price,
        image: formData.image
      };

      const res = await axios.put(
        `https://localhost:8000/api/hotels/${selectedHotel._id}`,
        updatedHotel
      );

      if (res.status === 200) {
        // Mettre à jour l'état local des hôtels avec les modifications
        const updatedHotels = hotels.map(hotel =>
          hotel._id === selectedHotel._id ? { ...hotel, ...updatedHotel } : hotel
        );
        setHotels(updatedHotels);

        closeModal();
        setMessage("Hôtel mis à jour avec succès !");
      } else {
        // Gérer les erreurs éventuelles
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'hôtel:", error);
    }
  };

  return (
    <HotelSection>
      <Navbar2Container>
        <Header2Container>
          <Hidden2Container>
            <Flex2ColumnContainer>
              <Header2Title>
                <Header1Subtitle>Hotel</Header1Subtitle>
                <Header2Subtitle>{nombre}</Header2Subtitle>
              </Header2Title>
              <Header3Title>
                <Header1Subtitle>
                  <Link href="/creerHotel">
                    <ButtonModal>
                      <HeaderButtonPlus>
                        <StyleIconCreer>
                          <FontAwesomeIcon icon={faPlus} size="1x" color="black" />
                        </StyleIconCreer>
                        <StyleSpanCreer>Créer un nouvel hôtel</StyleSpanCreer>
                      </HeaderButtonPlus>
                    </ButtonModal>
                  </Link>
                </Header1Subtitle>
              </Header3Title>
            </Flex2ColumnContainer>
          </Hidden2Container>
        </Header2Container>
      </Navbar2Container>

      {showModal && selectedHotel && (
        <ModalDetails className="animate__animated animate__bounce animate__backInDown">
          <ModalMere>
            {isEditing ? (
              <>
                <ModalTitle>Edit Hotel</ModalTitle>
                 <form onSubmit={handleSubmit}>
                    <label>Nom de l'hôtel:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    <label>Adresse:</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    <label>Numéro de téléphone:</label>
                    <input type="text" name="number" value={formData.number} onChange={handleChange} />
                    <label>Prix par nuit:</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} />
                    <label>Image URL:</label>
                    <input type="text" name="image" value={formData.image} onChange={handleChange} />
                    <ModalBtnClose type="button" onClick={closeModal}>Fermer</ModalBtnClose>
                    <ModalBtnEdit type="submit">Mettre à jour</ModalBtnEdit>
                  </form>

              </>
            ) : (
              <>
                <ModalTitle>{selectedHotel.nameHotel}</ModalTitle>
                <div className="princ d-flex align-items-center justify-content-around">
                  <div className="left">
                    <ModalText>Adresse: <ModalTextSpan>{selectedHotel.address}</ModalTextSpan></ModalText>
                    <ModalText>Email: <ModalTextSpan>{selectedHotel.email}</ModalTextSpan></ModalText>
                    <ModalText>Numéro de téléphone: <ModalTextSpan>{selectedHotel.number}</ModalTextSpan></ModalText>
                    <ModalText>Prix par nuit: <ModalTextSpan>{selectedHotel.price}</ModalTextSpan></ModalText>
                  </div>
                  <div className="right">
                    <img src={selectedHotel.image} alt={selectedHotel.filename} width={300} height={200} />
                  </div>
                </div>
                <ModalBtnClose onClick={closeModal}>Fermer</ModalBtnClose>
                <ModalBtnEdit onClick={() => setIsEditing(true)}>Modifier</ModalBtnEdit>
              </>
            )}
          </ModalMere>
        </ModalDetails>
      )}

      <SecContent>
        {hotels.map((hotel, index) => (
          <SingleDestination key={hotel._id} data-aos="fade-up">
            <ImageModalMere>
              <TheBtns>
                <TIcons onClick={() => handleSeeButton(index, hotel)}>
                  <FontAwesomeIcon icon={faPlusCircle} color="white" />
                </TIcons>
                {seeButtons === index && (
                  <SeeAllButtons className="animate__animated animate__bounce animate__backInDown">
                    <TIcons onClick={() => handleDelete(hotel._id)}> 
                      <FontAwesomeIcon icon={faTrash} color="red" />
                    </TIcons>
                    <TIcons onClick={() => handleEditButton(index, hotel)}>
                      <FontAwesomeIcon icon={faEdit} color="yellow" />
                    </TIcons>
                    <TIcons onClick={() => handleSeeButton(index, hotel)}>
                      <FontAwesomeIcon icon={faEye} color="skyblue" />
                    </TIcons>
                  </SeeAllButtons>
                )}
              </TheBtns>
              <img src={hotel.image} alt={hotel.filename} width={300} height={200} />
            </ImageModalMere>
            <CardInfo>
              <Continent>
                <Address>{hotel.address}</Address>
              </Continent>
              <DestTitle>{hotel.nameHotel}</DestTitle>
              <Price>{hotel.price} par nuit</Price>
            </CardInfo>
          </SingleDestination>
        ))}
      </SecContent>
    </HotelSection>
  );
};

export default CardTest;
