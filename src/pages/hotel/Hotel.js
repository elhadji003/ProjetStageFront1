'use client'

import React, { useEffect, useState } from "react";
import 'animate.css';
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
  BtnPrev,
  BtnNext,
  BtnPrevNext,
  LeftRight,
  MaDiv,
  DivAuDessus,
  DivEnDessous,
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
import {
  NavbarContainer,
  NavbarNav,
  TitleContainer,
  Title,
  Toolbar,
  BellIcon,
  ProfileImage,
  LogoutIcon,
  ProfileAdminImage,
  DivNv1,
  DivNav2,
  FlexContainer,
  SearchContainer,
  SearchInput,
  IconButton
} from '../../styles/Navabar.Style';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileAdmin from "../../app/assets/img-2.jpg"
import {
  faBell,
  faEdit,
  faEye,
  faPlus,
  faPlusCircle,
  faRightToBracket,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Link from "next/link";
import CreerHotel from "../../app/creerHotels/CreerHotel";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";


const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [nombre, setNombre] = useState(0);
  const [text, setText] = useState('Créer un nouvel hôtel');
  const [currentHotelIndex, setCurrentHotelIndex] = useState(0);
  const [searchHotel, setSearchHotel] = useState('');
  const [modalDetails, setModalDetail] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [seeButtons, setSeeButtons] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/hotels");
      setHotels(response.data);
      setNombre(response.data.length);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      toast.error('Erreur lors de la récupération des données.');
    }
  };

  const handleSeeButton = (index, hotel) => {
    setSelectedHotel(hotel);
    setCurrentHotelIndex(index);
    setSeeButtons(index === seeButtons ? null : index);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/hotels/${id}`);
      setHotels(hotels.filter(hotel => hotel._id !== id));
      toast.success('Hôtel supprimé avec succès.');
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Erreur lors de la suppression de l\'hôtel.');
    }
  };

  const handleCreateButtonClick = () => {
    setShowCreateForm(!showCreateForm);
  };

  const prevHotel = () => {
    if (currentHotelIndex > 0) {
      const prevIndex = currentHotelIndex - 1;
      setSelectedHotel(hotels[prevIndex]);
      setCurrentHotelIndex(prevIndex);
    }
  };

  const nextHotel = () => {
    if (currentHotelIndex < hotels.length - 1) {
      const nextIndex = currentHotelIndex + 1;
      setSelectedHotel(hotels[nextIndex]);
      setCurrentHotelIndex(nextIndex);
    }
  };

  const router = useRouter();

  const handleSignOut = () => {
    router.push("/");
  };

  const handleSearchChange = (event) => {
    setSearchHotel(event.target.value);
  };

  const filteredHotels = hotels.filter((hotel) =>
    hotel.nameHotel.toLowerCase().includes(searchHotel.toLowerCase()) ||
    hotel.address.toLowerCase().includes(searchHotel.toLowerCase())
  );

  return (
    <>
      <NavbarContainer>
        <NavbarNav>
          <DivNv1>
            <DivNav2>
              <TitleContainer>
                <FlexContainer>
                  <Title aria-current="page">Dashboard</Title>
                </FlexContainer>
              </TitleContainer>
              <Toolbar>
                <SearchContainer>
                  <SearchInput type="text" placeholder="🔎 rechercher" onChange={handleSearchChange} />
                </SearchContainer>
                <BellIcon>
                  <Link href="/notification">
                    <FontAwesomeIcon icon={faBell} color="black" />
                  </Link>
                </BellIcon>
                <ProfileImage>
                  <ProfileAdminImage src={ProfileAdmin} alt='Profile Admin' width={40} height={40} />
                </ProfileImage>
                <LogoutIcon>
                  <IconButton onClick={handleSignOut}>
                    <FontAwesomeIcon icon={faRightToBracket} color="black" />
                  </IconButton>
                </LogoutIcon>
              </Toolbar>
            </DivNav2>
          </DivNv1>
        </NavbarNav>
      </NavbarContainer>

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
                    <ButtonModal onClick={handleCreateButtonClick}>
                      <HeaderButtonPlus>
                        <StyleIconCreer>
                          <FontAwesomeIcon icon={faPlus} size="1x" color="black" />
                        </StyleIconCreer>
                        <StyleSpanCreer>{text}</StyleSpanCreer>
                      </HeaderButtonPlus>
                    </ButtonModal>
                  </Header1Subtitle>
                </Header3Title>
              </Flex2ColumnContainer>
            </Hidden2Container>
          </Header2Container>
        </Navbar2Container>

        <MaDiv>
          <DivAuDessus>
            {modalDetails && selectedHotel ? (
              <ModalDetails className="animate__animated animate__bounce animate__backInDown">
                <ModalMere>
                  <ModalTitle>{selectedHotel.nameHotel}</ModalTitle>
                  <LeftRight>
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
                        <ModalTextSpan>{selectedHotel.price} {selectedHotel.devise}</ModalTextSpan>
                      </ModalText>
                    </div>
                    <div className="right">
                      <img src={selectedHotel.image} alt={selectedHotel.filename} width={300} height={200} />
                    </div>
                  </LeftRight>
                </ModalMere>
                <ModalBtnClose onClick={() => setModalDetail(false)}>Fermer</ModalBtnClose>
                <ModalBtnEdit>
                  <Link href={`/Edit?id=${selectedHotel._id}`}>Modifier</Link>
                </ModalBtnEdit>
                <BtnPrevNext>
                  <BtnPrev onClick={prevHotel}>Précédent</BtnPrev>
                  <BtnNext onClick={nextHotel}>Suivant</BtnNext>
                </BtnPrevNext>
              </ModalDetails>
            ) : (
              <SecContent>
                {filteredHotels.map((hotel, index) => (
                  <SingleDestination key={hotel._id} data-aos="fade-up">
                    <ImageModalMere>
                      <TheBtns>
                        <TIcons onClick={() => handleSeeButton(index, hotel)}>
                          <FontAwesomeIcon icon={faPlusCircle} color="black" size="1x" />
                        </TIcons>
                        {seeButtons === index && (
                          <SeeAllButtons className="animate__animated animate__bounce animate__backInDown">
                            <TIcons onClick={() => handleDelete(hotel._id)}>
                              <FontAwesomeIcon icon={faTrash} color="red" />
                            </TIcons>
                            <TIcons onClick={() => handleSeeButton(index, hotel)}>
                              <Link href={`/Edit?id=${hotel._id}`}>
                                <FontAwesomeIcon icon={faEdit} color="yellow" />
                              </Link>
                            </TIcons>
                            <TIcons onClick={() => setModalDetail(true)}>
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
                      <Price>{hotel.price} {hotel.devise} par nuit</Price>
                    </CardInfo>
                  </SingleDestination>
                ))}
              </SecContent>
            )}
          </DivAuDessus>

          <DivEnDessous>
            {showCreateForm && <CreerHotel />}
          </DivEnDessous>
        </MaDiv>
        <ToastContainer />
      </HotelSection>
    </>
  );
};

export default Hotel;

