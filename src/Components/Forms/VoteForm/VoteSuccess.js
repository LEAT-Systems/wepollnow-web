import React from "react";
import { useState } from "react";
import Nav from "../../Layout/Landing/mainNav";
import doneIcon from "../../../images/doneIcon.png";
import whatsapp from "../../../images/socials/wp.png";
import facebook from "../../../images/socials/fb.png";
import instagram from "../../../images/socials/ig.png";
import twitter from "../../../images/socials/tw.png";
import linkedIn from "../../../images/socials/li.png";
import mail from "../../../images/mail.png";
import copyIcon from "../../../images/copy.png";
import { Link } from "react-router-dom";
import { Slide } from "@mui/material";

const VoteSuccess = () => {
  const [copied, setCopied] = useState(false);

  // text to be copied to clipboard
  const linkToBeCopied =
    "I just voted for my preferred candidate in the wepollnow e-Nigeria opinion polls. You can give your candidate a vote by using this link. https://pollit-ashy.vercel.app/";
  const clipBoardHandler = () => {
    navigator.clipboard.writeText(linkToBeCopied);
    setCopied(true);
  };

  // timeout to hide success message
  setTimeout(() => {
    setCopied(false);
  }, 5000);

  // message to be displayed on success toast
  const message = (
    <div className="flex flex-row items-center justify-center px-4 mx-auto mt-24 md:px-0">
      <div
        className={`flex flex-row items-center justify-between p-3 px-4 w-full md:w-2/3 border rounded-md`}
      >
        <div className="flex flex-row items-center space-x-3">
          <img src={copyIcon} className="w-4 h-4" alt="copiedIcon" />
          <p>Copied to clipboard</p>
        </div>
        <div>
          <img src={doneIcon} alt="success" />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Nav />
      <div className="flex flex-row items-center justify-center min-h-screen px-4 py-4 mx-auto md:px-0">
        <div className="w-full px-4 py-4 text-lg text-gray-700 border rounded-lg md:w-2/4">
          <Slide direction="down" in={copied} mountOnEnter unmountOnExit>
            {message}
          </Slide>
          <header className="w-full py-4 md:p-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <img src={doneIcon} alt="success" />
              <p className="p-1 px-4 text-sm text-center text-black md:text-xl">
                Yay...!!! Your vote has been recorded successfully.
                <br />
                Kindly Share poll with friends.
              </p>

              <div className="flex flex-row items-center justify-center space-x-4">
                <button
                  onClick={clipBoardHandler}
                  className="flex flex-row  border border-[#08c127] items-center justify-center space-x-1 p-2 rounded-md"
                >
                  <img src={copyIcon} alt="" className="w-4 h-4" />
                  <p className="text-xs md:text-lg">Copy Link</p>
                </button>
                <a
                  rel="noreferrer"
                  data-action="share/whatsapp/share"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?text=${linkToBeCopied}`}
                >
                  <img src={whatsapp} alt="whatsapp" />
                </a>
                <button>
                  <img src={facebook} alt="facebook" />
                </button>
                <button>
                  <img src={instagram} alt="instagram" />
                </button>
                <button>
                  <img src={linkedIn} alt="instagram" />
                </button>
                <button>
                  <img src={twitter} alt="instagram" />
                </button>
                <a href="mailto:" target="_blank" rel="noreferrer">
                  <button className="p-2 bg-[#EDFFF0] rounded-md">
                    <img src={mail} alt="mail" />
                  </button>
                </a>
              </div>
            </div>
          </header>

          <section>
            <div className="flex flex-row items-end justify-end w-full p-2 space-x-4 md:px-16 md:p-8">
              <Link to="/">
                <button
                  type="button"
                  className="p-2 px-6 ml-6 text-black bg-transparent border border-black rounded-md animateBack"
                >
                  Go Home
                </button>
              </Link>
              <Link to="/polls">
                <button
                  type="submit"
                  className="p-2 px-6 text-white animate bg-[#08C127] rounded-md"
                >
                  More Polls
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VoteSuccess;
