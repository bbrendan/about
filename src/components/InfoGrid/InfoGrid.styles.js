import styled from "styled-components";

export const GridWrapper = styled.div`
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  .grid-section {
    background-color: #DADADA;
    border-radius: 10px;
    padding: 20px;
    width: 32rem;
  }

  .section-title {
    position: relative;
    font-weight: bold;
    margin-left: 10px;
    gap: 4px;
  }

  .section-subtitle {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 10px;
  }

  .section-content {
    margin-top: 10px;
    font-size: 0.8rem;
  }

  .grid-icon {
    transform: scale(2);
  }
`;
