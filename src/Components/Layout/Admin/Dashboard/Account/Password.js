/** @format */

import React from "react";
import SideBar from "../../Sidebar";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import ManagePassword from "./ManagePassword";

const Account = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        <main className='ml-auto lg:ml-[82px] w-screen'>
          <PageContent children={<ManagePassword />} />
        </main>
      </Wrapper>
    </>
  );
};

export default Account;
