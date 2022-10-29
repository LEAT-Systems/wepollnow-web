import React from "react";
import SideBar from "../../Sidebar";
import Header from "../../Header";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import BlogContent from "../Blog/BlogContent";
//
const Blog = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <SideBar />
        <PageContent children={<BlogContent />} />
      </Wrapper>
    </>
  );
};

export default Blog;
