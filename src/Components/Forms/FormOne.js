import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DoneIcon from "@mui/icons-material/Done";
import Nav from "../Layout/Landing/mainNav";
import FormLabel from "../../UI/FormLabel";
import { states } from "./states";

const FormOne = (props) => {
  // destructuring to configure the form arrow indicators
  let { email, firstTimeVoter, diasporaVoter, stateOfOrigin } = props.data;
  const [formisCompleted, setFormIsCompleted] = useState(false);
  const [isDiaspora, setIsDiaspora] = useState();

  // Handles next step of form
  const handleSubmit = (values) => {
    props.next(values);
  };

  // Configuring the indicators
  useEffect(() => {
    if (diasporaVoter && email && stateOfOrigin && firstTimeVoter !== "") {
      setFormIsCompleted(true);
    }
  }, [email, stateOfOrigin, diasporaVoter, firstTimeVoter]);

  // Yup form Validation Schema
  const formOneValidationSchema = Yup.object({
    email: Yup.string().email().required().label("* This"),
    stateOfOrigin: Yup.string().required().label("* This"),
    firstTimeVoter: Yup.string().required().label("* This"),
  });
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center px-4 py-4 mx-auto md:px-0">
        <div className="w-full text-lg text-gray-700 rounded-lg md:w-3/4">
          <header className="flex flex-col w-full p-6 space-y-4 border-b md:space-y-2">
            <div className="flex flex-row items-center justify-center space-x-4">
              {formisCompleted ? (
                <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-[#08C127] rounded-full">
                  <DoneIcon />
                </div>
              ) : (
                <div className="inline-flex text-[14px] items-center justify-center w-5 h-5 p-4 text-white bg-black rounded-full">
                  <p>1</p>
                </div>
              )}

              <hr
                className={`w-12 border-gray-300 border ${
                  formisCompleted && "border-green-500"
                }`}
              />
              <div className="inline-flex text-[14px] items-center justify-center w-5 h-5 p-4 text-black bg-gray-100 rounded-full">
                <p>2</p>
              </div>
              <hr className="w-12 border border-gray-300" />
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-black bg-gray-100 rounded-full">
                <p className="text-[14px]"> 3</p>
              </div>
              <hr className="w-12 border border-gray-300" />
              <div className="inline-flex text-[14px] items-center justify-center w-5 h-5 p-4 text-black bg-gray-100 rounded-full">
                <p>4</p>
              </div>
            </div>
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
                  <div className="flex flex-col space-y-4 md:p-8">
                    <div className="h-full px-4 space-y-4 ">
                      {/* Email Address */}

                      <div className="flex flex-col pt-8 space-y-1 md:p-2 md:pt-0">
                        <FormLabel no="i" title="Enter Email " />
                        <p className="text-red-600">
                          <ErrorMessage name="email" />
                        </p>
                        <Field
                          name="email"
                          placeholder="Enter Email Address"
                          className="w-full p-4 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-md accent-green-500 focus:shadow-outline"
                        />
                      </div>

                      {/* First Time Voter */}

                      <div className="space-y-1">
                        <FormLabel no="i" title="Are you a First Time Voter?" />
                        <div className="flex flex-row items-center justify-between space-x-4 md:p-2">
                          <label
                            htmlFor="firstTimeVoter"
                            className={`flex radio flex-row items-center w-full p-3 space-x-2 border rounded md:p-4`}
                          >
                            <Field
                              id="firstTimeVoter"
                              type="radio"
                              name="firstTimeVoter"
                              value="true"
                              className="w-4 h-4 radio"
                            />
                            <p>Yes</p>
                          </label>
                          <label
                            htmlFor="firstTimeVoterTwo"
                            className={`flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4 radio`}
                          >
                            <Field
                              id="firstTimeVoterTwo"
                              type="radio"
                              name="firstTimeVoter"
                              value="false"
                              className="w-4 h-4"
                            />
                            <p>No</p>
                          </label>
                        </div>
                      </div>

                      {/* Diaspora Voter */}
                      <div className="space-y-1">
                        <FormLabel
                          no="i"
                          title="Are you a Diaspora Resident? "
                        />
                        <div className="flex flex-row items-center justify-between space-x-4 md:p-2">
                          {/*  */}
                          {/* DIASPORA VOTER OPTION : 'YES'  */}
                          <label
                            htmlFor="diasporaVoter"
                            className="flex flex-row items-center w-full p-4 space-x-2 border rounded"
                          >
                            <Field
                              id="diasporaVoter"
                              type="radio"
                              name="diasporaVoter"
                              value="true"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Yes</p>
                          </label>

                          {/* DIASPORA VOTER OPTION : 'NO'  */}
                          <label
                            htmlFor="diasporaVoterTwo"
                            className="flex flex-row items-center w-full p-4 space-x-2 border rounded"
                          >
                            <Field
                              id="diasporaVoterTwo"
                              type="radio"
                              name="diasporaVoter"
                              value="false"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>No</p>
                          </label>
                        </div>
                      </div>
                      {/* State of Origin  */}

                      <div className="space-y-2 md:p-2">
                        <FormLabel no="i" title=" Select State of Origin" />
                        <p className="text-red-600">
                          <ErrorMessage name="stateOfOrigin" />
                        </p>
                        <div className="flex flex-row items-start justify-between pb-8 md:pb-0">
                          <Field
                            as="select"
                            name="stateOfOrigin"
                            className="block w-full p-4 px-3 py-3 mt-1 bg-white border border-gray-300 rounded"
                          >
                            <option value={null}>-- Select an option--</option>
                            {states.map((item) => {
                              return (
                                <option key={item.id} value={item.id}>
                                  {item.name}
                                </option>
                              );
                            })}
                          </Field>
                        </div>
                      </div>
                    </div>
                  </div>
                  <footer className="w-full p-4 border-t">
                    <button
                      type="submit"
                      className="p-2 px-8 md:ml-8 text-white bg-[#08C127] rounded-md animate"
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
