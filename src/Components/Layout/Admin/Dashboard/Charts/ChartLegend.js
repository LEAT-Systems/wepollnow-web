import React from "react";
// "#f9c033", "#e2345a", "#2e5aac", "purple", "#08c127";
const data = [
  {
    id: 1,
    label: "All Progressive Congress",
    labelColor: "#f9c033",
  },
  {
    id: 2,
    label: "Labour Party",
    labelColor: "#e2345a",
  },
  {
    id: 3,
    label: "People Democratic Party",
    labelColor: "#2e5aac",
  },
  {
    id: 4,
    label: "National Operational Congress",
    labelColor: "purple",
  },
  {
    id: 5,
    label: "Youth Associative Party",
    labelColor: "#08c127",
  },
];


const ChartLegend = () => {

    const statusColors =
      data.labelColor === "#f9c033"
        ? "after:bg-blue-['#f9c033']"
        : data.status === "#e2345a"
        ? "after:bg-['#e2345a']"
        : data.status === "#2e5aac"
        ? "after:bg-['#2e5aac']"
        : data.status === "purple"
        ? "after:bg-['purple']"
        : "after:bg-['#08c127']"

  return (
    <main className='w-full border rounded-md py-4 pl-5 pr-2 h-full'>
      <h2 className='font-bold text-black text-base capitalize pb-4'>Legend</h2>
      <div className='flex flex-col gap-4'>
        {data.map((data) => {
          return (
            <h3
              key={data.id}
              className={`font-bold text-xs text-[#020] capitalize leading-5 relative after:content-[""] after:absolute after:w-[.6rem] after:h-[.6rem] after:rounded-full ${statusColors} after:-left-3 after:top-1/2 after:-translate-y-1/2`}
            >
              {data.label}
            </h3>
          );
        })}
      </div>
    </main>
  );
};

export default ChartLegend;
