/** @format */

import React from "react";
import SideBar from "../../Sidebar";
import Header from "../../Header";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import ManageSurveyContent from "./ManageSurveyContent";

//
const Survey = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <SideBar />
          <PageContent children={<ManageSurveyContent />} />
      </Wrapper>
    </>
  );
};

export default Survey;
