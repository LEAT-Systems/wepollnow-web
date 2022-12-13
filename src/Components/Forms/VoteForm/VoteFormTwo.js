import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Nav from "../../Layout/Landing/mainNav";
import swal from "sweetalert";

const VoteFormTwo = () => {
  const history = useHistory();
  const [radioValue, setRadioValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [error, setErrorMessage] = useState(false);
  const [data, setData] = useState([]);

  // Get data for radio buttons
  useEffect(() => {
    try {
      const getData = async () => {
        const response = await fetch(
          "https://wepollnow.azurewebsites.net/poll/poll_survey_category/",
          { method: "GET" }
        );
        const result = await response.json();
        if (!response.ok) {
          swal({
            title: "An error Occured",
            icon: "error",
            buttons: {
              confirm: {
                text: "Close",
                className: "swalButton",
              },
            },
          });
        } else {
          setData(result);
        }
      };
      getData();
    } catch (error) {
      swal({
        title: error,
        icon: "error",
        buttons: {
          confirm: {
            text: "Close",
            className: "swalButton",
          },
        },
      });
    }
  });

  // Handle form change
  const radioChangeHandler = (e) => {
    const questionOne = e.target.value;
    setRadioValue(questionOne);
  };
  const inputChangeHandler = (e) => {
    const questionTwo = e.target.value;
    setTextValue(questionTwo);
  };

  // SEND SELECTED RADIO DATA TO API
  const sendToAPI = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://wepollnow-default-rtdb.firebaseio.com/post_survey.json",
        {
          method: "POST",
          body: JSON.stringify({
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
              {data.map((item) => {
                return (
                  <label
                    key={item.id}
                    htmlFor={item.id}
                    className="flex flex-col items-start justify-center w-full p-3 px-4 space-y-4 border rounded"
                  >
                    <div className="flex flex-row items-center justify-center space-x-3">
                      <input
                        id={item.id}
                        type="radio"
                        name="radio"
                        value={item.id}
                        onChange={radioChangeHandler}
                        className="w-4 h-4 text-gray-600 border-gray-300"
                      />
                      <p>{item.surveyName}</p>
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
                  className="w-full p-3 text-white rounded-md bg-[#02c127] animate"
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
