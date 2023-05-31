import styled from 'styled-components';
  
export const PageWrapper = styled.div`
    .scroll-page {
        padding-left: 16px;
        display: flex;
        height: 100vh;
        width: 100vh;
    }

    .home-page {
        top: 50%;
        transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -o-transform: translateY(-50%);
    }
`;