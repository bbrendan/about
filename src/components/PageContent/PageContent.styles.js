import styled from "styled-components";
import WysiwygOutlined from "@mui/icons-material/WysiwygOutlined";

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
    height: 100vh;
    padding: 50px;
    border-radius: 20px;
    text-align: center;
  }
`;

export const LandingPageWrapper = styled.div`
  margin-top: 160px;

  .home-content {
    text-align: left;
  }
`;

export const AboutPageWrapper = styled.div`
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

export const SkillsPageWrapper = styled.div`
  .content-section {
    width: 72rem;
  }

  .card-section {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;