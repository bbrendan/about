import React from "react";

// styles
import * as s from "./Card.styles";

const Card = (props) => {
  return (
    <s.CardWrapper>
        <h1 className="card-title">{props.title}</h1>
        {props.icon}
        <h4 className="card-subtitle">{props.subtitle}</h4>
        <p className="card-subtext">{props.subtext}</p>
    </s.CardWrapper>
  );
};

export default Card;
