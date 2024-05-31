"use client"
import styled from 'styled-components';

export const SidebarContainer = styled.div``;

export const SidebarHeader = styled.div``;


export const StyledSidebarNav = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: 40;
  width: 260px;
  height: 100%;
  background-color: #333; 
  border-right: 1px solid #ccc;
  
  &.active {
    // Ajoutez des styles pour le cas où la classe active est présente
  }

  @media only screen and (min-width: 320px) {

    width: 12rem;
    left: -190px;
    transition: 0.4s;
  
    &.active{
      left: 0px;
      width: 14rem;
    }
  }
  @media only screen and (min-width: 768px) {
      width: 12rem;
      left: -190px;
      transition: 0.4s;
  
      &.active{
      left: 0px;
      width: 14rem;
      }
  }

  @media only screen and (min-width: 1024px) {
    width: 180px;
    left: 0px;
  }
  @media only screen and (min-width: 1280px) {
    width: 220px;
    left: 0px;
  }
  
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
  border-bottom: 1px solid #000;
`;

export const Div2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

export const Div3 = styled.div``;

export const RedProductTitle = styled.div`
    color: white;
    font-weight: bold;
    font-size: 1rem;

    @media (max-width: 768px) {
    font-size: 0.75rem;
    }

    @media (max-width: 1024px) {
    font-size: 0.75rem;
    }

    @media (max-width: 1280px) {
    font-size: 0.75rem;
    }
`;

export const ToggleWrapper = styled.div`
    position: relative;
    display: flex;
    gap: 0.75rem;
    margin-left: 0.5rem;
`;

export const ToggleButton = styled.button`
    position: relative;
    left: 1.125rem;
    background: none;
    border: none;

    @media (min-width: 320px) {
      left: 1.5rem;
    }
    @media (min-width: 768px) {
      left: 1.5rem;
    }
    @media (min-width: 1024px) {
      display: none;
    }
    @media (min-width: 1280px) {
      display: none;
    }  
`;

 export const SidebarContainer2 = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  flex-grow: 1;
  &.sidebar {
    /* Ajoutez ici vos styles pour la classe 'sidebar' */
  }
`;

export const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  liste-style: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0px

`;

export const ListLi = styled.li`
  width: 100%;
  &:hover {
    background-color: #edf2f7;
    width: 100%;
    color: #000; 
    left: 0px
    right: 0;
  }
  a{
    position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  height: 3rem; 
  transition: background-color 0.3s, color 0.3s;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-size: bold; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 12rem;
  padding: 0.75rem;
  }
`;

export const List = styled.li``;

export const Div4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: azure;
  padding: 0.75rem;

`;

export const ProfileBas = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border-top: 1px solid white;
  padding: 10px;
`
export const ProfileBasMere = styled.div`
  position: relative;

  @media (min-width: 1024px) {
    top: 0px;
  }
  @media (min-width: 1280px) {
    top: 200px;
  }
`

export const ProfileTextBas = styled.div`
  color: white;
  font-weight: lighter;
`
export const Onligne = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: green;
  flex: non-wrap;

`

export const OnligneFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

`

export const SignOut = styled.button`
  margin: 1rem;
  background: none;
  border: none;

`

export const ProfileName = styled.span`
  font-size: 12px;
`