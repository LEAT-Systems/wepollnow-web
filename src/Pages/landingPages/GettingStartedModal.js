import React, { useState } from "react";
import { formatPhoneNumber, parsePhoneNumber } from "react-phone-number-input";
import { useHistory } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Slide from "@mui/material/Slide";
import { Modal } from "@mui/material";
import Close from "../../images/CloseButton.png";
import tooltipIcon from "../../images/tooltip.png";
import swal from "sweetalert";
import { baseUrl } from "../../store/baseUrl";

const ModalComponent = (props) => {
  const history = useHistory();
  const [hasError, setHasError] = useState(false);
  const [value, setValue] = useState(null);
  const [tooltipStatus, setTooltipStatus] = useState(0);

  // Validate on end point

  // Submit form values
  const handleSubmit = (e) => {
    e.preventDefault();

    // if phone number is null
    if (value === null) {
      setHasError(true);
      return;
    }

    // if not null, get the phone number and country
    if (value !== null) {
      const formatedPhoneNumber = formatPhoneNumber(value).replace(/\s/g, ""); // removing white spaces from phone
      const countryEntered = parsePhoneNumber(value).country;

      // pass phone number to function
      const validatePhone = async () => {
        let formData = new FormData();
        formData.append("phoneNumber", formatedPhoneNumber);
        let requestOptions = {
          method: "POST",
          body: formData,
        };
        const response = await fetch(
          baseUrl + `voters/verify_phone/`,
          requestOptions
        );
        const result = await response.json();

        let data;
        if (!response.ok) {
          alert("Something went wrong");
        } else {
          data = {
            message: result.message !== undefined ? result.message : "",
            voter_id: result.voter_id !== undefined ? result.voter_id : "",
          };
        }

        const { message, voter_id } = data;

        if (response.ok === true) {
          if (message === "A registered Voter" && voter_id !== null) {
            swal({
              title: "You are already registered on our system.",
              text: "We have provisioned polls eligible for you based on your State of Origin",
              icon: "warning",
              buttons: {
                confirm: {
                  text: "Okay, I understand",
                  className: "swalButton",
                },
              },
            });
            localStorage.setItem("uniqueID", voter_id);
            history.push("/polls", { replace: true });
          }
          if (message === "New User") {
            localStorage.setItem(
              "phoneDetails",
              JSON.stringify({
                phoneNo: formatedPhoneNumber,
                country: countryEntered,
              })
            );
            setHasError(false);
            history.push("/getting-started-six", { replace: true });
          }
        }
      };

      validatePhone();
    }
  };

  return (
    <>
      <Modal
        open={props.open}
        children={
          <Slide direction="up" in={props.open} mountOnEnter unmountOnExit>
            <div className="flex flex-col items-center justify-center min-h-screen px-4 mx-auto space-y-4 md:px-0">
              <div className="flex flex-col justify-center w-full p-8 space-y-6 bg-white rounded-lg md:w-1/3 ">
                <div className="flex flex-row items-end justify-end">
                  <button type="button" onClick={props.handleClose}>
                    <img src={Close} alt="close" />
                  </button>
                </div>
                <div className="relative flex flex-row items-center justify-start space-x-2">
                  <p className="text-[16px] font-normal text-center">
                    Input your phone number to proceed
                  </p>
                  <img
                    src={tooltipIcon}
                    alt="tooltipIcon"
                    onMouseEnter={() => setTooltipStatus(1)}
                    onMouseLeave={() => setTooltipStatus(0)}
                  />
                  {tooltipStatus === 1 && (
                    <div
                      role="tooltip"
                      className="absolute text-white transition duration-150 ease-in-out bg-black rounded shadow-lg -top-12"
                    >
                      <p className="p-2 text-xs font-normal">
                        Why do we need this? It’s for the integrity of your
                        votes and the WepollNow platform
                      </p>
                    </div>
                  )}
                </div>
                {hasError && (
                  <p className="mx-auto text-red-500">
                    Please enter your correct Phone Number
                  </p>
                )}

                <form
                  className="flex flex-col items-center justify-center w-full space-y-8 text-center"
                  onSubmit={handleSubmit}
                >
                  <div
                    className={`${
                      hasError ? "border-red-500" : ""
                    } border p-2 rounded w-full`}
                  >
                    <PhoneInput
                      countryCallingCodeEditable={false}
                      international
                      defaultCountry="NG"
                      placeholder="Phone number"
                      value={value}
                      onChange={setValue}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full p-4 text-white rounded-lg bg-[#08C127]  animate"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </Slide>
        }
      />
    </>
  );
};

export default ModalComponent;
