import React from "react";

const StorageCard = ({
  cardIndex,
  storageAmount,
  storageTotal,
  percentage,
  imageSrc,
}) => {
  return (
    <div className={`storage-card storage-card-${cardIndex}`}>
      <div className={`card-body card-body-${cardIndex}`}>
        <div className="left-section">
          <div className="card-header">
            <span>+12% this month</span>
          </div>

          <div className="storage-details">
            <p className="storage-details-title">Storage Used</p>
            <div className="storage-usage">
              <h2 className="storage-amount">{storageAmount}</h2>
              <span className="storage-total">/ {storageTotal}</span>
            </div>

            <div className="progress-bar-container">
              <div
                className={`progress-bar-fill progress-bar-fill-${cardIndex}`}
                style={{ width: `${percentage}%` }}></div>
            </div>
          </div>
        </div>

        <div className="device-icon-container">
          <img src={imageSrc} alt="Device" className="device-image" />
          <img
            src={imageSrc}
            alt="Device"
            className="device-image device-image-bg"
          />
        </div>
      </div>
    </div>
  );
};

export default StorageCard;
