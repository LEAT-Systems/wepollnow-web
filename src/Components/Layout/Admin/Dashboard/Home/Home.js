/** @format */

import React from "react";
import SideBar from "../../Sidebar";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import HomeContent from "./HomeContent";

//
const Dashboard = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        <main className='ml-auto md:ml-[82px] w-screen'>
          <PageContent children={<HomeContent />} />
        </main>
      </Wrapper>
    </>
  );
};

export default Dashboard;
