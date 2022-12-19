import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};


  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesTable = styled.table`
color: black;
`
// export const BarbersCard = styled.div`
//   background: #fff;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   border-radius: 10px;
//   max-width: 340px;
//   padding: 30px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     transform: scale(1.02);
//     transition: all 0.2s ease-in-out;
//     cursor: pointer;
//   }
// `;

// export const BarbersIcon = styled.img`
//   height: 160px;
//   width: 160px;
//   margin-bottom: 10px;
// `;

// export const BarbersH1 = styled.h1`
//   font-size: 2.5rem;
//   color: #fff;
//   margin-bottom: 64px;

//   @media screen and (max-width: 480px) {
//     font-size: 2rem;
//   }
// `;

// export const BarbersH2 = styled.h2`
//   font-size: 1rem;
//   margin-bottom: 10px;
// `;

// export const BarbersP = styled.p`
//   font-size: 1rem;
//   text-align: center;
// `;
