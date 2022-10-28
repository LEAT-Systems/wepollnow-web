import React from "react";
import SideBar from "../../Sidebar";
import Header from "../../Header";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import PollsPageContentTwo from "./PollsPageContentTwo";

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
