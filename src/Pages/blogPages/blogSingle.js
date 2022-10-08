import React from "react";
import CommentIcon from "@mui/icons-material/Comment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import votingg from "../../images/votingg.jpg";
import avatar from "../../images/avatar.svg";
import img_1 from "../../images/image_5.png";
import img_2 from "../../images/image_3.png";
import img_3 from "../../images/image_4.png";

const BlogSingle = () => {
  return (
    <div className="space-y-4 mt-4 md:mt-48">
      <p className="md:px-12 px-4 md:ml-6 font-bold text-xl underline underline-offset-2">
        Latest Update
      </p>

      <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row items-center justify-center mx-auto">
        <div className="flex flex-col space-y-2">
          <img src={img_1} className="" alt={"Voter"} />
          <div className="flex flex-row space-x-4">
            <img className="w-6 h-6 rounded-full" src={avatar} alt="" />
            <p className="font-bold">Olumide Adebayo</p>
          </div>

          <h4 className="max-w-sm font-bold text-md">
            Welcome! This is the INEC Continuous Voter Registration Portal.
          </h4>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row items-start justify-start space-x-2">
              <CommentIcon />
              <p>56</p>
            </div>
            <div className="flex flex-row items-start justify-start space-x-2">
              <AccessTimeIcon />
              <p className="text-sm">4 mins</p>
            </div>
            <div className="flex flex-row items-start justify-start space-x-2">
              <CalendarMonthIcon />
              <p>Oct, 22 2019</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 px-4">
          <img src={img_2} alt={"Voter"} />
          <div className="flex flex-row space-x-4">
            <img className="w-6 h-6 rounded-full" src={avatar} alt="" />
            <p className="font-bold">Olumide Adebayo</p>
          </div>

          <h4 className="max-w-sm font-bold text-md">
            Welcome! This is the INEC Continuous Voter Registration Portal.
          </h4>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row items-start justify-start space-x-2">
              <CommentIcon />
              <p>56</p>
            </div>
            <div className="flex flex-row items-start justify-start space-x-2">
              <AccessTimeIcon />
              <p className="text-sm">4 mins</p>
            </div>
            <div className="flex flex-row items-start justify-start space-x-2">
              <CalendarMonthIcon />
              <p>Oct, 22 2019</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 px-4">
          <img src={img_3} alt={"Voter"} />
          <div className="flex flex-row space-x-4">
            <img className="w-6 h-6 rounded-full" src={avatar} alt="" />
            <p className="font-bold">Olumide Adebayo</p>
          </div>

          <h4 className="max-w-sm font-bold text-md">
            Welcome! This is the INEC Continuous Voter Registration Portal.
          </h4>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row items-start justify-start space-x-2">
              <CommentIcon />
              <p>56</p>
            </div>
            <div className="flex flex-row items-start justify-start space-x-2">
              <AccessTimeIcon />
              <p className="text-sm">4 mins</p>
            </div>
            <div className="flex flex-row items-start justify-start space-x-2">
              <CalendarMonthIcon />
              <p>Oct, 22 2019</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-12">
        <button className="bg-green-500 p-4 rounded-lg px-8 font-semibold text-white hover:bg-black">
          View Stories
        </button>
      </div>
    </div>
  );
};

export default BlogSingle;
