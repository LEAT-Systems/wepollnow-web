/** @format */

import React from "react";
import SideBar from "../../Sidebar";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import ManageSubscribers from "./ManageSubscribers";

const Subscribers = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        <main className="ml-auto lg:ml-[82px] w-screen">
          <PageContent children={<ManageSubscribers />} />
        </main>
      </Wrapper>
    </>
  );
};

export default Subscribers;
