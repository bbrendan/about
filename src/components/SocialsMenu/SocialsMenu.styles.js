import styled from "styled-components";

export const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12rem;
`;

export const SocialsLink = styled.a`
  color: #333;
  transform: scale(2);
  transition: color 0.3s ease-in-out;

  @media (max-width: 768px) {
    transform: scale(1.5);
    gap: 4rem;
  }

  &:hover {
    color: #de9556;
  }
`;