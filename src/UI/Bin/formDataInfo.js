// {
//   /* <div className="flex flex-col p-2 md:p-8 space-y-4">
//                     <div className="h-64 px-2 md:px-4 space-y-4 overflow-y-scroll scrollable">
//                       <div
//                         className={
//                           hasError
//                             ? "bg-red-400 text-white rounded-md p-4"
//                             : "hidden"
//                         }
//                       >
//                         <b>Error:</b> All details are required. Kindly go back
//                         and fill in all.
//                       </div>

//                       <div
//                         className={
//                           hasError
//                             ? "border border-red-400 p-4 rounded-lg"
//                             : "border border-gray-200 p-2 md:p-4 rounded-lg"
//                         }
//                       >
//                         <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
//                           <span className="font-bold uppercase text-xs md:text-lg">
//                             Phone Number :
//                           </span>{" "}
//                           <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg ">
//                             {props.data.phone}
//                           </p>
//                         </div>
//                         <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
//                           <span className="font-bold uppercase text-xs md:text-lg">
//                             Email :{" "}
//                           </span>
//                           {""}
//                           <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
//                             {props.data.email}
//                           </p>
//                         </div>
//                         <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
//                           <span className="font-bold uppercase text-xs md:text-lg">
//                             FIRST TIME VOTER ? :
//                           </span>
//                           <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
//                             {props.data.firstTimeVoter}
//                           </p>
//                         </div>
//                         <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
//                           <span className="font-bold uppercase text-xs md:text-lg">
//                             Diaspora Voter:{" "}
//                           </span>
//                           <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
//                             {props.data.diasporaVoter}
//                           </p>
//                         </div>
//                         <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
//                           <span className="font-bold uppercase text-xs md:text-lg">
//                             State of Voting Residence:{" "}
//                           </span>
//                           <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
//                             {props.data.stateOfVotingRes}
//                           </p>
//                         </div>
//                         <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
//                           <span className="font-bold uppercase text-xs md:text-lg">
//                             LGA of Voting Residence ? :{" "}
//                           </span>
//                           <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
//                             {props.data.LGAofVotingRes}
//                           </p>
//                         </div>
//                         <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
//                           <span className="font-bold uppercase text-xs md:text-lg">
//                             State Of Origin:{" "}
//                           </span>
//                           <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
//                             {props.data.stateOfOrigin}
//                           </p>
//                         </div>
//                         <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
//                           <span className="font-bold uppercase text-xs md:text-lg">
//                             Age range:{" "}
//                           </span>
//                           <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
//                             {props.data.ageRange}
//                           </p>
//                         </div>
//                         <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
//                           <span className="font-bold uppercase text-xs md:text-lg">
//                             Do you have a PVC?:{" "}
//                           </span>
//                           <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
//                             {props.data.pvc}
//                           </p>
//                         </div>
//                         <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
//                           <span className="font-bold uppercase text-xs md:text-lg">
//                             Marital Status:{" "}
//                           </span>
//                           <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
//                             {props.data.maritalStatus}
//                           </p>
//                         </div>
//                         <div className="flex flex-row justify-between border-b px-4 py-3">
//                           <span className="font-bold uppercase text-xs md:text-lg">
//                             Employment Status:{" "}
//                           </span>
//                           <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
//                             {props.data.employmentStatus}
//                           </p>
//                         </div>
//                         <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
//                           <span className="font-bold uppercase text-xs md:text-lg">
//                             Gender:{" "}
//                           </span>
//                           <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
//                             {props.data.gender}
//                           </p>
//                         </div>
//                         <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
//                           <span className="font-bold uppercase text-xs md:text-lg">
//                             Religion:{" "}
//                           </span>
//                           <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
//                             {props.data.religion}
//                           </p>
//                         </div>
//                         <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
//                           <span className="font-bold uppercase text-xs md:text-lg">
//                             Selected Option:{" "}
//                           </span>
//                           <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
//                             {props.data.selectOneOpt}
//                           </p>
//                         </div>
//                         <div className="flex flex-row justify-between px-4 py-3 border-b border-gray-200">
//                           <span className="font-bold uppercase text-xs md:text-lg">
//                             Accomodation Status:{" "}
//                           </span>
//                           <p className="px-2 border border-gray-200 rounded-lg text-xs md:text-lg">
//                             {props.data.accomodationStatus}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div> */
// }
