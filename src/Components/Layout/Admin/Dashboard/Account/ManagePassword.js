import * as React from "react";
import EditIcon from "@mui/icons-material/Edit";
import SubHeader from "../../SubHeader";
import Header from "../../Header";

const data = [
  {
    id: 1,
    route: "/dashboard/account/settings",
    linkText: "Admins",
  },
  {
    id: 2,
    route: "/dashboard/account/managePassword",
    linkText: "Password",
  },
];
const Password = () => {
  return (
    <main className='flex flex-col justify-center w-[98%]'>
      <Header />
      <div className='max-h-screen px-4 md:px-6 lg:px-12 text-[#082a0f]'>
        <SubHeader data={data} />
        <div className='flex flex-col items-center justify-center max-h-screen px-4 py-4 mx-auto mt-2 md:px-0'>
          <div className='w-full px-4 py-4 bg-white border border-gray-500 rounded-lg md:w-2/4'>
            <div className='flex flex-row items-center justify-between p-3 border-b'>
              <p className='text-xl font-bold'>Change Password</p>
              <div className='flex flex-row items-center justify-center p-2 text-white bg-green-500 rounded-full'>
                <EditIcon fontSize='small' />
              </div>
            </div>
            <div className='flex flex-row p-4'>
              {/*  */}
              {/*========================  CHANGE PASSWORD FORM ================================*/}
              <form className='w-full space-y-4'>
                {/* State : TYPE => Select */}
                <div className='flex flex-col py-2'>
                  <label
                    htmlFor='old_password'
                    className='font-semibold text-gray-600'
                  >
                    Old Password
                  </label>
                  <input
                    type='password'
                    className='w-full p-3 border rounded font-semibold text-gray-600'
                    placeholder='Enter Old Password'
                    id='old_password'
                    required
                    aria-required
                  />
                </div>

                <div className='flex flex-col pb-1'>
                  <label
                    htmlFor='new_password'
                    className='font-semibold text-gray-600'
                  >
                    New Password
                  </label>
                  <input
                    type='password'
                    className='w-full p-3 border rounded'
                    placeholder='Enter New password'
                    id='new_password'
                  />
                </div>

                {/* Zone */}
                <div className='flex flex-col pb-1'>
                  <label
                    htmlFor='confirm_password'
                    className='font-semibold text-gray-600'
                  >
                    Confirm New Password
                  </label>
                  <input
                    type='password'
                    className='w-full p-3 border rounded'
                    placeholder='Confirm New password'
                    id='confirm_password'
                  />
                </div>

                {/* Cancel and Submit button */}
                <div className='flex flex-row'>
                  <button className='w-full p-3 text-white bg-green-500 rounded-md cursor-pointer transition-all duration-200 ease-linear delay-100 hover:rounded-full focus:outline-none'>
                    Change Password
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
