import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DoneIcon from "@mui/icons-material/Done";
import Nav from "../Layout/Landing/mainNav";

const FormOne = (props) => {
  const [formisCompleted, setFormIsCompleted] = useState(false);
  const handleSubmit = (values) => {
    props.next(values);
  };

  // Configuring the indicators
  const { phone, email, firstTimeVoter } = props.data;
  useEffect(() => {
    if (phone && email && firstTimeVoter !== "") {
      setFormIsCompleted(true);
    }
  }, [email, phone, firstTimeVoter]);

  // Validation Schema
  const formOneValidationSchema = Yup.object({
    phone: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(11, "Must be exactly 11 digits")
      .max(11, "Must be exactly 11 digits")
      .label("* This"),
    email: Yup.string().email().required().label("* This"),
    firstTimeVoter: Yup.string().required().label("* This"),
  });
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center px-4 py-4 mx-auto md:px-0">
        <div className="w-full text-lg text-gray-700 border rounded-lg md:w-1/2">
          <header className="flex flex-col w-full p-8 space-y-4 border-b md:space-y-2">
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

              <hr className="w-12 border-black border-dashed border-1" />
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-black bg-gray-100 rounded-full">
                2
              </div>
              <hr className="w-12 border-black border-dashed border-1" />
              <div className="inline-flex items-center justify-center w-5 h-5 p-4 text-black bg-gray-100 rounded-full">
                3
              </div>
            </div>
            <p className="font-semibold text-center">
              <span className="px-4 text-white bg-gray-400 rounded-full ">
                FILL IN YOUR:
              </span>{" "}
              Phone No, Email & Voter Status
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
                  <div className="flex flex-col p-8 space-y-4">
                    <div className="h-64 px-4 space-y-4 overflow-y-scroll scrollable">
                      <div className="flex flex-col p-8 space-y-4 border border-gray-200 rounded-md">
                        <label className="font-bold">
                          Input your phone number
                        </label>
                        <p className="text-red-600">
                          <ErrorMessage name="phone" />
                        </p>
                        <Field
                          name="phone"
                          type="text"
                          placeholder="Phone Number"
                          className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border-b focus:shadow-outline"
                        />
                      </div>
                      <div className="flex flex-col p-8 space-y-4 border border-gray-200 rounded-md">
                        <label className="font-bold">Input your Email</label>
                        <p className="text-red-600">
                          <ErrorMessage name="email" />
                        </p>
                        <Field
                          name="email"
                          placeholder="Email Address"
                          className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border-b focus:shadow-outline"
                        />
                      </div>
                      <div className="flex flex-col p-8 space-y-4 border border-gray-200 rounded-md">
                        <label className="font-bold">
                          Are you a first time voter?
                        </label>
                        <p className="text-red-600">
                          <ErrorMessage name="firstTimeVoter" />
                        </p>
                        <div className="flex flex-row items-start justify-between">
                          <Field
                            as="select"
                            name="firstTimeVoter"
                            className="block w-full px-3 py-2 mt-1 bg-white border-b border-gray-300"
                          >
                            <option value="">Select an option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Field>
                        </div>
                      </div>
                    </div>
                  </div>
                  <footer className="w-full p-4 border-t">
                    <button
                      type="submit"
                      className="p-2 px-8 ml-8 text-white bg-black rounded-md"
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
