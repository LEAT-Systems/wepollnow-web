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
        <PageContent children={<AccountSettings />} />
      </Wrapper>
    </>
  );
};

export default Account;
