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
  const { pvc, gender, employmentStatus } = props.data;
  useEffect(() => {
    if (pvc && employmentStatus && gender !== "") {
      setFormIsCompleted(true);
    }
  }, [gender, pvc, employmentStatus]);

  const formThreeValidationSchema = Yup.object({});
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center px-4 py-4 mx-auto md:px-0">
        <div className="w-full text-lg text-gray-700 border rounded-lg md:w-1/2">
          <header className="flex flex-col w-full p-8 space-y-2 border-b">
            <div className="flex flex-row items-center justify-center space-x-4">
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-black bg-gray-200 rounded-full">
                1
              </div>
              <hr className="w-12 border-black border-dashed border" />
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-black bg-gray-200 rounded-full">
                2
              </div>
              <hr className="w-12 border-black border-dashed border" />
              {formisCompleted ? (
                <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-green-600 rounded-full">
                  <Done />
                </div>
              ) : (
                <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-white bg-black rounded-full">
                  3
                </div>
              )}
              <hr
                className={`w-12 border-black border-dashed border ${
                  formisCompleted && "border-green-500"
                }`}
              />
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-black bg-gray-200 rounded-full">
                4
              </div>
            </div>
            <p className="font-semibold text-center">
              <span className="px-4 text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-full text-sm">
                Form Three: 3 Questions
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
                      {/* Do you have a PVC */}
                      <div className="space-y-1">
                        <FormLabel no="i" title="Do you have a PVC?" />
                        <p className="text-red-600">
                          <ErrorMessage name="pvc" />
                        </p>
                        <div className="flex flex-row items-center justify-between space-x-4 p-2">
                          <div className="flex flex-row items-center space-x-2 p-4 border rounded w-full">
                            <Field
                              type="radio"
                              name="pvc"
                              value="yes"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Yes</p>
                          </div>
                          <div className="flex flex-row items-center space-x-2 p-4 border rounded w-full">
                            <Field
                              type="radio"
                              name="pvc"
                              value="25"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>No</p>
                          </div>
                        </div>
                      </div>

                      {/* Marital Status */}

                      <div className="pt-4">
                        <FormLabel
                          no="i"
                          title="What is your marital status?"
                        />

                        <p className="text-red-600">
                          <ErrorMessage name="employmentStatus" />
                        </p>
                        <div className="flex flex-row items-center justify-between space-x-4 p-2">
                          <div className="flex flex-row items-center space-x-2 p-4 border rounded w-full">
                            <Field
                              type="radio"
                              name="maritalStatus"
                              value="single"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Single</p>
                          </div>
                          <div className="flex flex-row items-center space-x-2 p-4 border rounded w-full">
                            <Field
                              type="radio"
                              name="maritalStatus"
                              value="married"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Married</p>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between space-x-4 p-2">
                          <div className="flex flex-row items-center space-x-2 p-4 border rounded w-full">
                            <Field
                              type="radio"
                              name="maritalStatus"
                              value="divorced"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Divorced</p>
                          </div>
                          <div className="flex flex-row items-center space-x-2 p-4 border rounded w-full">
                            <Field
                              type="radio"
                              name="maritalStatus"
                              value="widowed"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p className="">Widowed</p>
                          </div>
                        </div>
                      </div>

                      {/* Employment Status */}

                      <div className="pt-4">
                        <FormLabel
                          no="i"
                          title=" What best describes your employment status?"
                        />
                        <p className="text-red-600">
                          <ErrorMessage name="employmentStatus" />
                        </p>
                        <div className="flex flex-row items-center justify-between space-x-4 p-2">
                          <div className="flex flex-row items-center space-x-2 p-4 border rounded w-full">
                            <Field
                              type="radio"
                              name="employmentStatus"
                              value="student"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Student</p>
                          </div>
                          <div className="flex flex-row items-center space-x-2 p-4 border rounded w-full">
                            <Field
                              type="radio"
                              name="employmentStatus"
                              value="employed"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p className="">Employed</p>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between space-x-4 p-2">
                          <div className="flex flex-row items-center space-x-2 p-4 border rounded w-full">
                            <Field
                              type="radio"
                              name="employmentStatus"
                              value="unemployed"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Unemployed</p>
                          </div>
                          <div className="flex flex-row items-center space-x-2 p-4 border rounded w-full">
                            <Field
                              type="radio"
                              name="employmentStatus"
                              value="self-employed"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>Self-employed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="w-full p-4 space-x-6 border-t">
                    <button
                      type="button"
                      onClick={() => props.prev(values)}
                      className="ml-8 p-2 px-4 border bg-transparent border-black text-black rounded-md hover:border-red-500"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => props.next(values)}
                      type="button"
                      className="p-2 px-8 text-white bg-green-500 rounded-md hover:bg-green-600 hover:-translate-y-1"
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
