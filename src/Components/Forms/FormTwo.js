import React from "react";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Done from "@mui/icons-material/Done";
import Nav from "../Layout/Landing/mainNav";

const FormTwo = (props) => {
  const [formisCompleted, setFormIsCompleted] = useState(false);
  const handleSubmit = (values) => {
    props.next(values);
  };

  // Configuring the indicators
  const { LGAofR, SoR, pvc } = props.data;
  useEffect(() => {
    if (LGAofR && SoR && pvc !== "") {
      setFormIsCompleted(true);
    }
  }, [LGAofR, SoR, pvc]);
  const formTwoValidationSchema = Yup.object({
    LGAofR: Yup.string().required().label("* This"),
    SoR: Yup.string().required().label("* This"),
    pvc: Yup.string().required().label("* This"),
  });
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center mx-auto py-4  px-4 md:px-0">
        <div className="w-full md:w-1/2 text-lg text-gray-700 border rounded-lg">
          <header className="flex flex-col space-y-3 w-full p-8 border-b">
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
            </div>
            <p className="text-center font-semibold">
              <span className=" bg-gray-400 rounded-full text-white px-4">
                FILL IN YOUR:
              </span>{" "}
              LGA of residence, State of Origin & PVC status
            </p>
          </header>
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
                      <div className="border border-gray-200 p-8 rounded-md space-y-4">
                        <label className="font-bold">
                          Select L.G.A of voting residence(Not applicable for
                          diaspora Voters)
                        </label>
                        <p className="text-red-600">
                          <ErrorMessage name="LGAofR" />
                        </p>
                        <div className="flex flex-row items-start justify-between">
                          <Field
                            as="select"
                            name="LGAofR"
                            className="mt-1 block w-full border-b border-gray-300 bg-white py-2 px-3"
                          >
                            <option value="">Select an option</option>
                            <option value="Umuahia">Umuahia</option>
                            <option value="Uyo">Uyo</option>
                          </Field>
                        </div>
                      </div>
                      <div className="border border-gray-200 p-8 rounded-md space-y-4">
                        <label className="font-bold">
                          Select State of Origin
                        </label>
                        <p className="text-red-600">
                          <ErrorMessage name="SoR" />
                        </p>
                        <div className="flex flex-row items-start justify-between">
                          <Field
                            as="select"
                            name="SoR"
                            className="mt-1 block w-full border-b border-gray-300 bg-white py-2 px-3"
                          >
                            <option value="">Select an option</option>
                            <option value="Abia">Abia</option>
                            <option value="Akwa Ibom">Akwa Ibom</option>
                          </Field>
                        </div>
                      </div>
                      <div className="border border-gray-200 p-8 rounded-md space-y-4">
                        <label className="font-bold">Do you have a PVC?</label>
                        <p className="text-red-600">
                          <ErrorMessage name="pvc" />
                        </p>
                        <div className="flex flex-row items-start justify-between">
                          {/* ==========================PVC =========================*/}
                          <Field
                            as="select"
                            name="pvc"
                            className="mt-1 block w-full border-b border-gray-300 bg-white py-2 px-3"
                          >
                            <option value="">Select an option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Field>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="space-x-6 w-full py-6 border-t px-6">
                    <button
                      onClick={() => props.prev(values)}
                      type="button"
                      className="p-2 px-8 bg-black text-white rounded-md ml-6"
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
