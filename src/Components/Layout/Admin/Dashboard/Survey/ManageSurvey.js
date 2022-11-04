/** @format */

import React from "react";
import SideBar from "../../Sidebar";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import ManageSurveyContent from "./ManageSurveyContent";

//
const Survey = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        <main className='ml-auto lg:ml-[82px] w-screen'>
           <PageContent children={<ManageSurveyContent />} />
        </main>
      </Wrapper>
    </>
  );
};

export default Survey;
