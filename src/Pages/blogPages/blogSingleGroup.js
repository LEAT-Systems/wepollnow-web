import React from "react";
import { Link } from "react-router-dom";
import BlogItem from "./BlogItem";

const BlogSingleGroupPage = () => {
  return (
    <div className="mt-12 md:mt-48">
      {/* Blog Item */}
      <BlogItem />

      {/* View more */}
      <div className="flex flex-row items-center justify-center pt-12">
        <Link to="/blog">
          <button className="p-4 px-8 font-semibold text-white bg-[#08BC26] rounded-lg animate">
            View Stories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogSingleGroupPage;
