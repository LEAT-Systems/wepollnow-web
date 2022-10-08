import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DoneIcon from "@mui/icons-material/Done";
import Nav from "../Layout/Landing/mainNav";
import FormLabel from "../../UI/FormLabel";

const FormOne = (props) => {
  const [formisCompleted, setFormIsCompleted] = useState(false);
  const handleSubmit = (values) => {
    props.next(values);
  };

  // Configuring the indicators
  const { email, firstTimeVoter, diasporaVoter, stateOfVotingRes } = props.data;
  useEffect(() => {
    if (diasporaVoter && stateOfVotingRes && email && firstTimeVoter !== "") {
      setFormIsCompleted(true);
    }
  }, [email, stateOfVotingRes, diasporaVoter, firstTimeVoter]);

  // Validation Schema
  const formOneValidationSchema = Yup.object({
    email: Yup.string().email().required().label("* This"),
    firstTimeVoter: Yup.string().required().label("* This"),
    stateOfVotingRes: Yup.string().required().label("*This"),
  });
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center px-4 py-4 mx-auto md:px-0">
        <div className="w-full text-lg text-gray-700 border rounded-lg md:w-2/4">
          <header className="flex flex-col w-full p-6 space-y-4 border-b md:space-y-2">
            <div className="flex flex-row items-center justify-center space-x-4">
              {formisCompleted ? (
                <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-green-600 rounded-full">
                  <DoneIcon />
                </div>
              ) : (
                <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-black rounded-full">
                  1
                </div>
              )}

              <hr
                className={`w-12 border-black border-dashed border ${
                  formisCompleted && "border-green-500"
                }`}
              />
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-black bg-gray-100 rounded-full">
                2
              </div>
              <hr className="w-12 border-black border-dashed border" />
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-black bg-gray-100 rounded-full">
                3
              </div>
              <hr className="w-12 border-black border-dashed border" />
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-black bg-gray-100 rounded-full">
                4
              </div>
            </div>
            <p className="font-semibold text-center">
              <span className="px-4 text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-full text-sm">
                Form One: 4 Questions
              </span>{" "}
            </p>
          </header>

          {/*  */}
          <section>
            <Formik
              validationSchema={formOneValidationSchema}
              initialValues={props.data}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form>
                  <div className="flex flex-col p-1 md:p-8 space-y-4">
                    <div className="h-64 px-4 space-y-4 overflow-y-scroll scrollable">
                      {/* Email Address */}

                      <div className="flex flex-col p-2 space-y-1">
                        <FormLabel no="i" title="Enter Email " />
                        <p className="text-red-600">
                          <ErrorMessage name="email" />
                        </p>
                        <Field
                          name="email"
                          placeholder="Enter Email Address"
                          className="w-full  h-12 px-4 mb-2 text-lg text-gray-700 rounded-md placeholder-gray-600 border focus:shadow-outline"
                        />
                      </div>

                      {/* First Time Voter */}

                      <div className="space-y-1">
                        <FormLabel
                          no="i"
                          title="Are you a first time voter? "
                        />
                        <div className="flex flex-row items-center justify-between space-x-4 p-2">
                          <div className="flex flex-row items-center p-4 border space-x-2 rounded w-full">
                            <Field
                              type="radio"
                              name="firstTimeVoter"
                              value="yes"
                              className="w-4 h-4 border-gray-300"
                            />
                            <p>Yes</p>
                          </div>
                          <div className="flex flex-row items-center space-x-2 p-4 border rounded w-full">
                            <Field
                              type="radio"
                              name="firstTimeVoter"
                              value="no"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>No</p>
                          </div>
                        </div>
                      </div>

                      {/* Diaspora Voter */}

                      <div className="space-y-1">
                        <FormLabel no="i" title="Are you a Diaspora voter? " />
                        <div className="flex flex-row items-center justify-between space-x-4 p-2">
                          <div className="flex flex-row items-center p-4 border rounded w-full space-x-2">
                            <Field
                              type="radio"
                              name="diasporaVoter"
                              value="yes"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Yes</p>
                          </div>
                          <div className="flex flex-row items-center  p-4 border rounded w-full space-x-2">
                            <Field
                              type="radio"
                              name="diasporaVoter"
                              value="no"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>No</p>
                          </div>
                        </div>
                      </div>

                      {/* Select State of voting residence */}

                      <div className="flex flex-col p-2 space-y-1">
                        <FormLabel
                          no="i"
                          title="Select state of voting residence (Not applicable for
                          Diaspora Voters) "
                        />
                        <p className="text-red-600">
                          <ErrorMessage name="stateOfVotingRes" />
                        </p>
                        <Field
                          as="select"
                          name="stateOfVotingRes"
                          placeholder="Select State of Voting Residence"
                          className="w-full h-12 px-4 mb-2 text-lg text-gray-700 rounded-md placeholder-gray-600 border focus:shadow-outline"
                        >
                          <option value="ebonyi">1</option>
                          <option value="ekiti">2</option>
                          <option value="oyo">3</option>
                        </Field>
                      </div>

                      {/*  */}
                    </div>
                  </div>
                  <footer className="w-full p-4 border-t">
                    <button
                      type="submit"
                      className="p-2 px-8 ml-8 text-white bg-green-500 rounded-md hover:-translate-y-1 hover:bg-green-600"
                    >
                      Next
                    </button>
                  </footer>
                </Form>
              )}
            </Formik>
          </section>
        </div>
      </div>
    </>
  );
};

export default FormOne;
