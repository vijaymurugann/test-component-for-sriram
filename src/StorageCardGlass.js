import React from "react";
import LiquidGlass from "liquid-glass-react";

const StorageCardGlass = ({
  cardIndex,
  storageAmount,
  storageTotal,
  percentage,
  imageSrc,
}) => {
  return (
    <LiquidGlass
      displacementScale={50}
      blurAmount={0.05}
      saturation={120}
      aberrationIntensity={1.5}
      elasticity={0.2}
      cornerRadius={16}
      padding="16px"
      className={`storage-card storage-card-${cardIndex}`}
    >
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
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="device-icon-container">
          <img src={imageSrc} alt="Device" className="device-image" />
        </div>
      </div>
    </LiquidGlass>
  );
};

export default StorageCardGlass;
