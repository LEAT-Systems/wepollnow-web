import React, { useEffect } from "react";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

//
const AccountSettings = () => {
  const [greeting, setGreeting] = useState("");
  const date = new Date();
  const hrs = date.getHours();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-4 mx-auto md:px-0">
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
            <form className="w-full space-y-4">
              {/* State : TYPE => Select */}
              <div className="flex flex-row space-x-4">
                <input
                  className="w-full p-3 border rounded"
                  placeholder="Enter Old password"
                />
              </div>

              <div className="flex flex-row space-x-4">
                <input
                  className="w-full p-3 border rounded"
                  placeholder="Enter New password"
                />
              </div>

              {/* Zone */}
              <div className="flex flex-row space-x-4">
                <input
                  className="w-full p-3 border rounded"
                  placeholder="Confirm New password"
                />
              </div>

              {/* Cancel and Submit button */}
              <div className="flex flex-row">
                <button className="w-full p-3 px-4 text-white bg-green-500 rounded-md animate">
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
