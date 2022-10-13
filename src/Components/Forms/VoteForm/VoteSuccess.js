import React from "react";
import Nav from "../../Layout/Landing/mainNav";
import doneIcon from "../../../images/doneIcon.png";
import whatsapp from "../../../images/whatsapp.png";
import facebook from "../../../images/facebook.png";
import instagram from "../../../images/instagram.png";
import twitter from "../../../images/twitter.png";
import mail from "../../../images/mail.png";

const VoteSuccess = (props) => {
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center bg-hero-pattern bg-no-repeat bg-center justify-center min-h-screen px-4 py-4 mx-auto md:px-0">
        <div className="w-full text-lg text-gray-700 border border-green-500 py-4 px-4 rounded-lg md:w-[600px] shadow-2xl shadow-green-200">
          <header className="w-full p-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <img src={doneIcon} alt="success" />
              <p className="px-4 p-1 text-xl text-black  text-center md:text-2xl">
                Yay...!!! Your vote has been recorded successfully. Kindly Share
                poll with friends
              </p>
              <div className="flex flex-row items-center justify-center space-x-4">
                <div className="flex flex-row p-2 bg-[#EDFFF0] rounded-md">
                  {/* <img src={} alt=''/> */}
                  <p>Copy Link</p>
                </div>
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
              <button
                type="button"
                className="p-2 px-6 ml-6 text-black bg-transparent border border-black rounded-md hover:border-red-500"
              >
                Go Home
              </button>
              <button
                type="submit"
                className="p-2 px-6 bg-green-500 hover:bg-green-600 text-white rounded-md hover:-translate-y-1"
              >
                More Polls
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default VoteSuccess;
