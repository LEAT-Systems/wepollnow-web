import React from "react";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Done from "@mui/icons-material/Done";
import Nav from "../Layout/Landing/mainNav";
import FormLabel from "../../UI/FormLabel";

const FormTwo = (props) => {
  const [formisCompleted, setFormIsCompleted] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const handleSubmit = (values) => {
    props.next(values);
  };

  const handlerFunc = (e) => {
    if (e.target.value !== "") {
      setIsTouched(true);
    } else {
      setIsTouched(false);
    }
  };

  console.log(isTouched);
  // Configuring the indicators
  const { LGAofVotingRes, stateOfOrigin, ageRange } = props.data;
  useEffect(() => {
    if (LGAofVotingRes && stateOfOrigin && ageRange !== "") {
      setFormIsCompleted(true);
    }
  }, [LGAofVotingRes, stateOfOrigin, ageRange]);
  const formTwoValidationSchema = Yup.object({
    LGAofVotingRes: Yup.string().required().label("* This"),
    stateOfOrigin: Yup.string().required().label("* This"),
    // ageRange
  });
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center mx-auto py-4  px-4 md:px-0">
        <div className="w-full md:w-3/4 text-lg text-gray-700 border rounded-lg">
          <header className="flex flex-col space-y-2 w-full p-4 border-b">
            <div className="flex flex-row items-center justify-center space-x-4">
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-gray-200 text-black w-5 h-5">
                1
              </div>
              <hr className="border-dashed border-1 border-black w-12" />
              {formisCompleted ? (
                <div className="inline-flex items-center justify-center rounded-full p-4 bg-green-600 text-white w-5 h-5">
                  <Done />
                </div>
              ) : (
                <div className="inline-flex items-center justify-center rounded-full p-4 bg-black text-white w-5 h-5">
                  2
                </div>
              )}

              <hr className="border-dashed border-1 border-black w-12" />
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-gray-100 text-black w-5 h-5">
                3
              </div>
              <hr className="border-dashed border-1 border-black w-12" />
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-gray-100 text-black w-5 h-5">
                4
              </div>
            </div>
            <p className="text-center font-semibold">
              <span className=" bg-gray-400 rounded-full text-white px-4">
                Form Two: 3 Questions
              </span>{" "}
            </p>
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
                  <div className="flex flex-col space-y-4 p-8">
                    <div className="relative overflow-y-scroll space-y-4 h-64 scrollable px-4">
                      <div className=" p-2 rounded-md space-y-4">
                        <FormLabel
                          no="i"
                          title=" Select L.G.A of voting residence(Not applicable for
                          diaspora Voters)"
                        />
                        <p className="text-red-600">
                          <ErrorMessage name="LGAofVotingRes" />
                        </p>
                        <div className="flex flex-row items-start justify-between">
                          <Field
                            as="select"
                            name="LGAofVotingRes"
                            className="mt-1 block w-full border rounded border-gray-300 bg-white py-2 px-3"
                          >
                            <option value="">Select an option</option>
                            <option value="Umuahia">Umuahia</option>
                            <option value="Uyo">Uyo</option>
                          </Field>
                        </div>
                      </div>

                      {/* State of Origin  */}

                      <div className="p-2 space-y-2">
                        <FormLabel no="i" title=" Select State of Origin" />
                        <p className="text-red-600">
                          <ErrorMessage name="stateOfOrigin" />
                        </p>
                        <div className="flex flex-row items-start justify-between">
                          <Field
                            as="select"
                            name="stateOfOrigin"
                            className="mt-1 block w-full border rounded border-gray-300 bg-white py-2 px-3"
                          >
                            <option value="">Select an option</option>
                            <option value="Abia">Abia</option>
                            <option value="Akwa Ibom">Akwa Ibom</option>
                          </Field>
                        </div>
                      </div>

                      {/* Age Range */}

                      <div className="p-2">
                        <FormLabel no="i" title="Select Your Age Range" />
                        <p className="text-red-600">
                          <ErrorMessage name="ageRange" />
                        </p>
                        <div className="flex flex-row items-center justify-between space-x-4 p-2">
                          <div
                            className={`${
                              isTouched
                                ? "bg-gray-200 flex flex-row items-center justify-between p-4 border rounded w-full"
                                : "flex flex-row items-center justify-between p-4 border rounded w-full"
                            } 
                             `}
                          >
                            <label className="block ml-3 text-sm font-medium text-gray-700">
                              18-25
                            </label>
                            <Field
                              onClick={handlerFunc}
                              type="radio"
                              name="ageRange"
                              value="18-25"
                              placeholder="18-25"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                          </div>
                          <div
                            className={`${
                              isTouched
                                ? "bg-gray-200 flex flex-row items-center justify-between p-4 border rounded w-full"
                                : "flex flex-row items-center justify-between p-4 border rounded w-full"
                            } 
                             `}
                          >
                            <label className="block ml-3 text-sm font-medium text-gray-700">
                              25-35
                            </label>
                            <Field
                              onClick={handlerFunc}
                              type="radio"
                              name="ageRange"
                              value="25-35"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between space-x-4 p-2">
                          <div className="flex flex-row items-center justify-between p-4 border rounded w-full">
                            <label className="block ml-3 text-sm font-medium text-gray-700">
                              35-45
                            </label>
                            <Field
                              onClick={handlerFunc}
                              type="radio"
                              name="ageRange"
                              value="35-45"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between p-4 border rounded w-full">
                            <label className="block ml-3 text-sm font-medium text-gray-700">
                              45-50
                            </label>
                            <Field
                              onClick={handlerFunc}
                              type="radio"
                              name="ageRange"
                              value="45-50"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between space-x-4 p-2">
                          <div className="flex flex-row items-center justify-between p-4 border rounded w-full">
                            <label className="block ml-3 text-sm font-medium text-gray-700">
                              50 and above
                            </label>
                            <Field
                              onClick={handlerFunc}
                              type="radio"
                              name="ageRange"
                              value="50 and above"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="space-x-6 w-full py-6 border-t px-6">
                    <button
                      onClick={() => props.prev(values)}
                      type="button"
                      className="p-2 px-8 bg-gray-400 text-white rounded-md ml-6"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="p-2 px-8 bg-black text-white rounded-md"
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