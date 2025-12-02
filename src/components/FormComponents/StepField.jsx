import React from "react";
import useFormStore from "../../store/Formstore";

const StepField = ({ step, register, errors }) => {
  const { values, setValue } = useFormStore();
  const {
    hasBread = false,
    hasLettuce = false,
    hasTomato = false,
    hasCheese = false,
    hasTopBread = false,
    hasFork = false,
  } = values;

  const handleToggle = (field, currentValue) => {
    setValue(field, !currentValue);
  };

  switch (step.field) {
    case "sandwichName":
      return (
        <div className="form-group">
          <input
            type="text"
            placeholder="e.g., The Ultimate Stack"
            className="name-input"
            {...register("sandwichName", step.validation)}
            onChange={(e) => {
              register("sandwichName").onChange(e);
              setValue("sandwichName", e.target.value);
            }}
          />
          {errors.sandwichName && (
            <span className="error-message">{errors.sandwichName.message}</span>
          )}
        </div>
      );

    case "bread":
      return (
        <div className="form-group">
          <button
            type="button"
            className={`ingredient-btn ${hasBread ? "active" : ""}`}
            onClick={() => handleToggle("hasBread", hasBread)}
          >
            <span className="ingredient-emoji">🍞</span>
            <span className="ingredient-name">Onderste Brood</span>
            {hasBread && <span className="checkmark">✓</span>}
          </button>
          <input
            type="hidden"
            {...register("hasBread", step.validation)}
            value={hasBread ? "true" : ""}
          />
          {errors.hasBread && (
            <span className="error-message">{errors.hasBread.message}</span>
          )}
        </div>
      );

    case "toppings":
      return (
        <div className="toppings-grid">
          <button
            type="button"
            className={`ingredient-btn ${hasCheese ? "active" : ""}`}
            onClick={() => handleToggle("hasCheese", hasCheese)}
          >
            <span className="ingredient-emoji">🧀</span>
            <span className="ingredient-name">Kaas</span>
            {hasCheese && <span className="checkmark">✓</span>}
          </button>
          <button
            type="button"
            className={`ingredient-btn ${hasTomato ? "active" : ""}`}
            onClick={() => handleToggle("hasTomato", hasTomato)}
          >
            <span className="ingredient-emoji">🍅</span>
            <span className="ingredient-name">Tomaat</span>
            {hasTomato && <span className="checkmark">✓</span>}
          </button>
          <button
            type="button"
            className={`ingredient-btn ${hasLettuce ? "active" : ""}`}
            onClick={() => handleToggle("hasLettuce", hasLettuce)}
          >
            <span className="ingredient-emoji">🥬</span>
            <span className="ingredient-name">Sla</span>
            {hasLettuce && <span className="checkmark">✓</span>}
          </button>
        </div>
      );

    case "topBread":
      return (
        <div className="form-group">
          <button
            type="button"
            className={`ingredient-btn ${hasTopBread ? "active" : ""}`}
            onClick={() => handleToggle("hasTopBread", hasTopBread)}
          >
            <span className="ingredient-emoji">🍞</span>
            <span className="ingredient-name">Bovenste Brood</span>
            {hasTopBread && <span className="checkmark">✓</span>}
          </button>
          <input
            type="hidden"
            {...register("hasTopBread", step.validation)}
            value={hasTopBread ? "true" : ""}
          />
          {errors.hasTopBread && (
            <span className="error-message">{errors.hasTopBread.message}</span>
          )}
        </div>
      );

    case "fork":
      return (
        <div className="form-group">
          {!hasFork && (
            <button
              type="button"
              className={`ingredient-btn ${hasFork ? "active" : ""}`}
              onClick={() => handleToggle("hasFork", hasFork)}
            >
              <span className="ingredient-emoji">🍴</span>
              <span className="ingredient-name">Voeg vork toe</span>
            </button>
          )}

          {hasFork && (
            <div className="final-dish-card">
              <div className="celebration-header">
                <h3>Bon Appétit! </h3>
              </div>

              <div className="dish-title">"{values.sandwichName}"</div>

              <div className="receipt-divider"></div>

              <div className="ingredients-summary">
                <div className="summary-item">
                  <span>🍞</span> <span>Crunchy Bodem</span>
                </div>
                {hasCheese && (
                  <div className="summary-item">
                    <span>🧀</span> <span>Goudgele Kaas</span>
                  </div>
                )}
                {hasTomato && (
                  <div className="summary-item">
                    <span>🍅</span> <span>Zongerijpte Tomaat</span>
                  </div>
                )}
                {hasLettuce && (
                  <div className="summary-item">
                    <span>🥬</span> <span>Verse Sla</span>
                  </div>
                )}
                {hasTopBread && (
                  <div className="summary-item">
                    <span>🍞</span> <span>De Kroon</span>
                  </div>
                )}
                <div className="summary-item">
                  <span>🍴</span> <span>Finishing Touch</span>
                </div>
              </div>

              <div className="receipt-divider"></div>

              <p className="chef-quote">
                "Een gedurfde compositie van texturen en smaken.
                Michelin-waardig!"
              </p>

              <button
                className="btn btn-primary restart-btn"
                onClick={() => window.location.reload()}
              >
                Nog een creatie maken
              </button>
            </div>
          )}
        </div>
      );

    default:
      return null;
  }
};

export default StepField;
