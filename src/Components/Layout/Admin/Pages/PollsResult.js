import React from "react";
import SideBar from "../Components/Sidebar";
import Header from "../Components/Header";
import PageContent from "../Components/Content";
import Wrapper from "../Components/BodyWrapper";
import PollsPageContentTwo from "../PageContent/PollsPageContentTwo";

//
const PollsResult = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <SideBar />
        <PageContent children={<PollsPageContentTwo />} />
      </Wrapper>
    </>
  );
};

export default PollsResult;
