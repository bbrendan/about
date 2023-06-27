import styled from "styled-components";

// icons
import WysiwygOutlined from "@mui/icons-material/WysiwygOutlined";

// images
import background from '../../images/bg.jpg';
import background2 from '../../images/bg2.jpg';
import background3 from '../../images/bg3.jpg';

export const Logo = styled(WysiwygOutlined)`
  color: #de9556;
  margin: 0px 32px 0px 4px;
  transform: scale(4);
`;

export const PageWrapper = styled.div`
  .scroll-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    text-align: center;
  }

  .home-page {
    justify-content: space-evenly;
  }
`;

export const LandingPageWrapper = styled.div`
  background-image: url(${background3});

  .home-content {
    text-align: left;
  }
`;

export const SkillsPageWrapper = styled.div`
  background-image: url(${background});

  .content-section {
    width: 72rem;
    margin-bottom: 2rem;
  }

  .card-section {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const AboutPageWrapper = styled.div`
  background-image: url(${background2});

  .content-section > p {
    font-size: 18px;
  }

  .content-section {
    width: 72rem;
  }

  .current-work {
    align-items: center;
    padding: 4rem;
  }
`;