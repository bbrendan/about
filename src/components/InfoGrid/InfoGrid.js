import React from "react";

// styles
import * as s from "./InfoGrid.styles";

const InfoGrid = () => {
  return (
    <s.GridWrapper>
      <div className="grid">
        <div className="grid-section">
          <div className="section-title">1</div>
          <div className="section-subtitle">Subtitle 1</div>
          <div className="section-content">
            Text content for section 1 goes here.
          </div>
        </div>
        <div className="grid-section">
          <div className="section-title">2</div>
          <div className="section-subtitle">Subtitle 2</div>
          <div className="section-content">
            Text content for section 2 goes here.
          </div>
        </div>
        <div className="grid-section">
          <div className="section-title">3</div>
          <div className="section-subtitle">Subtitle 3</div>
          <div className="section-content">
            Text content for section 3 goes here.
          </div>
        </div>
        <div className="grid-section">
          <div className="section-title">4</div>
          <div className="section-subtitle">Subtitle 4</div>
          <div className="section-content">
            Text content for section 4 goes here.
          </div>
        </div>
      </div>
    </s.GridWrapper>
  );
};
export default InfoGrid;
