import React, { useState } from "react";
import {
  formatPhoneNumberIntl,
  parsePhoneNumber,
} from "react-phone-number-input";
import { useHistory } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Slide from "@mui/material/Slide";
import { Modal } from "@mui/material";
import Close from "../../images/CloseButton.png";

const ModalComponent = (props) => {
  const history = useHistory();
  const [hasError, setHasError] = useState(false);
  const [value, setValue] = useState(null);

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
      const intformatedPhoneNumber = formatPhoneNumberIntl(value);
      const countryEntered = parsePhoneNumber(value).country;
      localStorage.setItem(
        "phoneDetails",
        JSON.stringify({
          phoneNo: intformatedPhoneNumber,
          country: countryEntered,
        })
      );
      setHasError(false);
      history.push("/getting-started-six", { replace: true });
    }
  };

  return (
    <Modal
      open={props.open}
      children={
        <Slide direction="up" in={props.open} mountOnEnter unmountOnExit>
          <div className="flex flex-col items-center justify-center min-h-screen px-4 mx-auto space-y-4 md:px-0">
            <div className="flex flex-col items-end justify-center w-full p-8 space-y-6 bg-white rounded-lg md:w-1/3 ">
              <div className="flex flex-row items-end justify-end">
                <button type="button" onClick={props.handleClose}>
                  <img src={Close} alt="close" />
                </button>
              </div>
              <div className="flex flex-row items-center justify-center mx-auto">
                <p className="text-xl font-semibold text-center">
                  Input your phone number to proceed
                </p>
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
  );
};

export default ModalComponent;
