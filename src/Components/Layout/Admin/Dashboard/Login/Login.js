import React, { useEffect, useRef, useState, useContext } from "react";
import LOGO from "../../../../../images/logo.png";
import axios from "../../../../../api/axios";
import AuthContext from "../../../../../store/auth-context";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import EyeIcon from "@mui/icons-material/Visibility";
import EyeOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const adminRef = useRef();
  const errRef = useRef();
  const [loading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [hide, setHide] = useState(false);

  useEffect(() => {
    adminRef.current.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [email, password]);

  const token = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://wepollnow.azurewebsites.net/user/login/",
        { email: email, password: password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      let access, refresh;

      access = response?.data?.token.access;
      refresh = response?.data?.token.refresh;
      // setting the AccessToken to the AUTHCONTEXT
      authCtx.login(access);
      history.push("/admin/home", { replace: true });

      // clear state and controlled inputs
      setEmail("");
      setPassword("");
      //
    } catch (err) {
      if (!err?.response) {
        setError("No Connection");
      } else if (err.response?.status === 400) {
        setError("Email and Password are required");
      } else if (err.response?.status === 401) {
        setError("Unauthorized");
      } else {
        setError("Login Failed");
      }
      errRef.current.focus();
    }
    setIsLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    token();
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen px-4 py-4 mx-auto md:px-0'>
        <img src={LOGO} alt='LOGO' className='w-44 pb-9' />
        <div className='w-full px-4 py-4 text-lg text-gray-700 border border-gray-500 rounded-lg shadow-2xl md:w-98 shadow-gray-200'>
          <div className='p-6 space-y-4'>
            <h1 className='text-xl md:text-2xl text-center font-extrabold text-black'>
              Welcome Back
            </h1>
            <p className='text-base text-center md:text-lg text-gray-600 font-semibold'>
              Enter your credentials below to Login
            </p>
            <section>
              <p
                ref={errRef}
                className={
                  error
                    ? " p-4 w-full font-bold text-red-500 block text-center"
                    : "hidden"
                }
                aria-live='assertive'
              >
                {error}
              </p>
            </section>
            <form className='py-4' onSubmit={handleSubmit}>
              <label htmlFor='email' className='font-semibold'>
                Email
              </label>
              <input
                type='email'
                className='w-full py-3 px-4 bg-transparent border border-black rounded mb-4 mt-1 font-semibold'
                placeholder='Enter Email'
                required
                aria-required
                ref={adminRef}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete='on'
              />
              <label htmlFor='password' className='font-semibold'>
                Password
              </label>
              <div className='eye_div relative'>
                <input
                  type={hide === true ? "password" : "text"}
                  className='w-full py-3 px-4 bg-transparent border border-black rounded mb-6 mt-1 font-semibold'
                  placeholder='Enter Password'
                  id='password'
                  autoComplete='on'
                  aria-required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />

                <div
                  className='absolute icon_button right-4 top-4'
                  onClick={() => {
                    setHide(!hide);
                  }}
                >
                  {hide ? (
                    <EyeOffIcon className='h-6 font-extralight' />
                  ) : (
                    <EyeIcon className='h-6 font-extralight' />
                  )}
                </div>
              </div>
              <button className='w-full p-3 text-white bg-green-500 rounded-xl cursor-pointer transition-all duration-200 ease-linear delay-100 hover:rounded-full focus:outline-none'>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
