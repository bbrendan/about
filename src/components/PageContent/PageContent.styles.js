import styled from 'styled-components';
import WysiwygOutlined from "@mui/icons-material/WysiwygOutlined";

export const Logo = styled(WysiwygOutlined)`
  color: #DE9556;
  margin: 0px 32px 0px 4px;
  transform: scale(4);
`;

export const PageWrapper = styled.div`
    .scroll-page {
        height: 100vh;
    }

    #home {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 64px;
        top: -80px;
    }

    #about {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 64px;
        text-align: center;
    }
`;

export const LandingPageWrapper = styled.div`
  .left-section {
    
  }

  .right-section {

  }
`;

export const AboutPageWrapper = styled.div`
  .current-work {
    display: inline-flex;
    width: 100%;
    justify-content: center;
  }
`;