'use client'

import React, { useEffect, useState } from "react";
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
  ImageHotel,
  ModalDetails,
  ModalMere,
  ModalTitle,
  ModalText,
  ModalTextSpan,
  ModalBtnClose,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEye,
  faPlus,
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [hotelsImg, setHotelsImg] = useState([]);
  const [nombre, setNombre] = useState(0);
  const [seeButtons, setSeeButtons] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/hotels");
      setHotels(response.data);
      setNombre(response.data.length);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      setError('Erreur lors de la récupération des données.');
    }
  };

  const fetchData2 = async () => {
    try {
      const response = await axios.get("http://localhost:8000/uploads/updImage");
      setHotelsImg(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données img:', error);
      setError('Erreur lors de la récupération des données img.');
    }
  };

  const handleSeeButton = (index, hotel) => {
    setSelectedHotel(hotel);
    setSeeButtons(index === seeButtons ? null : index);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/hotels/${id}`);
      setHotels(hotels.filter(hotel => hotel._id !== id));
    } catch (error) {
      setError('Erreur lors de la suppression de l\'hôtel.');
      console.error('Delete error:', error);
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
                  <a href="/creerHotel">
                    <ButtonModal>
                      <HeaderButtonPlus>
                        <StyleIconCreer>
                          <FontAwesomeIcon icon={faPlus} size="1x" color="black" />
                        </StyleIconCreer>
                        <StyleSpanCreer>Créer un nouvel hôtel</StyleSpanCreer>
                      </HeaderButtonPlus>
                    </ButtonModal>
                  </a>
                </Header1Subtitle>
              </Header3Title>
            </Flex2ColumnContainer>
          </Hidden2Container>
        </Header2Container>
      </Navbar2Container>

      {showModal && selectedHotel && (
        <ModalDetails>
          <ModalMere>
            <ModalTitle>{selectedHotel.nameHotel}</ModalTitle>
              <div className="princ d-flex align-items-center justify-content-around">
                  <div className="left">
                    <ModalText>Adresse: 
                        <ModalTextSpan>{selectedHotel.address}</ModalTextSpan>
                      </ModalText>
                      <ModalText>Email: 
                        <ModalTextSpan>{selectedHotel.email}</ModalTextSpan>
                      </ModalText>
                      <ModalText>Numéro de téléphone: 
                        <ModalTextSpan>{selectedHotel.number}</ModalTextSpan>
                      </ModalText>
                      <ModalText>Prix par nuit: 
                        <ModalTextSpan>{selectedHotel.price}</ModalTextSpan>
                    </ModalText>
                  </div>
                  <div className="right">
                    {hotelsImg.map((img) => (
                      <div key={img._id}>
                        <img src={img.filename} alt={img.filename} width={300} height={200}/>
                        <p>{img.nameImage}</p>
                      </div>
                    ))}
                  </div>
              </div>
          </ModalMere>
          <ModalBtnClose onClick={() => setShowModal(false)}>Fermer</ModalBtnClose>
        </ModalDetails>
      )}
  
      {!showModal && (
        <SecContent>
          {hotels.map((hotel, index) => (
            <SingleDestination key={hotel._id} data-aos="fade-up">
              <ImageModalMere>
                <TheBtns>
                  <TIcons onClick={() => handleSeeButton(index, hotel)}>
                    <FontAwesomeIcon icon={faPlusCircle} color="black" />
                  </TIcons>
                  {seeButtons === index && (
                    <SeeAllButtons>
                      <TIcons onClick={() => handleDelete(hotel._id)}> 
                        <FontAwesomeIcon icon={faTrash} color="red" />
                      </TIcons>
                      <TIcons>
                        <FontAwesomeIcon icon={faEdit} color="yellow" />
                      </TIcons>
                      <TIcons onClick={() => setShowModal(true)}>
                        <FontAwesomeIcon icon={faEye} color="skyblue" />
                      </TIcons>
                    </SeeAllButtons>
                  )}
                </TheBtns>
                {hotelsImg.map((img) => (
                  <div key={img._id}>
                    <img src={img.filename} alt={img.filename} width={300} height={200}/>
                  </div>
                ))}
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
      )}
    </HotelSection>
  );
};

export default Hotel;
