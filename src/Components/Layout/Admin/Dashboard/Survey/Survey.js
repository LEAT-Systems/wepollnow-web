/** @format */

import React from "react";
import SideBar from "../../Sidebar";
import Header from "../../Header";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import SurveyContent from "./SurveyContent";

//
const Survey = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        <main className='ml-[82px] w-screen'>
          <PageContent children={<SurveyContent />} />
        </main>
      </Wrapper>
    </>
  );
};

export default Survey;
