// styles
import * as s from "./PageContent.styles";

// pages
import Landing from "../../pages/Landing";
import About from "../../pages/About";
import Skills from "../../pages/Skills";

const PageContent = () => {
  return (
    <s.PageWrapper>
      <div className="page-content" style={{ backgroundColor: '#FCFCFC' }}>
        <s.LandingPageWrapper>
          <Landing />
        </s.LandingPageWrapper>
        <s.SkillsPageWrapper>
          <Skills />
        </s.SkillsPageWrapper>
        <s.AboutPageWrapper>
          <About />
        </s.AboutPageWrapper>
      </div>
    </s.PageWrapper>
  );
};
export default PageContent;
