import React from "react";

const NavigationButtons = ({
  currentStep,
  totalSteps,
  onPrev,
  onNext,
  disabled,
}) => {
  return (
    <div className="nav-buttons">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={onPrev}
        disabled={currentStep === 0}
      >
        ← Terug
      </button>

      {currentStep < totalSteps - 1 ? (
        <button
          type="button"
          className="btn btn-primary"
          onClick={onNext}
          disabled={disabled}
        >
          Volgende →
        </button>
      ) : (
        <button type="submit" className="btn btn-primary">
          Klaar!
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
