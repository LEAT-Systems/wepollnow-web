import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Nav from "../../Layout/Landing/mainNav";
import swal from "sweetalert";
import { baseUrl } from "../../../store/baseUrl";

const VoteFormTwo = () => {
  const history = useHistory();
  const [textValue, setTextValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [error, setErrorMessage] = useState(false);
  const [data, setData] = useState([]);
  const [uniqueID, setUniqueID] = useState("");
  const [pollID, setPollID] = useState("");
  const [hidden, sethidden] = useState(true);
  const [surveyDetails, setSurveyDetails] = useState({
    surveyName: "",
    surveyID: "",
  });

  // To display the others field
  const { surveyName, surveyID } = surveyDetails;

  useEffect(() => {
    if (surveyName === "Others" || surveyName === "others") {
      sethidden(false);
    } else {
      sethidden(true);
    }
  }, [surveyName]);

  // get poll ID and voter ID
  useEffect(() => {
    const { poll_id } = JSON.parse(localStorage.getItem("poll_details"));
    const unique_id = localStorage.getItem("uniqueID");
    setPollID(poll_id);
    setUniqueID(unique_id);
  }, []);

  // Get data for radio buttons
  useEffect(() => {
    try {
      const getData = async () => {
        const response = await fetch(
          baseUrl + `poll/survey_category/`,
          { method: "GET" }
        );
        const result = await response.json();
        if (!response.ok) {
          swal({
            title: "Could not fetch opinion data",
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
  }, []);

  // Handle form change

  const inputChangeHandler = (e) => {
    const questionTwo = e.target.value;
    setTextValue(questionTwo);
  };

  // SEND SELECTED RADIO DATA TO API
  const sendToAPI = async (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          poll: pollID,
          surveyCategory: surveyID,
          voter: uniqueID,
          description: textValue,
        }),
      };

      const response = await fetch(
        baseUrl +`poll/poll_survey_response/`,
        requestOptions
      );

      // redirecting the user or throwing error
      if (!response.ok) {
        throw new Error("A problem Occured");
      } else {
        history.push("/vote/voteSuccess", { replace: true });
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
                {error}. Please Try again.
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
                        onChange={() =>
                          setSurveyDetails({
                            surveyName: item.surveyName,
                            surveyID: item.id,
                          })
                        }
                        className="w-4 h-4 text-gray-600 border-gray-300"
                      />
                      <p>{item.surveyName}</p>
                    </div>
                  </label>
                );
              })}
              <div className="flex flex-row w-full pt-2">
                <input
                  required={hidden ? false : true}
                  type="text"
                  name="others"
                  onChange={inputChangeHandler}
                  className={`${
                    hidden ? "hidden" : ""
                  } w-full p-3 text-black border-b border-gray-500 focus:outline-none`}
                  placeholder="Enter your opinion"
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
