import React from "react";
import SideBar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import PageContent from "../../Components/Content";
import Wrapper from "../../Components/BodyWrapper";
import BlogContent from "../PageContent/BlogContent";
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
