import React from "react";

export const OverviewDetails = ({ Icon, heading, data }) => {
  return (
    <div className="basic-details-outer">
      <div className="icon">
        <Icon />
      </div>
      <div className="basic-details-inner">
        <span>{heading}</span>
        <span>{data}</span>
      </div>
    </div>
  );
};
