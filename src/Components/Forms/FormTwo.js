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

  // Configuring the indicators
  const { LGAofVotingRes, stateOfVotingRes, ageRange } = props.data;
  useEffect(() => {
    if (LGAofVotingRes && stateOfVotingRes && ageRange !== "") {
      setFormIsCompleted(true);
    }
  }, [LGAofVotingRes, stateOfVotingRes, ageRange]);
  const formTwoValidationSchema = Yup.object({
    LGAofVotingRes: Yup.string().required().label("* This"),
    stateOfVotingRes: Yup.string().required().label("* This"),
    // ageRange
  });
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center px-4 py-4 mx-auto md:px-0">
        <div className="w-full text-lg text-gray-700 rounded-lg md:w-3/4">
          <header className="flex flex-col w-full p-4 space-y-2 border-b">
            <div className="flex flex-row items-center justify-center space-x-4">
              <div className="inline-flex text-[14px] items-center w-5 h-5 p-4 text-white bg-[#08C127] rounded-full text-[14px] justify-center">
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
                  <div className="flex flex-col p-2 space-y-4 md:p-8">
                    <div className="h-full px-2 space-y-4 md:px-4">
                      {/* Select State of voting residence */}

                      <div className="flex flex-col space-y-1 md:p-2">
                        <FormLabel
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
                          className="w-full p-4 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-md "
                        >
                          <option value="ebonyi">1</option>
                          <option value="ekiti">2</option>
                          <option value="oyo">3</option>
                        </Field>
                      </div>
                      {/* LGA of voting residence */}
                      <div className="space-y-4 rounded-md md:p-2">
                        <FormLabel
                          no="i"
                          title=" Select L.G.A of voting residence (Not applicable for
                          diaspora Voters)"
                        />
                        <p className="text-red-600">
                          <ErrorMessage name="LGAofVotingRes" />
                        </p>
                        <div className="flex flex-row items-start justify-between">
                          <Field
                            as="select"
                            name="LGAofVotingRes"
                            className="block w-full px-3 py-3 mt-1 bg-white border border-gray-300 rounded"
                          >
                            <option value="">Select an option</option>
                            <option value="Umuahia">Umuahia</option>
                            <option value="Uyo">Uyo</option>
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
                          <label
                            htmlFor="ageRange1"
                            className="flex flex-row items-center w-full p-3 px-4 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="ageRange1"
                              type="radio"
                              name="ageRange"
                              value="18-25"
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
                              value="25-35"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>25-35</p>
                          </label>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-2 space-x-4 md:p-2 md:mt-0">
                          <label
                            htmlFor="ageRange3"
                            className="flex flex-row items-center w-full p-3 px-4 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="ageRange3"
                              type="radio"
                              name="ageRange"
                              value="35-45"
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
                              value="45-50"
                              className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                            />
                            <p>45-50</p>
                          </label>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-2 space-x-4 md:p-2 md:mt-0">
                          <label
                            htmlFor="ageRange5"
                            className="flex flex-row items-center w-full p-3 space-x-2 border rounded md:p-4"
                          >
                            <Field
                              id="ageRange5"
                              type="radio"
                              name="ageRange"
                              value="50 and above"
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
                      className="p-2 px-4 ml-6 text-black bg-transparent border border-black rounded-md hover:border-red-500"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="p-2 px-8 text-white transition duration-500 bg-[#08C127] rounded-md hover:-translate-y-1"
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
