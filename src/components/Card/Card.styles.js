import styled from 'styled-components';
  
export const CardWrapper = styled.div`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
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

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    fill: #de9556;
    color: #de9556;
  }
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  font-family: "Space Grotesk";

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