/** @format */

import React from "react";
import SideBar from "../../Sidebar";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import ManageContact from "./ManageContact";

const Contact = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        <main className="ml-auto lg:ml-[82px] w-screen">
          <PageContent children={<ManageContact />} />
        </main>
      </Wrapper>
    </>
  );
};

export default Contact;
