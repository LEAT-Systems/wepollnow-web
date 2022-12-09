import React from "react";
import SideBar from "../../Sidebar";
import PageContent from "../../Content";
import Wrapper from "../../BodyWrapper";
import PollsPageContentOne from "./PollsPageContentOne";
import TableContext from "../Tables/TableContext";
import Data from "../../Data.json";

const tableData = Data;

const ManagePolls = () => {
  return (
    <>
      <TableContext.Provider value={tableData}>
        <Wrapper className='w-[100vw]'>
          <SideBar />
          <main className='ml-0 lg:ml-[82px] w-screen'>
            <PageContent children={<PollsPageContentOne />} />
          </main>
        </Wrapper>
      </TableContext.Provider>
    </>
  );
};

export default ManagePolls;
