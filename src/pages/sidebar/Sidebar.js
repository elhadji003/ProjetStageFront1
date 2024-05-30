"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faHome, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import iconRed from "../../app/assets/icon.png";
import { Div1, Div2, Div3, Div4, List, ListLi, Onligne, OnligneFlex, ProfileBas, ProfileBasMere, ProfileName, ProfileTextBas, RedProductTitle, SidebarContainer, SidebarContainer2, SidebarHeader, SidebarList, SignOut, StyledSidebarNav, ToggleButton, ToggleWrapper } from '../../styles/Sidebar.Style';
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileAdmin from "../../app/assets/pro.png"
import { IconButton, ProfileAdminImage, ProfileImage } from '../../styles/Navabar.Style';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
    const [isSidebarActive, setSidebarActive] = useState(false);
    const [chevron, setChevron] = useState(false);
    const router = useRouter();


    const toggleSidebar = () => {
        setSidebarActive(!isSidebarActive);
        setChevron(prevChange => !prevChange);
    };

    const handleSignOut = async () => {
        router.push('/')
    };

    return (
        <SidebarContainer>
            <SidebarHeader>
                <StyledSidebarNav className={`${isSidebarActive ? 'active' : ''}`}>
                        <Div1>
                            <Div2>
                                <Div3> <Image src={iconRed} alt='logo Red'/></Div3>
                                <RedProductTitle>Red Product</RedProductTitle>
                                <ToggleWrapper>
                                <ToggleButton onClick={toggleSidebar}>
                                    {chevron ? <FontAwesomeIcon icon={faChevronLeft} size="2x" color='white' style={{ right: '1rem' }} /> : 
                                    <FontAwesomeIcon icon={faChevronRight} size="2x" color='black' style={{marginLeft: '1rem'}}/>}
                                </ToggleButton>
                                </ToggleWrapper>
                            </Div2>
                        </Div1>
                        <SidebarContainer2>
                        <SidebarList>
                        <List>
                            <Div4>
                                Principale
                            </Div4>
                        </List>
                        <ListLi>
                            <Link href="/dashboard">
                                    <FontAwesomeIcon icon={faHome} size='1x'/>
                                    Dashboard
                            </Link>
                        </ListLi>
                        <ListLi>
                            <Link href="/cardHotel">
                                <FontAwesomeIcon icon={faHome} size='1x'/>
                                Listes des Hotels
                            </Link>
                        </ListLi>

                        <ProfileBasMere>
                        <ProfileBas>
                            <ProfileImage>
                                <ProfileAdminImage src={ProfileAdmin} alt='Profile Admin' width={40} height={40} />
                            </ProfileImage>
                            <ProfileTextBas>
                                <ProfileName>Mouhamed Badiane</ProfileName>
                                <OnligneFlex><Onligne></Onligne> en ligne</OnligneFlex>
                            </ProfileTextBas>
                        </ProfileBas>

                        <SignOut onClick={handleSignOut}>
                            <IconButton>
                                <FontAwesomeIcon icon={faRightToBracket} color="white" size='2x'/>
                            </IconButton>
                        </SignOut>

                        </ProfileBasMere>

                        </SidebarList>
                    </SidebarContainer2>
                </StyledSidebarNav>
            </SidebarHeader>
        </SidebarContainer>
    )
}

export default Sidebar;
