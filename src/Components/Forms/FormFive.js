import { useState } from "react";
import Nav from "../Layout/Landing/mainNav";
import Badge from "../../UI/Badge";

const Parties = [
  {
    id: "p1",
    partyName: "All Progressive Congress (APC)",
    candidate: "Bola Ahmed Tinubu",
    runningMate: "Kashim Shettima",
  },
  {
    id: "p2",
    partyName: "Labour Party (LP)",
    candidate: "Peter Gregory Obi",
    runningMate: "Datti",
  },
  {
    id: "p3",
    partyName: "Peoples Democratic Party (PDP)",
    candidate: "Atiku Abubakar",
    runningMate: "Ifeanyi Okowa",
  },
];
const FormFour = () => {
  const [query, setQuery] = useState("");

  //   Search Functionality
  const keys = ["partyName", "candidate", "runningMate"];
  const search = (data) =>
    data.filter((data) =>
      keys.some((key) => data[key].toLowerCase().includes(query))
    );
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center mx-auto py-4  px-4 md:px-0">
        <div className="w-full md:w-1/2 h-[500px] text-lg text-gray-700 border rounded-lg">
          <header className="w-full p-8 border-b">
            <div className="flex flex-col items-center justify-center ">
              <h3 className="font-bold text-black uppercase text-4xl">
                Cast Your Vote
              </h3>
            </div>
          </header>
          <section>
            <form>
              <div className="flex flex-col space-y-4 p-8">
                <div className="overflow-y-scroll space-y-4 h-64 scrollable px-4">
                  <div className="">
                    <label className="font-bold">Select your candidate</label>
                    <input
                      className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border-b"
                      type="text"
                      placeholder="Search Party or Candidate Name"
                      onChange={(e) => {
                        return setQuery(e.target.value.toLowerCase());
                      }}
                    />
                  </div>

                  {search(Parties).map((item) => {
                    return (
                      <div
                        key={item.id}
                        type="radio"
                        className=" border border-gray-200 p-6 rounded-md"
                      >
                        <div className="flex flex-row items-center justify-between pb-2">
                          <label className="font-semibold">
                            {item.partyName}
                          </label>
                          <input
                            id={item.id}
                            name="radio"
                            type="radio"
                            value={item.partyName}
                            className="h-4 w-4  border-gray-300 text-gray-600 focus:ring-gray-500"
                          />
                        </div>
                        <header className="flex flex-col items-start justify-start w-full p-4 border-t space-y-2">
                          <div className="flex flex-row items-start justify-start space-x-4">
                            <p>{item.candidate}</p>
                            <Badge>Candidate</Badge>
                          </div>
                          <div className="flex flex-row items-start justify-start space-x-4">
                            <p>{item.runningMate}</p>
                            <Badge>Running Mate</Badge>
                          </div>
                        </header>
                      </div>
                    );
                  })}
                </div>
              </div>
            </form>
          </section>
          <div className="flex flex-col w-full border-t text-center min-h-[70px] items-center justify-center">
            <button className="p-2 w-1/4 bg-black text-white rounded-md">
              CAST VOTE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormFour;
