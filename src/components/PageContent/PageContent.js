// components
import * as s from "./PageContent.styles";

// pages
import Landing from "../../pages/Landing";
import About from "../../pages/About";
import Work from "../../pages/Work";

const PageContent = () => {
  return (
    <s.PageWrapper>
      <Landing className="test" />
      <About />
      <Work />
    </s.PageWrapper>
  );
};
export default PageContent;