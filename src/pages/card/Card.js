'use client'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faP } from '@fortawesome/free-solid-svg-icons/faP';
import { BorderIcon, CardContainer, CardInfo, Content, IconRow, Number, Partie, StyledPrice } from '../../styles/Card.Style';
const Data = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faEnvelopeOpen} size='1x'/>,
    number: 125,
    partie: 'Formulaires',
    text: 'Je ne sais pas quoi mettre',
    background: "#A88ADD",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faP} size='1x'/>,
    number: 40,
    partie: 'Messages',
    text: 'Je ne sais pas quoi mettre',
    background: "#0CC2AA",

  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faUserFriends} size='1x'/>,
    number: 600,
    partie: 'Utilisateurs ',
    text: 'Je ne sais pas quoi mettre',
    background: "#FCC100",

  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faEnvelopeOpen} size='1x'/>,
    number: 25,
    partie: 'E-mails',
    text: 'Je ne sais pas quoi mettre',
    background: "#F90000",
  },
  {
    id: 5,
    icon: <FontAwesomeIcon icon={faP} size='1x'/>,
    number: 40,
    partie: 'Hôtels',
    text: 'Je ne sais pas quoi mettre',
    background: "#9C27B0",

  },
  {
    id: 6,
    icon: <FontAwesomeIcon icon={faUserFriends} size='1x'/>,
    number: 20,
    partie: 'Entités ',
    text: 'Je ne sais pas quoi mettre',
    background: "#1565C0",
  }
];

const Card = () => {
  return (
    <CardContainer>
      <Content>
        {Data.map(({ id, icon, number, partie, text, background }) => (
          <IconRow key={id} data-aos="fade-up">
            <BorderIcon style={{background, color: 'white'}}>
              {icon}
            </BorderIcon>
            <CardInfo>
              <StyledPrice>
                <Number>{number}</Number>
                <Partie> {partie} </Partie>
              </StyledPrice>
              <StyledPrice>
                {text}
              </StyledPrice>
            </CardInfo>
          </IconRow>
        ))}
      </Content>
    </CardContainer>
  );
}

export default Card;
