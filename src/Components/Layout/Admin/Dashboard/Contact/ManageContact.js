import React from "react";
import { useState, useEffect } from "react";
import Header from "../../Header";
import { ContactHeader } from "../../SubHeader";
import { baseUrl } from "../../../../../store/baseUrl";
import { CSVLink } from "react-csv";
import down from "../../../../../images/down.png";

const SubHeaderData = [
  {
    id: 1,
    route: "/admin/contact/contact",
    linkText: "Contact Messages",
  },
  {
    id: 2,
    route: "/admin/contact/subscribers",
    linkText: "Subscribers",
  },
];

const ManageContact = () => {
  const [tableData, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(25);

  let currentDate = new Date().toJSON().slice(0, 10);
  /////////////////////////////////  =====     PAGINATION    ===========   ////////////////////////////////
  // get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = [...tableData]
    ?.reverse()
    ?.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tableData.length / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (i) => setCurrentPage(i);
  const pagination = pageNumbers.map((i) => (
    <button
      key={i}
      onClick={() => paginate(i)}
      className="px-4 py-2 text-sm font-medium text-black border border-[#000]  focus:bg-green-200"
    >
      {i}
    </button>
  ));

  const getData = async () => {
    const requestOptions = {
      method: "GET",
    };
    const response = await fetch(
      baseUrl + `utilities/contact_list`,
      requestOptions
    );
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="flex flex-col justify-center w-[98%]">
      <Header />
      <div className="px-4 md:px-6 lg:px-12">
        <ContactHeader data={SubHeaderData} />
        <header className="flex flex-col items-start justify-start w-full my-4 md:flex-row md:justify-between place-items-start md:place-items-center md:items-center">
          <h3 className="font-bold text-xl lg:text-2xl md:text-[1.4rem] capitalize py-4 pl-0 w-full">
            Inbox Messages
          </h3>

          <CSVLink
            filename={`inbox_messages_exported_on_${currentDate}.csv`}
            data={tableData}
            className="p-3 px-4 text-center text-black transition duration-150 border rounded-md hover:translate-y-1"
          >
            <div className="flex flex-row items-center justify-center space-x-2">
              <p>CSV</p>
              <span>
                <img src={down} alt="export" className="h-6 w-7" />
              </span>
            </div>
          </CSVLink>
        </header>

        {/* Data Table */}
        <div className="flex flex-col text-[#082a0f] my-1 border rounded-md shadow-xl">
          <table className="min-w-full text-center">
            <thead className="uppercase bg-green-100 border-b">
              <tr>
                <th scope="col" className="border-r table-head">
                  Name
                </th>
                <th scope="col" className="border-r table-head">
                  Message
                </th>
                <th scope="col" className="border-r table-head">
                  Email
                </th>
                <th scope="col" className="border-r table-head">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className="p-3 border-b border-r">{item.name}</td>
                    <td className="p-3 border-b border-r">{item.message}</td>
                    <td className="p-3 border-b border-r">{item.email}</td>
                    <td className="p-3 border-b border-r">
                      {new Date(`${item.created_date}`).toLocaleDateString(
                        "en-EN",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex flex-row p-4 space-x-4 border-b border-l border-r">
            {pagination}
          </div>
        </div>
      </div>
    </main>
  );
};
export default ManageContact;
