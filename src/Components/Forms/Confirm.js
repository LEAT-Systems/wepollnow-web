import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import errorIcon from "../../images/errorImg.png";
import closeButton from "../../images/CloseButton.png";

const Confirm = (props) => {
  const [hasError, sethasError] = useState(false);
  const handleSubmit = (values) => {
    props.next(values, true);
  };
  const {
    phone,
    email,
    firstTimeVoter,
    diasporaVoter,
    stateOfVotingRes,
    LGAofVotingRes,
    stateOfOrigin,
    ageRange,
    pvc,
    maritalStatus,
    employmentStatus,
    gender,
    religion,
    selectOneOpt,
    accomodationStatus,
  } = props.data;

  const data = [
    phone,
    email,
    firstTimeVoter,
    diasporaVoter,
    stateOfVotingRes,
    LGAofVotingRes,
    stateOfOrigin,
    ageRange,
    pvc,
    maritalStatus,
    employmentStatus,
    gender,
    religion,
    selectOneOpt,
    accomodationStatus,
  ];

  useEffect(() => {
    data.forEach((item) => {
      if (item === "") {
        sethasError(true);
      }
    });
  });

  return (
    <>
      <div className="flex flex-row items-center bg-[#7F7F7F] justify-center min-h-screen px-8  py-8 mx-auto md:px-0">
        <div className="w-full text-lg text-gray-700 bg-white border rounded-lg shadow-lg md:w-1/3">
          <header className="w-full p-8">
            <div className="flex flex-row items-end justify-end">
              <Formik initialValues={props.data} onSubmit={handleSubmit}>
                {({ values }) => (
                  <Form>
                    <button type="button" onClick={() => props.prev(values)}>
                      <img src={closeButton} alt="close" />
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <img src={errorIcon} alt="error" />
              <h3 className="text-xl font-bold text-center md:text-2xl">
                Confirm Action
              </h3>
              <p className="px-4 p-1 text-xs text-gray-500 max-w-md text-center leading-normal md:text-[16px]">
                Kindly ensure all your details are correct before proceeding to
                confirm submission.
              </p>
              {hasError && (
                <p className="text-red-500">
                  Error: You didnt supply all details
                </p>
              )}
            </div>
          </header>

          {/*  */}
          <section>
            <Formik initialValues={props.data} onSubmit={handleSubmit}>
              {({ values }) => (
                <Form>
                  <div className="flex flex-row items-end justify-end w-full p-2 space-x-4 md:px-6 md:py-4">
                    <button
                      type="button"
                      onClick={() => props.prev(values)}
                      className="p-2 px-6 ml-6 text-black bg-transparent border border-black rounded-md animateBack"
                    >
                      {hasError ? "Go Back" : "Cancel"}
                    </button>
                    <button
                      type="submit"
                      className={
                        hasError
                          ? "hidden"
                          : "p-2 px-6 bg-[#08C127] text-white rounded-md animate"
                      }
                    >
                      {`Confirm`}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </section>
        </div>
      </div>
    </>
  );
};

export default Confirm;
