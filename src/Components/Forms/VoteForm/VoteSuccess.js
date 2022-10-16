import React from "react";
import Nav from "../../Layout/Landing/mainNav";
import doneIcon from "../../../images/doneIcon.png";
import whatsapp from "../../../images/whatsapp.png";
import facebook from "../../../images/facebook.png";
import instagram from "../../../images/instagram.png";
import twitter from "../../../images/twitter.png";
import mail from "../../../images/mail.png";
import copyIcon from "../../../images/copy.png";
import { Link } from "react-router-dom";

const VoteSuccess = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center min-h-screen px-4 py-4 mx-auto md:px-0">
        <div className="w-full px-4 py-4 text-lg text-gray-700 border rounded-lg md:w-2/4">
          <header className="w-full p-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <img src={doneIcon} alt="success" />
              <p className="p-1 px-4 text-xl text-center text-black md:text-2xl">
                Yay...!!! Your vote has been recorded successfully. Kindly Share
                poll with friends
              </p>
              <div className="flex flex-row items-center justify-center space-x-4">
                <button className="flex flex-row items-center justify-center p-2 bg-[#EDFFF0] rounded-md">
                  <img src={copyIcon} alt="" className="w-4 h-4" />
                  <p>Copy Link</p>
                </button>
                <div className="p-2 bg-[#EDFFF0] rounded-md">
                  <img src={whatsapp} alt="whatsapp" />
                </div>
                <div className="p-2 bg-[#EDFFF0] rounded-md">
                  <img src={facebook} alt="facebook" />
                </div>
                <div className="p-2 bg-[#EDFFF0] rounded-md">
                  <img src={instagram} alt="instagram" />
                </div>
                <div className="p-2 bg-[#EDFFF0] rounded-md">
                  <img src={twitter} alt="instagram" />
                </div>
                <div className="p-2 bg-[#EDFFF0] rounded-md">
                  <img src={mail} alt="mail" />
                </div>
              </div>
            </div>
          </header>

          <section>
            <div className="flex flex-row items-end justify-end w-full p-2 space-x-4 md:p-6">
              <Link to="/">
                <button
                  type="button"
                  className="p-2 px-6 ml-6 text-black bg-transparent border border-black rounded-md hover:border-red-500"
                >
                  Go Home
                </button>
              </Link>
              <Link to="/polls">
                <button
                  type="submit"
                  className="p-2 px-6 text-white bg-green-500 rounded-md hover:bg-green-600 hover:-translate-y-1"
                >
                  More Polls
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default VoteSuccess;
