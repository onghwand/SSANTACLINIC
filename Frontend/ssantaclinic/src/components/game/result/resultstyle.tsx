import styled from 'styled-components';

// export const ResultDiv = styled.div`
//   transform: translate(-50%, -50%);
//   background-color: gray;
//   border: 1px solid black;
//   border-radius: 8px;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

export const CoinImg = styled.img`
  width: 50px;
  height: 50px;
  z-index: 999;
  vertical-align: middle;
`;

export const ResultDiv = styled.div`
  width: 40%;
  height: 60%;
  z-index: 999;
  position: fixed;
  top: 20%;
  left: 30%;
  
  
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  
  display: flex;
  
  flex-direction: column;
  align-items:center;
  justify-content:center;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 0 18px;
  text-align: center;
  text-decoration: none;
  
  
  touch-action: manipulation;
  font-family: 'Cafe24Ssurround';
  }
`;

export const YesButton = styled.button`
  z-index: 4;
  position: relative;
  width: 200px;
  background-color: #561d18;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 0 18px;
  text-align: center;
  text-decoration: none;
  color: #ffbf00;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-family: 'Cafe24Ssurround';
  }

  :hover {
  background-color: #fff;
  }

  :active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
  }

  @media (min-width: 768px) {
  {
    min-width: 40px;
    padding: 0 20px;
  }
`;
