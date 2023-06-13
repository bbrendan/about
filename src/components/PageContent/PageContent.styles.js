import styled from "styled-components";
import WysiwygOutlined from "@mui/icons-material/WysiwygOutlined";

export const Logo = styled(WysiwygOutlined)`
  color: #de9556;
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

    .home-content {
      position: absolute;
      top: 120px;
      text-align: center;
      z-index: 1;
      width: 55%;
    }
  }

  #about {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .about-title {
      top: 40px;
      position: relative;
    }

    .content-section {
      line-height: 24px;
      text-align: center;
      z-index: 1;
      width: 80%;
    }
  }

  #skills {
    .content-section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .card-section {
      display: flex;
      justify-content: center;
    }
  }
`;

export const LandingPageWrapper = styled.div``;

export const AboutPageWrapper = styled.div`
  .current-work {
    display: inline-flex;
    width: 100%;
    justify-content: center;
  }
`;
