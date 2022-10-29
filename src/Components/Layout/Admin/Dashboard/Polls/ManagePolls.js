import React from "react";
import SideBar from "../../Sidebar";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import PollsPageContentOne from "./PollsPageContentOne";

//
const ManagePolls = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        <PageContent children={<PollsPageContentOne />} />
      </Wrapper>
    </>
  );
};

export default ManagePolls;
