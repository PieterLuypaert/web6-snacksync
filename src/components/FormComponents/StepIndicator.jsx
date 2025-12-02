import React from "react";

const StepIndicator = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="step-indicator">
      {steps.map((s, index) => (
        <div
          key={index}
          className={`step ${index === currentStep ? "active" : ""} ${
            index < currentStep ? "completed" : ""
          }`}
          onClick={() => {
            if (index < currentStep) onStepClick(index);
          }}
        >
          <div className="step-number">{index + 1}</div>
          <div className="step-label">{s.name}</div>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
