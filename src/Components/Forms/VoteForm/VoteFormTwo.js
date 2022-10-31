import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
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
const phone = localStorage.getItem("phoneNumber");
const VoteFormTwo = () => {
  const history = useHistory();
  const [radioValue, setRadioValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [error, setErrorMessage] = useState(false);

  const radioChangeHandler = (e) => {
    const questionOne = e.target.value;
    setRadioValue(questionOne);
  };
  const inputChangeHandler = (e) => {
    const questionTwo = e.target.value;
    setTextValue(questionTwo);
  };

  // SEND DATA TO API
  const sendToAPI = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://wepollnow-default-rtdb.firebaseio.com/post_survey.json",
        {
          method: "POST",
          body: JSON.stringify({
            phone: phone,
            importantIssue: radioValue,
            other: textValue,
          }),
        }
      );

      // redirecting the user or throwing error
      if (response.ok) {
        history.push("/vote/voteSuccess", { replace: true });
      } else {
        throw new Error("A problem Occured");
      }

      // Handling Error
    } catch (error) {
      setHasError(true);
      setErrorMessage(error.message);
    }
  };
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center min-h-screen px-4 py-4 mx-auto md:px-0">
        <div className="w-full text-lg text-gray-700 border rounded-lg shadow-lg md:w-[700px]">
          <form className="w-full p-8" onSubmit={sendToAPI}>
            {hasError && (
              <p className="font-bold text-center text-red-500">
                Error '{error}' occured. Please Try again.
              </p>
            )}
            <div className="flex flex-col items-center justify-center space-y-4">
              <p className="font-semibold text-center">
                Great...!!! To finish up, would you mind telling us which of
                these issues is most important to you?
              </p>
              {RadioItems.map((item) => {
                return (
                  <label
                    key={item.id}
                    htmlFor={item.id}
                    className="flex flex-col items-start justify-center w-full p-3 px-4 space-y-4 border rounded"
                  >
                    <div className="flex flex-row items-center justify-center space-x-3">
                      <input
                        id={item.id}
                        type={item.type}
                        name={item.type}
                        value={item.option}
                        onChange={radioChangeHandler}
                        className="w-4 h-4 text-gray-600 border-gray-300"
                      />
                      <p>{item.option}</p>
                    </div>
                  </label>
                );
              })}
              <div className="flex flex-row w-full pt-2">
                <input
                  type="text"
                  name="others"
                  onChange={inputChangeHandler}
                  className="w-full p-3 text-black border-b border-gray-500"
                  placeholder="Others"
                />
              </div>
            </div>

            <section>
              <div className="flex flex-row items-end justify-end w-full p-2 space-x-4 md:p-6">
                <button
                  type="submit"
                  className="w-full p-3 text-white bg-green-500 rounded-md hover:bg-green-600 hover:-translate-y-1"
                >
                  {`Confirm`}
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default VoteFormTwo;
