import React from "react";

// styles
import * as s from "./Card.styles";

const Card = ({ title, logo }) => {
  return (
    <s.CardWrapper>
        <s.CardTitle>{title}</s.CardTitle>
        <s.CardLogo>{logo}</s.CardLogo>
    </s.CardWrapper>
  );
};

export default Card;