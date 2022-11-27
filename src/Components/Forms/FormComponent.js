import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import Confirm from "./Confirm";
import Message from "./Message";
import FormFour from "./FormFour";

//
const FormComponent = () => {
  // From local Storage
  const localData = localStorage.getItem("phoneDetails");
  const { phoneNo, country } = JSON.parse(localData);

  // hooks
  const history = useHistory();
  const [currentStep, setCurrentStep] = useState(0);
  const [hasError, setHasError] = useState();
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [errorMessagePhone, setErrorMessagePhone] = useState("");
  const [HTTPerror, setHTTPerror] = useState(false);
  const [sendAsDiaspora, setSendAsDiaspora] = useState(false);
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

  // Checking a user is a diaspora voter
  let { diasporaVoter } = data;

  useEffect(() => {
    if (diasporaVoter === "true") {
      setSendAsDiaspora(true);
    }
  }, [diasporaVoter]);

  // storing state data in a variable
  const finalData = { ...data };

  //  function to handle Next Step by spreading previous data to new data
  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    // Make API Request Handler
    let requestOptions;
    const makeRequest = async (formData) => {
      if (sendAsDiaspora === true) {
        requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            phone: formData.phone,
            country: formData.country,
            email: formData.email,
            first_time_voter: formData.firstTimeVoter,
            diaspora_voter: formData.diasporaVoter,
            state_of_origin_id: parseInt(formData.stateOfOrigin),
            // NOT PASSING THESE VALUES BECAUSE A DIASPORA VOTER. THIS IS THE API SPECIFICATION
            // resident_state_id: parseInt(formData.stateOfVotingRes),
            // resident_lga_id: parseInt(formData.LGAofVotingRes),
            age_range: parseInt(formData.ageRange),
            valid_voters_card: formData.pvc,
            marital_status: parseInt(formData.maritalStatus),
            employment_status: parseInt(formData.employmentStatus),
            gender: parseInt(formData.gender),
            religion: parseInt(formData.religion),
            property_status: parseInt(formData.selectOneOpt),
            accomodation_status: parseInt(formData.accomodationStatus),
          }),
        };
      } else {
        requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            phone: formData.phone,
            country: formData.country,
            email: formData.email,
            first_time_voter: formData.firstTimeVoter,
            diaspora_voter: formData.diasporaVoter,
            state_of_origin_id: parseInt(formData.stateOfOrigin),
            resident_state_id: parseInt(formData.stateOfVotingRes),
            resident_lga_id: parseInt(formData.LGAofVotingRes),
            age_range: parseInt(formData.ageRange),
            valid_voters_card: formData.pvc,
            marital_status: parseInt(formData.maritalStatus),
            employment_status: parseInt(formData.employmentStatus),
            gender: parseInt(formData.gender),
            religion: parseInt(formData.religion),
            property_status: parseInt(formData.selectOneOpt),
            accomodation_status: parseInt(formData.accomodationStatus),
          }),
        };
      }

      const response = await fetch(
        "https://wepollnow.azurewebsites.net/voters/",
        requestOptions
      );
      const result = await response.text();
      const JSONdata = await JSON.parse(result);
      const emailHasError = JSONdata?.email?.[0];
      const phoneHasError = JSONdata?.phone?.[0];
      if (!response.ok) {
        setHasError(true);
        setHTTPerror("Something isn't right...");
      }
      if (!response.ok && emailHasError !== "") {
        setHasError(true);
        setErrorMessageEmail(emailHasError);
      }
      if (!response.ok && phoneHasError !== "") {
        setHasError(true);
        setErrorMessagePhone(phoneHasError);
      }
      if (response.ok === true) {
        localStorage.setItem("uniqueID", JSONdata.id);
        history.push("/polls", { replace: true });
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
    <Message
      state={hasError}
      messageOne={errorMessagePhone}
      messageTwo={errorMessageEmail}
      httpError={HTTPerror}
    />,
  ];

  return <div>{steps[currentStep]}</div>;
};

export default FormComponent;
