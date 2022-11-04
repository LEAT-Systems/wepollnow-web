import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Nav from "../Layout/Landing/mainNav";
import Done from "@mui/icons-material/Done";
import * as Yup from "yup";
import FormLabel from "../../UI/FormLabel";

const FormFour = (props) => {
  const [formisCompleted, setFormIsCompleted] = useState(false);
  const handleSubmit = (values) => {
    props.next(values);
  };

  // Configuring the indicators
  const { gender, religion, selectOneOption, accomodationStatus } = props.data;
  useEffect(() => {
    if (gender && religion && selectOneOption && accomodationStatus !== "") {
      setFormIsCompleted(true);
    }
  }, [gender, religion, selectOneOption, accomodationStatus]);

  // Yup schema validation
  const formThreeValidationSchema = Yup.object({
    gender: Yup.string().required().label("* This"),
  });
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center px-4 py-4 mx-auto md:px-0">
        <div className="w-full text-lg text-gray-700 md:w-3/4">
          <header className="flex flex-col w-full p-6 space-y-1 border-b">
            <div className="flex flex-row items-center justify-center space-x-4">
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white rounded-full bg-[#08C127]">
                <Done />
              </div>
              <hr className="w-12 border-[#08C127] border" />
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white rounded-full bg-[#08C127]">
                <Done />
              </div>
              <hr className="w-12 border-[#08C127] border" />
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white rounded-full bg-[#08C127]">
                <Done />
              </div>
              <hr className="w-12 border-[#08C127] border" />
              {formisCompleted ? (
                <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-green-600 rounded-full">
                  <Done />
                </div>
              ) : (
                <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-black rounded-full">
                  4
                </div>
              )}
            </div>
          </header>

          {/*  */}
          <section>
            <Formik
              validationSchema={formThreeValidationSchema}
              initialValues={props.data}
              onSubmit={handleSubmit}
            >
              {({ values }) => (
                <Form>
                  <div className="flex flex-col space-y-4 md:p-8">
                    <div className="h-full px-4 space-y-2">
                      {/*  */}
                      {/* ================= 1.  Gender    ================*/}
                      {/*  */}
                      <div className="pt-8 space-y-1 md:pt-0">
                        <FormLabel no="i" title=" Select your Gender" />
                        <p className="text-red-600">
                          <ErrorMessage name="gender" />
                        </p>
                        <div className="flex flex-row items-center justify-between space-x-4 md:p-2">
                          <label
                            htmlFor="gender"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="gender"
                              type="radio"
                              name="gender"
                              value="male"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Male</p>
                          </label>
                          <label
                            htmlFor="gender2"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="gender2"
                              type="radio"
                              name="gender"
                              value="female"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Female</p>
                          </label>
                        </div>
                      </div>

                      {/*================== 2. Religion ===========================*/}

                      <div className="pt-4">
                        <FormLabel no="i" title=" What is your religion?" />
                        <p className="text-red-600">
                          <ErrorMessage name="religion" />
                        </p>
                        <div className="flex flex-row items-center justify-between space-x-4 md:p-2">
                          <label
                            htmlFor="religion"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="religion"
                              type="radio"
                              name="religion"
                              value="christianity"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Christianity</p>
                          </label>
                          <label
                            htmlFor="religion2"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="religion2"
                              type="radio"
                              name="religion"
                              value="islam"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Islam</p>
                          </label>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-2 space-x-4 md:p-2 md:mt-0">
                          <label
                            htmlFor="religion3"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="religion3"
                              type="radio"
                              name="religion"
                              value="traditional"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Traditional</p>
                          </label>
                          <label
                            htmlFor="religion4"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="religion4"
                              type="radio"
                              name="religion"
                              value="other"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Other</p>
                          </label>
                        </div>
                      </div>

                      {/* ========== 3. Select one option below ===============*/}

                      <div className="pt-4">
                        <FormLabel title=" Select one of the options below" />
                        <p className="text-red-600">
                          <ErrorMessage name="selectOneOpt" />
                        </p>
                        <div className="flex flex-col items-center justify-between space-y-2 md:flex-row md:space-x-4 md:p-2 md:space-y-0">
                          <label
                            htmlFor="selectOneOpt"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="selectOneOpt"
                              type="radio"
                              name="selectOneOpt"
                              value="student"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Home owner</p>
                          </label>
                          <label
                            htmlFor="selectOneOpt2"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="selectOneOpt2"
                              type="radio"
                              name="selectOneOpt"
                              value="unemployed"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Renting</p>
                          </label>
                          <label
                            htmlFor="selectOneOpt3"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="selectOneOpt3"
                              type="radio"
                              name="selectOneOpt"
                              value="employed"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>None</p>
                          </label>
                        </div>
                      </div>

                      {/* ================= 4. Accomodation status =============== */}

                      <div className="pt-4 pb-8 md:pb-0">
                        <FormLabel title="What best describes your accomodation status?" />
                        <p className="text-red-600">
                          <ErrorMessage name="accomodationStatus" />
                        </p>
                        <div className="flex flex-col items-center justify-between space-y-2 md:flex-row md:space-x-4 md:p-2 md:space-y-0">
                          <label
                            htmlFor="accomodationStatus"
                            className="flex flex-row items-center w-full p-4 space-x-2 border rounded"
                          >
                            <Field
                              id="accomodationStatus"
                              type="radio"
                              name="accomodationStatus"
                              value="Living with family"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p className="text-sm md:text-lg">
                              Living with family
                            </p>
                          </label>
                          <label
                            htmlFor="accomodationStatus2"
                            className="flex flex-row items-center w-full p-4 space-x-2 border rounded"
                          >
                            <Field
                              id="accomodationStatus2"
                              type="radio"
                              name="accomodationStatus"
                              value="Living with friends"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p className="text-sm md:text-lg">
                              Living with friends
                            </p>
                          </label>
                          <label
                            htmlFor="accomodationStatus3"
                            className="flex flex-row items-center w-full p-4 space-x-2 border rounded"
                          >
                            <Field
                              id="accomodationStatus3"
                              type="radio"
                              name="accomodationStatus"
                              value="Living on your own"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p className="text-sm md:text-lg">
                              Living on your own
                            </p>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="w-full p-4 space-x-6 border-t">
                    <button
                      type="button"
                      onClick={() => props.prev(values)}
                      className="p-2 px-4 text-black bg-transparent border border-black rounded-md md:ml-8 animateBack"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => props.next(values)}
                      type="button"
                      className="p-2 px-6 text-white  bg-[#08C127] rounded-md animate"
                    >
                      Submit
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

export default FormFour;
