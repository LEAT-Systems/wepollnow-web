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

  const formThreeValidationSchema = Yup.object({
    gender: Yup.string().required().label("* This"),
  });
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center px-4 py-4 mx-auto md:px-0">
        <div className="w-full text-lg text-gray-700 border rounded-lg md:w-3/4">
          <header className="flex flex-col w-full p-6 space-y-1 border-b">
            <div className="flex flex-row items-center justify-center space-x-4">
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-black bg-gray-200 rounded-full">
                1
              </div>
              <hr className="w-12 border-black border-dashed border-1" />
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-black bg-gray-200 rounded-full">
                2
              </div>
              <hr className="w-12 border-black border-dashed border-1" />
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-black bg-gray-200 rounded-full">
                3
              </div>
              <hr className="w-12 border-black border-dashed border-1" />
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
            <p className="font-semibold text-center">
              <span className="px-4 text-white bg-gray-400 rounded-full ">
                Form Four: 3 Questions
              </span>{" "}
            </p>
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
                  <div className="flex flex-col p-8 space-y-4">
                    <div className="h-64 px-4 space-y-2 overflow-y-scroll scrollable">
                      {/*  */}
                      {/* ================= 1.  Gender    ================*/}
                      {/*  */}
                      <div className="space-y-1">
                        <FormLabel no="i" title=" Select your Gender" />
                        <p className="text-red-600">
                          <ErrorMessage name="gender" />
                        </p>
                        <div className="flex flex-row items-center justify-between space-x-4 p-2">
                          <div className="flex flex-row items-center justify-between p-4 border rounded w-full">
                            <label className="block ml-3 text-sm font-medium text-gray-700">
                              Male
                            </label>
                            <Field
                              type="radio"
                              name="gender"
                              value="male"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between p-4 border rounded w-full">
                            <label className="block ml-3 text-sm font-medium text-gray-700">
                              Female
                            </label>
                            <Field
                              type="radio"
                              name="gender"
                              value="female"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/*================== 2. Religion ===========================*/}

                      <div className="pt-4">
                        <FormLabel no="i" title=" What is your religion?" />
                        <p className="text-red-600">
                          <ErrorMessage name="religion" />
                        </p>
                        <div className="flex flex-row items-center justify-between space-x-4 p-2">
                          <div className="flex flex-row items-center justify-between p-4 border rounded w-full">
                            <label className="block ml-3 text-sm font-medium text-gray-700">
                              Christianity
                            </label>
                            <Field
                              type="radio"
                              name="religion"
                              value="christianity"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between p-4 border rounded w-full">
                            <label className="block ml-3 text-sm font-medium text-gray-700">
                              Islam
                            </label>
                            <Field
                              type="radio"
                              name="religion"
                              value="islam"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between space-x-4 p-2">
                          <div className="flex flex-row items-center justify-between p-4 border rounded w-full">
                            <label className="block ml-3 text-sm font-medium text-gray-700">
                              Traditional
                            </label>
                            <Field
                              type="radio"
                              name="religion"
                              value="traditional"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between p-4 border rounded w-full">
                            <label className="block ml-3 text-sm font-medium text-gray-700">
                              Other
                            </label>
                            <Field
                              type="radio"
                              name="religion"
                              value="other"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/* ========== 3. Select one option below ===============*/}

                      <div className="pt-4">
                        <FormLabel
                          no="i"
                          title=" Select one of the options below"
                        />
                        <p className="text-red-600">
                          <ErrorMessage name="selectOneOpt" />
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-4 md:p-2 space-y-2 md:space-y-0">
                          <div className="flex flex-row items-center justify-between p-4 border rounded w-full">
                            <label className="block ml-3 text-sm font-medium text-gray-700">
                              Student
                            </label>
                            <Field
                              type="radio"
                              name="selectOneOpt"
                              value="student"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between p-4 border rounded w-full">
                            <label className="block ml-3 text-sm font-medium text-gray-700">
                              unemployed
                            </label>
                            <Field
                              type="radio"
                              name="selectOneOpt"
                              value="unemployed"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between p-4 border rounded w-full">
                            <label className="block ml-3 text-sm font-medium text-gray-700">
                              Employed
                            </label>
                            <Field
                              type="radio"
                              name="selectOneOpt"
                              value="employed"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/* ================= 4. Accomodation status =============== */}

                      <div className="pt-4">
                        <FormLabel
                          no="i"
                          title="What best describes your accomodation status?"
                        />
                        <p className="text-red-600">
                          <ErrorMessage name="accomodationStatus" />
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-4 md:p-2 space-y-2 md:space-y-0">
                          <div className="flex flex-row items-center justify-between p-4 border rounded w-full">
                            <label className="block ml-3 text-sm font-medium text-gray-700">
                              Living with family
                            </label>
                            <Field
                              type="radio"
                              name="accomodationStatus"
                              value="Living with family"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between p-4 border rounded w-full">
                            <label className="block ml-3 text-sm font-medium text-gray-700">
                              Living with friends
                            </label>
                            <Field
                              type="radio"
                              name="accomodationStatus"
                              value="Living with friends"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between p-4 border rounded w-full">
                            <label className="block ml-3 text-sm font-medium text-gray-700">
                              Living on your own
                            </label>
                            <Field
                              type="radio"
                              name="accomodationStatus"
                              value="Living on your own"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="w-full p-4 space-x-6 border-t">
                    <button
                      type="button"
                      onClick={() => props.prev(values)}
                      className="p-2 px-8 ml-8 text-white bg-gray-400 rounded-md"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => props.next(values)}
                      type="button"
                      className="p-2 px-8 text-white bg-black rounded-md"
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
