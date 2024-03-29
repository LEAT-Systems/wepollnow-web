/** @format */

import * as React from "react";
import EditIcon from "@mui/icons-material/Edit";
import SubHeader, { AccountHeader } from "../../SubHeader";
import Header from "../../Header";
import EyeIcon from "@mui/icons-material/Visibility";
import EyeOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useEffect } from "react";
import tooltipIcon from "../../../../../images/tooltip.png";
import swal from "sweetalert";
import { baseUrl } from "../../../../../store/baseUrl";

const data = [
  {
    id: 1,
    route: "/admin/account/settings",
    linkText: "Admins",
  },
  {
    id: 2,
    route: "/admin/account/managePassword",
    linkText: "Password",
  },
];
const Password = () => {
  const [hide, setHide] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMisMatch, setPasswordMismatch] = useState(false);
  const [passwordValidateError, setPasswordValidateError] = useState(false);
  const [sendingRequest, setSendingRequest] = useState(false);
  const [token, setToken] = useState();
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [tooltipStatus, setTooltipStatus] = useState(0);

  // Getting user authorized token from local storage
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  });

  const clearFields = () => {
    window.location.reload();
  };

  // Checking password match logic
  useEffect(() => {
    if (newPassword !== confirmPassword) {
      setPasswordMismatch(true);
    } else {
      setPasswordMismatch(false);
    }
  }, [newPassword, confirmPassword]);

  useEffect(() => {
    // Testing if password has an uppercase and a number
    const upperChars = /[A-Z]/;
    const hasNumbers = /[0-9]/;
    setHasUppercase(upperChars.test(newPassword));
    setHasNumber(hasNumbers.test(newPassword));
    if (
      newPassword !== "" &&
      (newPassword.length < 8 || hasUppercase === false || hasNumber === false)
    ) {
      setPasswordValidateError(true);
    } else {
      setPasswordValidateError(false);
    }
  }, [newPassword, hasUppercase]);

  // sending request to change password to API
  const sendToAPI = async (e) => {
    try {
      e.preventDefault();
      setSendingRequest(true);
      let formData = new FormData();
      let myHeaders = new Headers();

      myHeaders.append("Authorization", `Bearer ${token}`);
      formData.append("old_password", oldPassword);
      formData.append("new_password", confirmPassword);
      const requestOptions = {
        method: "PUT",
        body: formData,
        headers: myHeaders,
      };

      const response = await fetch(
        baseUrl + `user/update_password/`,
        requestOptions
      );
      const result = await response.json();

      if (!response.ok) {
        setSendingRequest(false);
        swal({
          title: `${result.message || result.new_password[0]}`,
          icon: "error",
          buttons: {
            confirm: {
              text: "Close",
              className: "swalButton",
            },
          },
        });
      } else {
        swal({
          title: "Action was successful",
          icon: "success",
          buttons: {
            confirm: {
              text: "Close",
              className: "swalButton",
            },
          },
        }).then(() => clearFields());
      }
      setSendingRequest(false);
    } catch (err) {
      swal({
        title: err,
        icon: "error",
        buttons: {
          confirm: {
            text: "Close",
            className: "swalButton",
          },
        },
      });
    }
  };

  return (
    <main className="flex flex-col justify-center w-[98%]">
      <Header />
      <div className="max-h-screen px-4 md:px-6 lg:px-12 text-[#082a0f]">
        <AccountHeader data={data} />
        <div className="flex flex-col items-center justify-center max-h-screen px-4 py-4 mx-auto mt-2 md:px-0">
          <div className="w-full px-4 py-4 bg-white border border-gray-500 rounded-lg md:w-2/4">
            <div className="flex flex-row items-center justify-between p-3 border-b">
              <p className="text-xl font-bold">Change Password</p>
              <div className="flex flex-row items-center justify-center p-2 text-white bg-green-500 rounded-full">
                <EditIcon fontSize="small" />
              </div>
            </div>
            <div className="flex flex-row p-4">
              {/*  */}
              {/*========================  CHANGE PASSWORD FORM ================================*/}
              <form className="w-full space-y-4" onSubmit={sendToAPI}>
                {/* State : TYPE => Select */}
                <div className="flex flex-col py-2">
                  <div className="relative block password_2">
                    <label className="font-semibold">Old Password</label>
                    <div className="eye_div">
                      <input
                        className="block w-full px-3 py-3 border border-gray-300 rounded input focus:border-pitch-black focus:outline-none "
                        type={hide === true ? "password" : "text"}
                        onChange={(e) => setOldPassword(e.target.value)}
                        placeholder="Enter Old password"
                      />
                      <div
                        className="absolute icon_button right-4 top-9"
                        onClick={() => {
                          setHide(!hide);
                        }}
                      >
                        {hide ? (
                          <EyeOffIcon className="h-6 font-extralight" />
                        ) : (
                          <EyeIcon className="h-6 font-extralight" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col pb-1">
                  <div className="relative block password_2">
                    <div className="flex flex-row items-center space-x-1">
                      <label className="font-semibold">New Password</label>
                      <img
                        src={tooltipIcon}
                        className="w-4 h-4"
                        alt="tooltipIcon"
                        onMouseEnter={() => setTooltipStatus(1)}
                        onMouseLeave={() => setTooltipStatus(0)}
                      />
                      {tooltipStatus === 1 && (
                        <div
                          role="tooltip"
                          className="absolute -mt-24 text-white transition duration-150 ease-in-out bg-black rounded shadow-lg"
                        >
                          <p className="p-2 text-xs font-normal md:text-lg">
                            Password length must be greater or equal to 8
                            characters & must contain atleast an uppercase
                            character and a number eg. "samUEL123"
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="eye_div">
                      <input
                        className="block w-full px-3 py-3 border border-gray-300 rounded input focus:border-pitch-black focus:outline-none "
                        type={hide === true ? "password" : "text"}
                        placeholder="Enter New password"
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <div
                        className="absolute icon_button right-4 top-9"
                        onClick={() => setHide(!hide)}
                      >
                        {hide ? (
                          <EyeOffIcon className="h-6 font-extralight" />
                        ) : (
                          <EyeIcon className="h-6 font-extralight" />
                        )}
                      </div>
                    </div>
                  </div>
                  {passwordValidateError === true ? (
                    <p className="pt-2 font-bold text-red-500">
                      Password must match required pattern
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col pb-1">
                  <div className="relative block password_2">
                    <label className="font-semibold">
                      Confirm New Password
                    </label>
                    <div className="eye_div">
                      <input
                        className="block w-full px-3 py-3 border border-gray-300 rounded input focus:border-pitch-black focus:outline-none "
                        type={hide === true ? "password" : "text"}
                        placeholder="Confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <div
                        className="absolute icon_button right-4 top-9"
                        onClick={() => setHide(!hide)}
                      >
                        {hide ? (
                          <EyeOffIcon className="h-6 font-extralight" />
                        ) : (
                          <EyeIcon className="h-6 font-extralight" />
                        )}
                      </div>
                    </div>
                  </div>
                  {passwordMisMatch && (
                    <p className="pt-2 font-bold text-red-500">
                      New Password & Confirm New Password do not match.
                    </p>
                  )}
                </div>

                {/* Cancel and Submit button */}
                <div className="flex flex-row">
                  <button
                    type="submit"
                    disabled={passwordMisMatch}
                    className={` ${
                      passwordMisMatch && "hover:cursor-not-allowed"
                    } w-full p-3 text-white transition-all duration-200 ease-linear delay-100 bg-green-500 rounded-md cursor-pointer hover:rounded-full focus:outline-none`}
                  >
                    {sendingRequest ? "Please wait..." : "Change Password"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Password;
