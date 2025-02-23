import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import PersonalDetails from "./FormSteps/PersionalDetails/PersionalDetails";
import AccountDetails from "./FormSteps/AccountDetails/AccountDetails";
import Confirmation from "./FormSteps/Confirmation/Confirmation";
import { FormWrapper } from "./FormWraper/FormWraper";

const TabbedStepperForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { trigger } = useFormContext();

  const steps = [
    { title: "Personal Details", component: <PersonalDetails /> },
    { title: "Account Details", component: <AccountDetails /> },
    { title: "Confirmation", component: <Confirmation /> },
  ];

  const handleNext = async () => {
    const isValid = await trigger();
    if (isValid) {
      setActiveTab((prev) => prev + 1);
    }
  };

  return (
    <FormWrapper>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
        <div className="flex border-b mb-5">
          {steps.map((step, index) => (
            <button
              key={index}
              className={`py-2 px-4 w-1/3 text-center font-semibold ${
                activeTab === index
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              disabled={index > activeTab}
            >
              {step.title}
            </button>
          ))}
        </div>

        {steps[activeTab].component}

        <div className="flex justify-between mt-6">
          {activeTab > 0 && (
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
              onClick={() => setActiveTab((prev) => prev - 1)}
            >
              Back
            </button>
          )}

          {activeTab < steps.length - 1 ? (
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </FormWrapper>
  );
};

export default TabbedStepperForm;
