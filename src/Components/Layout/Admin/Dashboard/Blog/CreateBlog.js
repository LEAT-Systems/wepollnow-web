/** @format */

import React from "react";
import SideBar from "../../Sidebar";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import CreateBlogContent from "./CreateBlogContent";

const CreateBlog = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        <main className="ml-auto lg:ml-[82px] w-screen">
          <PageContent children={<CreateBlogContent />} />
        </main>
      </Wrapper>
    </>
  );
};

export default CreateBlog;
