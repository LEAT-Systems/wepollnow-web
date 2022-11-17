import React, { useState } from "react";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import Confirm from "./Confirm";
import Message from "./Message";
import FormFour from "./FormFour";

// From local Storage
const localData = localStorage.getItem("phoneDetails");
const phoneDetails = JSON.parse(localData);
const { phoneNo, country } = phoneDetails;
const fakeID = `user-${Math.random().toString(36).slice(2)}`;
//
const FormComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [hasError, setHasError] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [uniqueID, setUniqueID] = useState("");
  const [data, setData] = useState({
    // Local Storage
    phone: phoneNo,
    country: country,

    // Form 1
    email: "",
    firstTimeVoter: "",
    diasporaVoter: "",
    stateOfVotingRes: "",

    // Form 2
    stateOfOrigin: "",
    LGAofVotingRes: "",
    ageRange: "",

    // Form 3
    pvc: "",
    maritalStatus: "",
    employmentStatus: "",

    // Form 4
    gender: "",
    religion: "",
    selectOneOpt: "",
    accomodationStatus: "",
  });

  // Storing uniqueID from state to localStorage
  localStorage.setItem("userID", uniqueID);

  // storing state data in a variable
  const finalData = { ...data };

  //  function to handle Next Step by spreading previous data to new data
  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    // Make API Request Handler
    const makeRequest = async (formData) => {
      try {
        const response = await fetch(
          "https://wepollnow-default-rtdb.firebaseio.com/users.json",
          {
            method: "POST",
            body: JSON.stringify({
              phone: formData.phone,
              country: formData.country,
              email: formData.email,
              first_time_voter: formData.firstTimeVoter,
              diaspora_voter: formData.diasporaVoter,
              state_of_origin_id: formData.stateOfOrigin,
              resident_state_id: formData.stateOfVotingRes,
              resident_lga_id: formData.LGAofVotingRes,
              age_range: formData.ageRange,
              valid_voters_card: formData.pvc,
              marital_status: formData.maritalStatus,
              employment_status: formData.employmentStatus,
              gender: formData.gender,
              religion: formData.religion,
              property_status: formData.selectOneOpt,
              accomodation_status: formData.accomodationStatus,
            }),
          }
        );
        if (!response.ok) {
          setHasError(true);
          throw new Error("Something Occured");
        } else {
          setUniqueID(fakeID);
        }

        // Catch block
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

  //   Component steps with props
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
