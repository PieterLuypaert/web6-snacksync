import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useFormStore from "../../store/Formstore";
import ProgressBar from "../FormComponents/ProgressBar";
import StepIndicator from "../FormComponents/StepIndicator";
import StepField from "../FormComponents/StepField";
import NavigationButtons from "../FormComponents/NavigationButtons";
import { formSteps } from "../FormComponents/formSteps";
import { useFormProgress } from "../FormComponents/useFormProgress";
import "./form.css";

const Form = () => {
  const { step, setStep, values } = useFormStore();
  const progress = useFormProgress(values);
  const currentStepConfig = formSteps[step];

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    setValue: setFormValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      sandwichName: values.sandwichName,
      hasBread: values.hasBread ? "true" : "",
      hasTopBread: values.hasTopBread ? "true" : "",
    },
  });

  useEffect(() => {
    setFormValue("hasBread", values.hasBread ? "true" : "");
    setFormValue("hasTopBread", values.hasTopBread ? "true" : "");
  }, [values.hasBread, values.hasTopBread, setFormValue]);

  const onNext = async () => {
    if (!currentStepConfig) return;

    let fieldToValidate = currentStepConfig.field;
    if (fieldToValidate === "bread") fieldToValidate = "hasBread";
    if (fieldToValidate === "topBread") fieldToValidate = "hasTopBread";

    if (fieldToValidate === "toppings" || fieldToValidate === "fork") {
      setStep(step + 1);
      return;
    }

    const valid = await trigger(fieldToValidate);
    if (valid) {
      setStep(step + 1);
    }
  };

  const onPrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const onSubmit = (data) => {
    console.log("Form Submitted: ", data);
    console.log("Store Values: ", values);
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1 className="form-title">Boterham bouwer</h1>

        <ProgressBar progress={progress} />

        <StepIndicator
          steps={formSteps}
          currentStep={step}
          onStepClick={setStep}
        />

        <div className="form-content">
          <div className="form-step">
            <h2>{currentStepConfig.name}</h2>
            <p className="step-description">{currentStepConfig.description}</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <StepField
                step={currentStepConfig}
                register={register}
                errors={errors}
              />

              {!(step === formSteps.length - 1 && values.hasFork) && (
                <NavigationButtons
                  currentStep={step}
                  totalSteps={formSteps.length}
                  onPrev={onPrev}
                  onNext={onNext}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
