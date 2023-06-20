import React from "react";

// styles
import * as s from "./SocialsMenu.styles";

// icons
import { Instagram, GitHub, LinkedIn, Twitter } from "@mui/icons-material";

const SocialsMenu = () => {
  return (
    <s.SocialsWrapper className="socials-menu-wrapper">
      <s.SocialsLink href="https://www.instagram.com">
        <Instagram />
      </s.SocialsLink>
      <s.SocialsLink href="https://www.gitHub.com">
        <GitHub />
      </s.SocialsLink>
      <s.SocialsLink href="https://www.linkedIn.com">
        <LinkedIn />
      </s.SocialsLink>
      <s.SocialsLink href="https://www.twitter.com">
        <Twitter />
      </s.SocialsLink>
    </s.SocialsWrapper>
  );
};

export default SocialsMenu;