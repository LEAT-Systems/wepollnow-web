import React from "react";
import { useState } from "react";
import Confirm from "./Confirm";
import Message from "./Message";

// From local Storage
const phone = localStorage.getItem("phoneNumber");

//
const FormComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    // Local Storage
    phone: phone,

    // Form 1
    castedVote: "",
  });

  //   Storing the userIp in the final data state to be sent to DB
  const finalData = { ...data, phone };

  //   Next Step
  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    // Make API Request Handler
    const makeRequest = async (formData) => {
      try {
        await fetch(
          "https://pollit-test-default-rtdb.firebaseio.com/logs.json",
          {
            method: "POST",
            body: JSON.stringify({
              phone: formData.phone,
              castedVote: formData.castedVote,
            }),
          }
        );
      } catch (error) {
        setHasError(true);
        setErrorMessage(error.message);
      }
    };

    // if on final page, send data to API
    if (final) {
      makeRequest(finalData);
    }
    setCurrentStep((prev) => prev + 1);
  };

  //   Previous Step
  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  //   Components with props
  const steps = [
    <FormOne next={handleNextStep} data={data} />,
    <FormTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
    <Message state={hasError} message={errorMessage} />,
  ];

  return <div>{steps[currentStep]}</div>;
};

export default FormComponent;
