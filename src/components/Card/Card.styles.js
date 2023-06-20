import styled from 'styled-components';
  
export const CardWrapper = styled.div`
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CardLogo = styled.div`
  width: 80px;
  margin: 1rem 0px;
  transform: scale(2);

  @media (max-width: 768px) {
    width: 64px;
    margin: 0.5rem 0px;
    transform: scale(2);
  }
`;