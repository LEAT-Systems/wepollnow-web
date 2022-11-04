import React from "react";
import { Link } from "react-router-dom";
import BlogItem from "./BlogItem";

const BlogSingleGroupPage = () => {
  return (
    <>
      {/* page header */}
      <div className="flex flex-col items-start justify-start px-4 mx-auto mt-12 md:px-24">
        <p className="text-[16px]  font-bold underline underline-offset-2 decoration-yellow-500 decoration-4">
          Latest Update
        </p>
      </div>

      {/* Blog Item */}
      <BlogItem />

      {/* View more */}
      <div className="flex flex-row items-center justify-center pt-12">
        <Link to="/blog">
          <button className="p-4 px-8 font-semibold text-white bg-[#08BC26]  rounded-lg animate">
            View Stories
          </button>
        </Link>
      </div>
    </>
  );
};

export default BlogSingleGroupPage;
