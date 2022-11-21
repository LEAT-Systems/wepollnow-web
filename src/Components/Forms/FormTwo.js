import React from "react";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Done from "@mui/icons-material/Done";
import Nav from "../Layout/Landing/mainNav";
import FormLabel from "../../UI/FormLabel";
import { states } from "./states";
import spinner from "../../images/spinner.gif";

const FormTwo = (props) => {
  const [formisCompleted, setFormIsCompleted] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [disable, setDisable] = useState(false);
  const [selectedState, setSelectedState] = useState();
  const [tooltipStatus, setTooltipStatus] = useState(0);

  // Handling next step of form
  const handleSubmit = (values) => {
    props.next(values);
  };

  let isLoading;
  if (selectedState !== undefined) {
    isLoading = data.length === 0;
  }

  // Loading LGA of voting residence from API with selected ID
  useEffect(() => {
    if (selectedState !== undefined) {
      try {
        async function getData() {
          const response = await fetch(
            `https://wepollnow.azurewebsites.net/utilities/lga/${selectedState}`
          );
          const body = await response.json();
          setData(body);
          if (!response.ok) {
            throw new Error("An error occured");
          }
        }
        getData();
      } catch (error) {
        setError(error.message);
      }
    } else {
      return;
    }
  }, [selectedState]);

  // Destructuring for Configuring the indicators
  let { diasporaVoter, stateOfVotingRes, ageRange } = props.data;

  useEffect(() => {
    // Check to disable LGA of voting residence
    if (diasporaVoter === "true") {
      setDisable(true);
    }

    // Configuring indicators
    if (stateOfVotingRes && ageRange !== "") {
      setFormIsCompleted(true);
    }
  }, [ageRange, stateOfVotingRes, diasporaVoter]);

  //  Formik-Yup validation Schema
  let formTwoValidationSchema;
  if (diasporaVoter !== "true") {
    formTwoValidationSchema = Yup.object({
      stateOfVotingRes: Yup.string().required().label("* This"),
      LGAofVotingRes: Yup.string().required().label("* This"),
    });
  }

  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center px-4 py-4 mx-auto md:px-0">
        <div className="w-full text-lg text-gray-700 rounded-lg md:w-3/4">
          <header className="flex flex-col w-full p-4 space-y-2 border-b">
            <div className="flex flex-row items-center justify-center space-x-4">
              <div className="inline-flex items-center w-5 h-5 p-4 text-white bg-[#08C127] rounded-full text-[14px] justify-center">
                <Done />
              </div>
              <hr className="w-12 border border-[#08C127] " />
              {formisCompleted ? (
                <div className="inline-flex  text-[14px] items-center justify-center w-5 h-5 p-4 text-white bg-[#08C127] rounded-full">
                  <Done />
                </div>
              ) : (
                <div className="inline-flex  text-[14px] items-center justify-center w-5 h-5 p-4 text-white bg-black rounded-full">
                  <p>2</p>
                </div>
              )}

              <hr
                className={`w-12 border-black  border ${
                  formisCompleted && "border-green-500"
                }`}
              />
              <div className="inline-flex text-[14px] items-center justify-center w-5 h-5 p-4 text-black bg-gray-100 rounded-full">
                <p>3</p>
              </div>
              <hr className="w-12 border border-black " />
              <div className="inline-flex text-[14px] items-center justify-center w-5 h-5 p-4 text-black bg-gray-100 rounded-full">
                <p>4</p>
              </div>
            </div>
          </header>
          {/*  */}
          <section>
            <Formik
              validationSchema={formTwoValidationSchema}
              initialValues={props.data}
              onSubmit={handleSubmit}
            >
              {({ values }) => (
                <Form>
                  <div className="flex flex-col space-y-2 md:p-8">
                    <div className="h-full space-y-4 md:px-4">
                      {/*  */}
                      {/* Select State of voting residence */}
                      <div className="relative flex flex-col mt-8 space-y-1 md:pb-0 md:mt-0">
                        <p
                          onMouseEnter={() => setTooltipStatus(1)}
                          onMouseLeave={() => setTooltipStatus(0)}
                          className="hover:cursor-pointer text-md font-bold underline underline-2 underline-offset-2 decoration-yellow-500 decoration-[3px]"
                        >
                          Which state will you be voting in?
                        </p>

                        {/* ========== TOOLTIP =================*/}
                        {tooltipStatus === 1 && (
                          <div
                            role="tooltip"
                            className="absolute text-white transition duration-150 ease-in-out bg-black rounded shadow-lg -top-12"
                          >
                            <p className="p-2 text-xs font-normal">
                              This is basically the location where you would be
                              residing to vote and{" "}
                              <span className="font-bold">NOT</span> your{" "}
                              <span className="font-bold">
                                State & LGA of Origin.
                              </span>
                            </p>
                          </div>
                        )}
                        {/* ========================================= */}
                        <FormLabel
                          title="Select state of voting location (Not applicable for
                          Diaspora Residents) "
                        />
                        <p className="text-red-600">
                          <ErrorMessage name="stateOfVotingRes" />
                        </p>
                        <p className="text-xs text-green-500">
                          {disable &&
                            "* Field is disabled because you are a diaspora resident"}
                        </p>

                        <Field
                          as="select"
                          onBlur={() =>
                            setSelectedState(values.stateOfVotingRes)
                          }
                          disabled={disable ? true : false}
                          name="stateOfVotingRes"
                          className={`block w-full px-3 py-3 mt-1 bg-white border border-gray-300 rounded ${
                            disable === true ? "cursor-not-allowed" : ""
                          }`}
                        >
                          <option value={null}> -- Select an option -- </option>
                          {states.map((item) => {
                            return (
                              <option
                                key={item.id}
                                value={disable === true ? null : item.id}
                              >
                                {item.name}
                              </option>
                            );
                          })}
                        </Field>
                      </div>

                      {/* LGA of voting residence */}

                      <div className="flex flex-col space-y-1 md:pb-0">
                        <FormLabel
                          no="i"
                          title=" Select L.G.A of voting location (Not applicable for
                          Diaspora Residents)"
                        />

                        <p className="text-red-600">
                          <ErrorMessage name="LGAofVotingRes" />
                        </p>
                        <p className="text-xs text-green-500">
                          {disable === true &&
                            "* Field is disabled because you are a diaspora resident."}
                        </p>
                        <p className="text-xs text-red-300">
                          {!error === "" &&
                            `${error} Check internet connection.`}
                        </p>
                        {isLoading && (
                          <div className="flex flex-row items-center justify-start space-x-2">
                            <p>Loading data...</p>
                            <img
                              src={spinner}
                              alt="spinner"
                              className="w-8 h-8"
                            />
                          </div>
                        )}
                        <div className="flex flex-row items-start justify-between">
                          <Field
                            disabled={disable === true ? true : false}
                            as="select"
                            name="LGAofVotingRes"
                            className={`block w-full px-3 py-3 mt-1 bg-white border border-gray-300 rounded ${
                              disable === true ? "cursor-not-allowed" : ""
                            }`}
                          >
                            <option value={null}>--Select an option--</option>
                            {data.map((item) => {
                              return (
                                <option key={item.id} value={item.id}>
                                  {item.name}
                                </option>
                              );
                            })}
                          </Field>
                        </div>
                      </div>

                      {/* Age Range */}

                      <div className="flex flex-col pb-8 space-y-2 md:pb-0 ">
                        <FormLabel no="i" title="Select Your Age Range" />
                        <p className="text-red-600">
                          <ErrorMessage name="ageRange" />
                        </p>
                        <div className="flex flex-row items-center justify-between space-x-4">
                          <label
                            htmlFor="ageRange1"
                            className="flex flex-row items-center w-full p-3 px-4 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="ageRange1"
                              type="radio"
                              name="ageRange"
                              value="1"
                              placeholder="18-25"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>18-25</p>
                          </label>
                          <label
                            htmlFor="ageRange2"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="ageRange2"
                              type="radio"
                              name="ageRange"
                              value="2"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>25-35</p>
                          </label>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-2 space-x-4 md:mt-0">
                          <label
                            htmlFor="ageRange3"
                            className="flex flex-row items-center w-full p-3 px-4 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="ageRange3"
                              type="radio"
                              name="ageRange"
                              value="3"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>35-45</p>
                          </label>
                          <label
                            htmlFor="ageRange4"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="ageRange4"
                              type="radio"
                              name="ageRange"
                              value="4"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>45-50</p>
                          </label>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-2 space-x-4 md:space-y-4 md:pb-0 md:mt-0">
                          <label
                            htmlFor="ageRange5"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="ageRange5"
                              type="radio"
                              name="ageRange"
                              value="5"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>50 and above</p>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="w-full px-6 py-6 space-x-6 border-t">
                    <button
                      onClick={() => props.prev(values)}
                      type="button"
                      className="p-2 px-4 text-black bg-transparent border border-black rounded-md md:ml-6 animateBack"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="p-2 px-8 text-white bg-[#08C127] rounded-md animate"
                    >
                      Next
                    </button>
                  </section>
                </Form>
              )}
            </Formik>
          </section>
        </div>
      </div>
    </>
  );
};

export default FormTwo;
