/** @format */

import React from "react";
import SideBar from "../../Sidebar";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import ManageAdmin from "./ManageAdmin";

const Account = () => {
  return (
     <>
      <Wrapper>
        <SideBar />
        <main className='ml-auto lg:ml-[82px] w-screen'>
          <PageContent children={<ManageAdmin />} />
        </main>
      </Wrapper>
    </>
  );
};

export default Account;