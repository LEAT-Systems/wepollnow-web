import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Nav from "../Layout/Landing/mainNav";
import Done from "@mui/icons-material/Done";
import FormLabel from "../../UI/FormLabel";
import * as Yup from "yup";

const FormThree = (props) => {
  const [formisCompleted, setFormIsCompleted] = useState(false);
  const handleSubmit = (values) => {
    props.next(values);
  };
  // Configuring the indicators
  const { pvc, maritalStatus, employmentStatus } = props.data;
  useEffect(() => {
    if (pvc && employmentStatus && maritalStatus !== "") {
      setFormIsCompleted(true);
    }
  }, [maritalStatus, pvc, employmentStatus]);

  const formThreeValidationSchema = Yup.object({});
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center px-4 py-4 mx-auto md:px-0">
        <div className="w-full text-lg text-gray-700 md:w-3/4">
          <header className="flex flex-col w-full p-8 space-y-2 border-b">
            <div className="flex flex-row items-center justify-center space-x-4">
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-[#08C127] rounded-full">
                <Done />
              </div>
              <hr className="w-12 border border-[#08C127]" />
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-[#08C127] rounded-full">
                <Done />
              </div>
              <hr className="w-12 border border-[#08C127]" />
              {formisCompleted ? (
                <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-[#08C127] rounded-full">
                  <Done />
                </div>
              ) : (
                <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-black rounded-full">
                  3
                </div>
              )}
              <hr
                className={`w-12 border-black  border ${
                  formisCompleted && "border-green-500"
                }`}
              />
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-black bg-gray-200 rounded-full">
                4
              </div>
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
                      {/* Do you have a PVC */}
                      <div className="py-4 pt-8 space-y-1 md:pt-0">
                        <FormLabel no="i" title="Do you have a PVC?" />
                        <p className="text-red-600">
                          <ErrorMessage name="pvc" />
                        </p>
                        <div className="flex flex-row items-center justify-between space-x-4 md:p-2">
                          <label
                            htmlFor="pvc"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="pvc"
                              type="radio"
                              name="pvc"
                              value="true"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Yes</p>
                          </label>
                          <label
                            htmlFor="pvc2"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="pvc2"
                              type="radio"
                              name="pvc"
                              value="false"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>No</p>
                          </label>
                        </div>
                      </div>

                      {/* Marital Status */}

                      <div className="pt-4">
                        <FormLabel title="What is your marital status?" />
                        <p className="text-red-600">
                          <ErrorMessage name="employmentStatus" />
                        </p>
                        <div className="flex flex-row items-center justify-between space-x-4 md:p-2">
                          <label
                            htmlFor="maritalStatus"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="maritalStatus"
                              type="radio"
                              name="maritalStatus"
                              value="1"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Single</p>
                          </label>
                          <label
                            htmlFor="maritalStatus2"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="maritalStatus2"
                              type="radio"
                              name="maritalStatus"
                              value="2"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Married</p>
                          </label>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-2 space-x-4 md:p-2 md:mt-0">
                          <label
                            htmlFor="maritalStatus3"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="maritalStatus3"
                              type="radio"
                              name="maritalStatus"
                              value="3"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Divorced</p>
                          </label>
                          <label
                            htmlFor="maritalStatus4"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="maritalStatus4"
                              type="radio"
                              name="maritalStatus"
                              value="4"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p className="">Widowed</p>
                          </label>
                        </div>
                      </div>

                      {/* Employment Status */}

                      <div className="pt-4 pb-8 md:pb-0">
                        <FormLabel title=" What best describes your employment status?" />
                        <p className="text-red-600">
                          <ErrorMessage name="employmentStatus" />
                        </p>
                        <div className="flex flex-row items-center justify-between space-x-4 md:p-2">
                          <label
                            htmlFor="employmentStatus"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="employmentStatus"
                              type="radio"
                              name="employmentStatus"
                              value="1"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Student</p>
                          </label>
                          <label
                            htmlFor="employmentStatus2"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="employmentStatus2"
                              type="radio"
                              name="employmentStatus"
                              value="2"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p className="">Employed</p>
                          </label>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-2 space-x-4 md:p-2 md:mt-0">
                          <label
                            htmlFor="employmentStatus3"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="employmentStatus3"
                              type="radio"
                              name="employmentStatus"
                              value="3"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Unemployed</p>
                          </label>
                          <label
                            htmlFor="employmentStatus4"
                            className="flex flex-row items-center w-full p-4 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="employmentStatus4"
                              type="radio"
                              name="employmentStatus"
                              value="4"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p className="md:text-lg">Self-employed</p>
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

export default FormThree;
