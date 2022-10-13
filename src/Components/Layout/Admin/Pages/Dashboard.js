import React from "react";
import SideBar from "../Components/Sidebar";
import Header from "../Components/Header";
import PageContent from "../Components/Content";
import Wrapper from "../Components/BodyWrapper";
import DashboardContent from "../PageContent/Dashboard";

//
const Dashboard = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <SideBar />
        <PageContent children={<DashboardContent />} />
      </Wrapper>
    </>
  );
};

export default Dashboard;
