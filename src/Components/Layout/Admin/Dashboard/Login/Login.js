import React, { useEffect, useRef, useState, useContext } from "react";
import LOGO from "../../../../../images/logo.png";
import axios from "../../../../../api/axios";
import AuthContext from "../../../../../store/auth-context";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const adminRef = useRef();
  const errRef = useRef();
  const [loading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-4 mx-auto md:px-0">
        <img src={LOGO} alt="LOGO" className="w-44 pb-9" />
        <div className="w-full px-4 py-4 text-lg text-gray-700 border border-gray-500 rounded-lg shadow-2xl md:w-98 shadow-gray-200">
          <div className="p-6 space-y-4">
            <h1 className="text-xl font-extrabold text-center text-black md:text-2xl">
              Welcome Back
            </h1>
            <p className="text-base font-semibold text-center text-gray-600 md:text-lg">
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
                aria-live="assertive"
              >
                {error}
              </p>
            </section>
            <form className="py-4" onSubmit={handleSubmit}>
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 mt-1 mb-4 font-semibold bg-transparent border border-black rounded"
                placeholder="Enter Email"
                required
                aria-required
                ref={adminRef}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="on"
              />
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 mt-1 mb-6 font-semibold bg-transparent border border-black rounded"
                placeholder="Enter Password"
                id="password"
                autoComplete="on"
                aria-required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button className="w-full p-3 text-white transition-all duration-200 ease-linear delay-100 bg-green-500 cursor-pointer rounded-xl hover:rounded-full focus:outline-none">
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
