import React from "react";

// styles
import * as s from "./InfoGrid.styles";

// icons
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import DataObjectRoundedIcon from '@mui/icons-material/DataObjectRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import CloudSyncRoundedIcon from '@mui/icons-material/CloudSyncRounded';

const InfoGrid = () => {
  return (
    <s.GridWrapper>
      <div className="grid">
        <div className="grid-section">
          <div className="section-title"><ViewQuiltRoundedIcon className="grid-icon"/></div>
          <div className="section-subtitle">Front-end Development</div>
          <div className="section-content">
            Creating and designing user-facing components ensuring that UI is visually appealing, interactive, and responsive
          </div>
        </div>
        <div className="grid-section">
          <div className="section-title"><DataObjectRoundedIcon className="grid-icon"/></div>
          <div className="section-subtitle">Back-end Development</div>
          <div className="section-content">
            Worked on server-side logic, databases, APIs, integrations to handle business logic and provide dynamic and interactive experiences
          </div>
        </div>
        <div className="grid-section">
          <div className="section-title"><StorageRoundedIcon className="grid-icon"/></div>
          <div className="section-subtitle">Database Management</div>
          <div className="section-content">
            Designing the structure of databases, storing and retrieving data efficiently, handle data storage and manipulation to ensure data integrity
          </div>
        </div>
        <div className="grid-section">
          <div className="section-title"><CloudSyncRoundedIcon className="grid-icon"/></div>
          <div className="section-subtitle">DevOps and Deployment</div>
          <div className="section-content">
            Development and operations, optimize application performance, maintain infrastructure to manage, automate, and deploy
          </div>
        </div>
      </div>
    </s.GridWrapper>
  );
};
export default InfoGrid;
