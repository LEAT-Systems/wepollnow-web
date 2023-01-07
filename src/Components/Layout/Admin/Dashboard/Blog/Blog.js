/** @format */

import React from "react";
import SideBar from "../../Sidebar";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import ManageBlogContent from "./ManageBlogContent";

const Blog = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        <main className="ml-auto lg:ml-[82px] w-screen">
          <PageContent children={<ManageBlogContent />} />
        </main>
      </Wrapper>
    </>
  );
};

export default Blog;
