import React from "react";
import SideBar from "../Components/Sidebar";
import Header from "../Components/Header";
import PageContent from "../Components/Content";
import Wrapper from "../Components/BodyWrapper";
import AccountSettings from "../PageContent/AccountSettings";
//
const Account = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <SideBar />
        <PageContent children={<AccountSettings />} />
      </Wrapper>
    </>
  );
};

export default Account;
