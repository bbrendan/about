import styled from 'styled-components';
  
export const CardWrapper = styled.div`
    width: 30vh;
    border: 1px solid #DE9556;
    background: #FFF8DD;
    border-radius: 10px;
    margin: 8px;
    padding: 8px 24px;

    .card-title {
        font-size: 32px;
    }

    .card-subtitle {
        font-size: 16px;
    }

    .card-subtext {
        font-size: 14px;
    }
`;

export const CardIcon = styled.div`
    .MuiSvgIcon-root {
        transform: scale(2);
    }
`; 