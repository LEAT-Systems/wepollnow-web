/** @format */

import React from "react";
import SideBar from "../../Sidebar";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import HomeContentAll from "./HomeContentAll";

//
const DashboardAll = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        <main className="ml-auto lg:ml-[82px] w-screen">
          <PageContent children={<HomeContentAll />} />
        </main>
      </Wrapper>
    </>
  );
};

export default DashboardAll;
