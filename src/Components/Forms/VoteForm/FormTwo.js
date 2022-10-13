import React, { useEffect, useState } from "react";
import Nav from "../../Layout/Landing/mainNav";

const RadioItems = [
  {
    id: "q1",
    type: "radio",
    option: "Transportation",
  },
  {
    id: "q2",
    type: "radio",
    option: "Education",
  },
  {
    id: "q3",
    type: "radio",
    option: "Security",
  },
  {
    id: "q4",
    type: "radio",
    option: "Finance and Economy",
  },
];

const FormTwo = (props) => {
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center min-h-screen px-4 py-4 mx-auto md:px-0">
        <div className="w-full text-lg text-gray-700 border rounded-lg shadow-lg md:w-[700px]">
          <header className="w-full p-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <p className="text-center font-semibold">
                Great...!!! To finish up, would you mind telling us which of
                these issues is most important to you?
              </p>
              {RadioItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-start justify-center space-y-4 p-3 px-4 border rounded w-full"
                  >
                    <div className="flex flex-row items-center justify-center space-x-3">
                      <input
                        type={item.type}
                        name={item.type}
                        value={item.option}
                        className="w-4 h-4 text-gray-600 border-gray-300"
                      />
                      <p>{item.option}</p>
                    </div>
                  </div>
                );
              })}
              <div className="flex flex-row w-full pt-2">
                <input
                  type="text"
                  name="others"
                  className="w-full border-b border-gray-500 text-black"
                  placeholder="Others"
                />
              </div>
            </div>
          </header>

          <section>
            <div className="flex flex-row items-end justify-end w-full p-2 space-x-4 md:p-6">
              <button
                type="submit"
                className="p-3 w-full bg-green-500 hover:bg-green-600 text-white rounded-md hover:-translate-y-1"
              >
                {`Confirm`}
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default FormTwo;
