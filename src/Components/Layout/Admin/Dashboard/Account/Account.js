/** @format */

import React from "react";
import SideBar from "../../Sidebar";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import AccountSettings from "./AccountSettings";
//
const Account = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        <main className='ml-[82px] w-screen'>
          <PageContent children={<AccountSettings />} />
        </main>
      </Wrapper>
    </>
  );
};

export default Account;
