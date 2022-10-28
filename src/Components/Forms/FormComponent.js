import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import Confirm from "./Confirm";
import Message from "./Message";
import FormFour from "./FormFour";

// From local Storage
const phone = localStorage.getItem("phoneNumber");

//
const FormComponent = () => {
  const [userIp, setUserIp] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    // Local Storage
    phone: phone,

    // Form 1
    email: "",
    firstTimeVoter: "",
    diasporaVoter: "",
    stateOfOrigin: "",

    // // Form 2
    LGAofVotingRes: "",
    stateOfVotingRes: "",
    ageRange: "",

    // // Form 3
    pvc: "",
    maritalStatus: "",
    employmentStatus: "",

    // Form 4
    gender: "",
    religion: "",
    selectOneOpt: "",
    accomodationStatus: "",
  });

  //   Getting the User IP Address
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setUserIp(res.data.IPv4);
  };

  //   Executing the axios call in an effect
  useEffect(() => {
    getData();
  }, []);

  //   Storing the userIp in the final data state to be sent to DB
  const finalData = { ...data, userIp };

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
              email: formData.email,
              firstTimeVoter: formData.firstTimeVoter,
              diasporaVoter: formData.diasporaVoter,
              stateOfVotingResidence: formData.stateOfVotingResidence,
              LGAofVotingResidence: formData.LGAofVotingResidence,
              StateOfOrigin: formData.StateOfOrigin,
              ageRange: formData.ageRange,
              pvc: formData.pvc,
              maritalStatus: formData.maritalStatus,
              employmentStatus: formData.employmentStatus,
              Gender: formData.Gender,
              Religion: formData.Religion,
              SelectOneOpt: formData.SelectOneOpt,
              AccomodationStatus: formData.AccomodationStatus,
              userIp: formData.userIp,
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
    <FormThree next={handleNextStep} prev={handlePrevStep} data={data} />,
    <FormFour next={handleNextStep} prev={handlePrevStep} data={data} />,
    <Confirm next={handleNextStep} prev={handlePrevStep} data={data} />,
    <Message state={hasError} message={errorMessage} />,
  ];

  return <div>{steps[currentStep]}</div>;
};

export default FormComponent;
