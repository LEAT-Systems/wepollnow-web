import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CommentIcon from "@mui/icons-material/Comment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import anchor from "../../images/anchor.png";
import { DUMMY_DATA } from "./DummyData";
import { Link } from "react-router-dom";

const BlogItem = () => {
  return (
    <div>
      {/* ITEMS */}
      <div className="grid grid-cols-1 px-4 mt-4 md:pb-24 gap-y-12 md:gap-y-0 gap-x-12 md:px-24 md:gap-x-12 md:grid-cols-3">
        {DUMMY_DATA.map((data) => {
          return (
            <Link to={"/blog-single"} key={data.id}>
              <div className="flex flex-col space-y-2 md:h-64">
                <div className="relative">
                  <img
                    src={data.articleImg}
                    alt="Voter"
                    className="w-full rounded"
                  />
                  <div className="absolute bottom-0 right-0 z-30">
                    <img src={anchor} alt="anchorIcon" className="rounded-br" />
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={data.authorImg}
                    alt=""
                  />
                  <p className="font-bold">{data.author}</p>
                </div>

                <h4 className="max-w-sm font-bold text-md">
                  {data.postCaption}
                </h4>
                <div className="flex flex-row space-x-4">
                  <div className="flex flex-row items-start justify-start space-x-2">
                    <CommentIcon />
                    <p>{data.comment}</p>
                  </div>
                  <div className="flex flex-row items-start justify-start space-x-2">
                    <AccessTimeIcon />
                    <p className="text-sm">{data.timePosted}</p>
                  </div>
                  <div className="flex flex-row items-start justify-start space-x-2">
                    <CalendarMonthIcon />
                    <p>{data.datePosted}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogItem;