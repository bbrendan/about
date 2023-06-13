// styles
import * as s from "./PageContent.styles";

// pages
import Landing from "../../pages/Landing";
import About from "../../pages/About";
import Skills from "../../pages/Skills";

const PageContent = () => {
  return (
    <s.PageWrapper>
      <div className="page-content">
        <s.LandingPageWrapper className="landing-page-wrapper">
          <Landing />
        </s.LandingPageWrapper>
        <s.AboutPageWrapper>
          <About />
        </s.AboutPageWrapper>
        <s.AboutPageWrapper>
          <About />
        </s.AboutPageWrapper>
        <Skills />
      </div>
    </s.PageWrapper>
  );
};
export default PageContent;
