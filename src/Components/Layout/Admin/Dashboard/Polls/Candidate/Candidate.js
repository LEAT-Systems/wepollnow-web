import React from "react";
import SideBar from "../../../Sidebar";
import PageContent from "../../../Content";
import Wrapper from "../../../BodyWrapper";
import ManageCandidate from "./ManageCandidate";

const Candidate = () => {
  return (
    <>
      <Wrapper>
        <SideBar />
        <main className='ml-auto lg:ml-[82px] w-screen'>
          <PageContent children={<ManageCandidate />} />
        </main>
      </Wrapper>
    </>
  );
};

export default Candidate;