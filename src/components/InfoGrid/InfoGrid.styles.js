import styled from "styled-components";

export const GridWrapper = styled.div`
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  .grid-section {
    background-color: #f2f2f2;
    padding: 20px;
  }

  .section-title {
    font-size: 24px;
    font-weight: bold;
  }

  .section-subtitle {
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
  }

  .section-content {
    margin-top: 10px;
  }
`;
