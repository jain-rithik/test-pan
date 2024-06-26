import React from "react";
import "./PanCard.css";
import emblem from "../public/images/national-emblem.png";
import user from "../public/images/user.png";

const PanCard = ({ name, number }) => {
  return (
    <div className="pan-card">
      <div className="pan-card-header">
        <div className="left-head">
          <div className="pan-card-title left-title ln-hi"><span>आयकर</span> <span>विभाग</span></div>
          <div className="pan-card-title ln-en left-en">INCOME TAX DEPARTMENT</div>
        </div>
        <div className="pan-card-emblem">
          <img src={emblem} alt="National Emblem of India" />
        </div>
        <div className="right-head">
          <div className="pan-card-title ln-hi">भारत सरकार</div>
          <div className="pan-card-title right-title-en ln-en">GOVT. OF INDIA</div>
        </div>
      </div>
      <div className="pan-card-body">
        <div>
        <div className="pan-card-name">{name}</div>
        <div className="pan-card-number">{number}</div>
        </div>
        <div className="pan-card-user-icon">
          <img src={user} alt="user icon" />
        </div>
      </div>
    </div>
  );
};

export default PanCard;
