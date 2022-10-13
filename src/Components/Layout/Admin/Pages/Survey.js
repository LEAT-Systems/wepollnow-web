import React from "react";
import SideBar from "../Components/Sidebar";
import Header from "../Components/Header";
import PageContent from "../Components/Content";
import Wrapper from "../Components/BodyWrapper";
import SurveyContent from "../PageContent/SurveyContent";

//
const Survey = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <SideBar />
        <PageContent children={<SurveyContent />} />
      </Wrapper>
    </>
  );
};

export default Survey;
