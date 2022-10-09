import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import Nav from "../Layout/Landing/mainNav";
import errorIcon from "../../images/errorImg.png";

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
      <Nav />
      <div className="flex flex-row items-center justify-center px-4 py-4 mx-auto md:px-0">
        <div className="w-full text-lg text-gray-700 border rounded-lg shadow-lg md:w-1/2">
          <header className="w-full p-8 border-b">
            <div className="flex flex-col items-center justify-center space-y-1">
              <img src={errorIcon} alt="error" />
              <h3 className="text-xl font-bold text-center md:text-2xl">
                Review & Confirm Your Details
              </h3>
              <p className="px-4 p-1 text-xs text-white font-semibold text-center bg-gradient-to-r from-blue-500 to-green-500 rounded-full md:text-[17px]">
                You can go back to modify details before submitting
              </p>
            </div>
          </header>

          {/*  */}
          <section>
            <Formik initialValues={props.data} onSubmit={handleSubmit}>
              {({ values }) => (
                <Form>
                  <div className="flex flex-col p-2 md:p-8 space-y-4">
                    <div className="h-64 px-2 md:px-4 space-y-4 overflow-y-scroll scrollable">
                      <div
                        className={
                          hasError
                            ? "bg-red-400 text-white rounded-md p-4"
                            : "hidden"
                        }
                      >
                        <b>Error:</b> All details are required. Kindly go back
                        and fill in all.
                      </div>

                      <div
                        className={
                          hasError
                            ? "border border-red-400 p-4 rounded-lg"
                            : "border border-gray-200 p-2 md:p-4 rounded-lg"
                        }
                      >
                        <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
                          <span className="font-bold uppercase text-xs md:text-lg">
                            Phone Number :
                          </span>{" "}
                          <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg ">
                            {props.data.phone}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
                          <span className="font-bold uppercase text-xs md:text-lg">
                            Email :{" "}
                          </span>
                          {""}
                          <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
                            {props.data.email}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
                          <span className="font-bold uppercase text-xs md:text-lg">
                            FIRST TIME VOTER ? :
                          </span>
                          <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
                            {props.data.firstTimeVoter}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
                          <span className="font-bold uppercase text-xs md:text-lg">
                            Diaspora Voter:{" "}
                          </span>
                          <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
                            {props.data.diasporaVoter}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
                          <span className="font-bold uppercase text-xs md:text-lg">
                            State of Voting Residence:{" "}
                          </span>
                          <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
                            {props.data.stateOfVotingRes}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
                          <span className="font-bold uppercase text-xs md:text-lg">
                            LGA of Voting Residence ? :{" "}
                          </span>
                          <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
                            {props.data.LGAofVotingRes}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
                          <span className="font-bold uppercase text-xs md:text-lg">
                            State Of Origin:{" "}
                          </span>
                          <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
                            {props.data.stateOfOrigin}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
                          <span className="font-bold uppercase text-xs md:text-lg">
                            Age range:{" "}
                          </span>
                          <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
                            {props.data.ageRange}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
                          <span className="font-bold uppercase text-xs md:text-lg">
                            Do you have a PVC?:{" "}
                          </span>
                          <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
                            {props.data.pvc}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
                          <span className="font-bold uppercase text-xs md:text-lg">
                            Marital Status:{" "}
                          </span>
                          <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
                            {props.data.maritalStatus}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between border-b px-4 py-3">
                          <span className="font-bold uppercase text-xs md:text-lg">
                            Employment Status:{" "}
                          </span>
                          <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
                            {props.data.employmentStatus}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
                          <span className="font-bold uppercase text-xs md:text-lg">
                            Gender:{" "}
                          </span>
                          <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
                            {props.data.gender}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
                          <span className="font-bold uppercase text-xs md:text-lg">
                            Religion:{" "}
                          </span>
                          <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
                            {props.data.religion}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
                          <span className="font-bold uppercase text-xs md:text-lg">
                            Selected Option:{" "}
                          </span>
                          <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
                            {props.data.selectOneOpt}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
                          <span className="font-bold uppercase text-xs md:text-lg">
                            Accomodation Status:{" "}
                          </span>
                          <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
                            {props.data.accomodationStatus}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row w-full p-2 space-x-4 border-t md:p-6">
                    <button
                      type="button"
                      onClick={() => props.prev(values)}
                      className="p-2 px-4 ml-6 text-black bg-transparent border border-black rounded-md hover:border-red-500"
                    >
                      Go Back
                    </button>
                    <button
                      type="submit"
                      className={
                        hasError
                          ? "hidden"
                          : "p-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md hover:-translate-y-1"
                      }
                    >
                      {`Confirm & Submit`}
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
