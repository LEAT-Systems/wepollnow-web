import { useState } from "react";
import Nav from "../../Layout/Landing/mainNav";
import Badge from "../../../UI/Badge";
import vice from "../../../images/vice_candidate_apc.png";
import partyLogo from "../../../images/apc.png";
import candidate from "../../../images/candidate_apc.png";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "../../Layout/Landing/Footer";

const Parties = [
  {
    id: "p1",
    partyLogo: partyLogo,
    candidateImg: candidate,
    cBadge: "Candidate",
    vBadge: "Running Mate",
    viceCandidateImg: vice,
    partyName: "All Progressive Congress (APC)",
    candidate: "Bola Ahmed Tinubu",
    runningMate: "Kashim S.",
  },
  {
    id: "p2",
    partyLogo: partyLogo,
    candidateImg: candidate,
    viceCandidateImg: vice,
    cBadge: "Candidate",
    vBadge: "Running Mate",
    partyName: "Labour Party (LP)",
    candidate: "Peter Obi",
    runningMate: "Datti",
  },
  {
    id: "p3",
    partyLogo: partyLogo,
    candidateImg: candidate,
    viceCandidateImg: vice,
    cBadge: "Candidate",
    vBadge: "Running Mate",
    partyName: "Peoples Democratic Party (PDP)",
    candidate: "Atiku Abubakar",
    runningMate: "Ifeanyi Okowa",
  },
];
const FormFour = () => {
  const [query, setQuery] = useState("");
  const [val, setVal] = useState("");

  //
  const checkHandler = (e) => {
    setVal(e.target.value);
  };

  //   Search Functionality
  const keys = ["partyName", "candidate", "runningMate"];
  const search = (data) =>
    data.filter((data) =>
      keys.some((key) => data[key].toLowerCase().includes(query))
    );
  return (
    <>
      <Nav bg="EDFFF0" />
      <div className="flex flex-row items-center justify-center  bg-[#EDFFF0]">
        <div className="flex flex-col space-y-4 items-center justify-center p-16">
          <p className="font-bold text-3xl text-center">
            Select the party you'd like to vote
          </p>
          <input
            className="w-full h-12 fontAwesome px-4 mb-2 text-lg text-gray-700 bg-transparent text-center placeholder-gray-600 border-b"
            type="text"
            placeholder="&#xF002; Search Party or Candidate Name"
            onChange={(e) => {
              return setQuery(e.target.value.toLowerCase());
            }}
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center mx-auto py-4  md:px-4">
        <div className="w-full md:w-3/4 text-lg text-gray-700 ">
          <section>
            <form>
              <div className="flex flex-col space-y-4 md:p-8">
                <div className="space-y-4 px-4">
                  {search(Parties).map((item) => {
                    return (
                      <div
                        key={item.id}
                        className=" border border-gray-200 p-4 md:p-6 rounded-md"
                      >
                        <div className="flex flex-row items-center justify-between pb-2 border-b border-gray-200">
                          <div className="flex flex-row font-semibold space-x-2">
                            <img
                              src={item.partyLogo}
                              className="rounded h-5 w-5 md:h-8 md:w-8"
                              alt=""
                            />
                            <p className="text-sm md:text-lg">
                              {item.partyName}
                            </p>
                          </div>
                          <input
                            id={item.id}
                            name="party"
                            type="radio"
                            value={item.id}
                            onChange={checkHandler}
                            className="h-5 w-5  border-gray-300 text-gray-600 focus:ring-gray-500"
                          />
                        </div>
                        <div className="flex flex-row justify-between items-center ">
                          <section className="flex flex-col items-start justify-start w-full p-4 space-y-2">
                            <div className="flex flex-row items-start justify-start space-x-4">
                              <img
                                src={candidate}
                                className="rounded h-8 w-8"
                                alt=""
                              />
                              <p className="text-sm md:text-lg">
                                {item.candidate}
                              </p>
                              <Badge>{item.cBadge}</Badge>
                            </div>
                            <div className="flex flex-row items-start justify-start space-x-4">
                              <img
                                src={vice}
                                className="rounded h-8 w-8"
                                alt=""
                              />
                              <p className="text-sm md:text-lg">
                                {item.runningMate}
                              </p>
                              <Badge>
                                <p className="text-xs md:text-lg">
                                  {item.vBadge}
                                </p>
                              </Badge>
                            </div>
                          </section>
                          <button
                            disabled={val !== item.id ? true : false}
                            className={`${
                              val === item.id
                                ? "bg-green-500 cursor-pointer"
                                : "bg-gray-500 cursor-not-allowed disabled"
                            } px-4 md:px-8 text-white rounded p-2 text-sm md:text-lg`}
                          >
                            Vote
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FormFour;
