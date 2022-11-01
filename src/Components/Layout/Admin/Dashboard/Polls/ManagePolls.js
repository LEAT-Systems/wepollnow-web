import React from "react";
import SideBar from "../../Sidebar";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import PollsPageContentOne from "./PollsPageContentOne";

//
const ManagePolls = () => {
  return (
    <>
      <Wrapper className='w-[100vw]'>
        <SideBar />
        <main className='ml-0 md:ml-[82px] w-screen'>
          <PageContent children={<PollsPageContentOne />} />
        </main>
      </Wrapper>
    </>
  );
};

export default ManagePolls;
