import React from "react";
import SubHeader from "../../../SubHeader";

const SubHeaderData = [
  {
    id: 1,
    route: "/dashboard/polls/polls",
    linkText: "Polls",
  },
  {
    id: 2,
    route: "/dashboard/polls/candidates",
    linkText: "Candidates",
  },
];
const Candidate = () => {
  return (
    <div className='h-screen w-full my-auto'>
      <SubHeader data={SubHeaderData} />
      <h1 className='text-xl font-bold text-center'>Add Candidate</h1>
    </div>
  );
};

export default Candidate;
