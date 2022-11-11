import React from "react";
import SideBar from "../../Sidebar";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import PollsPageContentTwo from "./PollsPageContentTwo";

//
const PollsResult = () => {
  return (
    <>
      <Wrapper className='w-[100vw]'>
        <SideBar />
        <main className='ml-0 lg:ml-[82px] w-screen'>
        <PageContent children={<PollsPageContentTwo />} />
        </main>
      </Wrapper>
    </>
  );
};

export default PollsResult;
