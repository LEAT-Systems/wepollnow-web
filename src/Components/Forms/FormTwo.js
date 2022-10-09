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
        <div className="w-full md:w-1/2 text-lg text-gray-700 border rounded-lg">
          <header className="flex flex-col space-y-2 w-full p-4 border-b">
            <div className="flex flex-row items-center justify-center space-x-4">
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-gray-200 text-black w-5 h-5">
                1
              </div>
              <hr className="border-dashed border border-black w-12" />
              {formisCompleted ? (
                <div className="inline-flex items-center justify-center rounded-full p-4 bg-green-600 text-white w-5 h-5">
                  <Done />
                </div>
              ) : (
                <div className="inline-flex items-center justify-center rounded-full p-4 bg-black text-white w-5 h-5">
                  2
                </div>
              )}

              <hr
                className={`w-12 border-black border-dashed border ${
                  formisCompleted && "border-green-500"
                }`}
              />
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-gray-100 text-black w-5 h-5">
                3
              </div>
              <hr className="border-dashed border border-black w-12" />
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-gray-100 text-black w-5 h-5">
                4
              </div>
            </div>
            <p className="text-center font-semibold">
              <span className="px-4 text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-full text-sm">
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
                  <div className="flex flex-col space-y-4 p-2 md:p-8">
                    <div className="relative overflow-y-scroll space-y-4 h-64 scrollable px-2 md:px-4">
                      <div className=" md:p-2 rounded-md space-y-4">
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
                            className="mt-1 block w-full border rounded border-gray-300 bg-white py-3 px-3"
                          >
                            <option value="">Select an option</option>
                            <option value="Umuahia">Umuahia</option>
                            <option value="Uyo">Uyo</option>
                          </Field>
                        </div>
                      </div>

                      {/* State of Origin  */}

                      <div className="md:p-2 space-y-2">
                        <FormLabel no="i" title=" Select State of Origin" />
                        <p className="text-red-600">
                          <ErrorMessage name="stateOfOrigin" />
                        </p>
                        <div className="flex flex-row items-start justify-between">
                          <Field
                            as="select"
                            name="stateOfOrigin"
                            className="mt-1 block w-full border rounded border-gray-300 bg-white py-3 px-3"
                          >
                            <option value="">Select an option</option>
                            <option value="Abia">Abia</option>
                            <option value="Akwa Ibom">Akwa Ibom</option>
                          </Field>
                        </div>
                      </div>

                      {/* Age Range */}

                      <div className="md:p-2">
                        <FormLabel no="i" title="Select Your Age Range" />
                        <p className="text-red-600">
                          <ErrorMessage name="ageRange" />
                        </p>
                        <div className="flex flex-row items-center justify-between space-x-4 md:p-2">
                          <div className="flex flex-row items-center space-x-2 px-4 p-3 md:p-4 border rounded w-full">
                            <Field
                              onClick={handlerFunc}
                              type="radio"
                              name="ageRange"
                              value="18-25"
                              placeholder="18-25"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>18-25</p>
                          </div>
                          <div className="flex flex-row items-center space-x-2 p-3 md:p-4 border rounded w-full">
                            <Field
                              onClick={handlerFunc}
                              type="radio"
                              name="ageRange"
                              value="25-35"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>25-35</p>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between space-x-4 md:p-2 mt-2 md:mt-0">
                          <div className="flex flex-row items-center space-x-2 px-4 p-3 md:p-4 border rounded w-full">
                            <Field
                              onClick={handlerFunc}
                              type="radio"
                              name="ageRange"
                              value="35-45"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>35-45</p>
                          </div>
                          <div className="flex flex-row items-center space-x-2 p-3 md:p-4 border rounded w-full">
                            <Field
                              onClick={handlerFunc}
                              type="radio"
                              name="ageRange"
                              value="45-50"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>45-50</p>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between space-x-4 md:p-2 mt-2 md:mt-0">
                          <div className="flex flex-row items-center space-x-2 p-3 md:p-4 border rounded w-full">
                            <Field
                              onClick={handlerFunc}
                              type="radio"
                              name="ageRange"
                              value="50 and above"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>50 and above</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="space-x-6 w-full py-6 border-t px-6">
                    <button
                      onClick={() => props.prev(values)}
                      type="button"
                      className="p-2 px-4 border bg-transparent border-black text-black rounded-md ml-6 hover:border-red-500"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="p-2 px-8 bg-green-500 text-white rounded-md hover:-translate-y-1 hover:bg-green-600"
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
