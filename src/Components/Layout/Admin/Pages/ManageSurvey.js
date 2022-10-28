import React from "react";
import SideBar from "../Components/Sidebar";
import Header from "../Components/Header";
import PageContent from "../Components/Content";
import Wrapper from "../Components/BodyWrapper";
import ManageSurveyContent from "../PageContent/ManageSurvey";

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
