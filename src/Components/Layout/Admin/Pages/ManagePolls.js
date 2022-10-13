import React from "react";
import SideBar from "../Components/Sidebar";
import Header from "../Components/Header";
import PageContent from "../Components/Content";
import Wrapper from "../Components/BodyWrapper";
import PollsPageContentOne from "../PageContent/PollsPageContentOne";

//
const ManagePolls = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <SideBar />
        <PageContent children={<PollsPageContentOne />} />
      </Wrapper>
    </>
  );
};

export default ManagePolls;
