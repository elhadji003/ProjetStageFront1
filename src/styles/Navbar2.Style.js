import Image from 'next/image';
import styled from 'styled-components';

export const Navbar2Container = styled.div`
    border-bottom: 1px solid #e2e8f0;
`;

export const Navbar2Div1 = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  padding: 0 1rem; 
  
  @media (min-width: 567px) {
    padding: 0 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 2rem; 
  }
`;

export const Navbar2Div2 = styled.div`
  position: relative;
  display: flex;
  height: 3.5rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;


export const Navbar2Nav = styled.nav`
  border-bottom: 1px solid #e2e8f0;
`;

export const Title2Container = styled.div`

`;

export const Flex2Container = styled.div`
  display: flex;
  justify-content: between;
`;

export const Title2 = styled.span`
  position: relative;
  color: var(--text-dark); 
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: bold; 
  // left: 2rem;

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: block;
  }

`;

export const Toolbar2 = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;


export const Search2Container = styled.div`
  position: relative;
`;

export const Search2Input = styled.input`
  border: 1px solid #e2e8f0;
  outline: none;
  border-radius: 9999px;
  padding: 0.5rem;
  

  @media (min-width: 320px) {
    width: auto;
  }

  
`;

export const BellIcon2 = styled.div`
  /* Ajoutez ici les styles pour l'icône de la cloche */
`;

export const Profile2Image = styled.div`
  width: 2.5rem; /* Correspond à h-10 */
  height: 2.5rem; /* Correspond à w-10 */
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: 320px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

export const Logout2Icon = styled.div`
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: block;
  }

`;

export const ProfileAdminImage = styled(Image)`

`;

export const Header2Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  color: var(--text-dark);
  border-radius: 0.375rem;
  font-size: 1.25rem;
  font-weight: 300;
  padding: 0.3rem;
  left: 0.7rem;


   @media (min-width: 320px) {
    align-items: stretch; 
    justify-content: flex-start;
    }
`;

export const Header3Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  color: var(--text-dark);
  border-radius: 0.375rem;
  font-size: 1.25rem;
  font-weight: 300;
`;

export const Header1Subtitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: grey;
  opacity: 0.5;
  text-decoration: none;
`;

export const ButtonModal = styled.button`
  background: none;
  border: none;
`;

export const Header2Subtitle = styled.span`
  font-size: 0.875rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: grey;
  
`;

export const HeaderButtonPlus = styled.div`
  background: none;
  border: 1px solid grey;
  border-radius: 0.75rem;
  padding: 0.3rem;  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

export const Header2Container = styled.header`
//   display: flex;
//   flex: 1;
//   align-items: center;
//   justify-content: center;

//   @media (min-width: 640px) {
//     align-items: stretch; 
//     justify-content: flex-start;
//   }
// `;

export const Hidden2Container = styled.div`
//   display: flex;
//   flex-direction: column;


//   @media (min-width: 640px) {
//     display: block;
//     margin-left: 1.5rem; /* Correspond à sm:ml-6 */
  }
`;

export const Flex2ColumnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items-center;
  justify-content: space-between;
  padding: 1rem;

  @media (min-width: 320px) {
    display: flex;
    // flex-direction: column;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;

export const StyleSpanCreer = styled.span`
  font-size: 1rem;
  color: black;
`
export const StyleIconCreer = styled.span``

