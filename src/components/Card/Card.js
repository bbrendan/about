import React from "react";

// styles
import * as s from "./Card.styles";

const Card = ({ title, logo }) => {
  return (
    <s.CardWrapper>
        <s.CardTitle className="card-title">{title}</s.CardTitle>
        <s.CardLogo className="card-logo">{logo}</s.CardLogo>
    </s.CardWrapper>
  );
};

export default Card;