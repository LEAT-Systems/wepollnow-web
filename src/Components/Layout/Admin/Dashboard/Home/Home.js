import React from "react";
import SideBar from "../../Sidebar";
import Header from "../../Header";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import HomeContent from "./HomeContent";

//
const Dashboard = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        <PageContent children={<HomeContent />} />
      </Wrapper>
    </>
  );
};

export default Dashboard;
