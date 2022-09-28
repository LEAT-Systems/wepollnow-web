// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Tooltip = () => {
//   const [tooltipStatus, setTooltipStatus] = useState(0);
//   return (
//     <>
//       <div
//         className="relative my-28 md:my-0 md:mx-40"
//         onMouseEnter={() => setTooltipStatus(2)}
//         onMouseLeave={() => setTooltipStatus(0)}
//       >
//         <NavLink activeClassName="active" to="/getting-started-three">
//           <button className="inline-flex items-center justify-center w-10 h-10 mr-2 text-white transition-colors duration-150 bg-blue-500 rounded-full focus:shadow-outline hover:bg-blue-400">
//             3
//           </button>
//         </NavLink>
//         {tooltipStatus == 2 && (
//           <div
//             role="tooltip"
//             className="absolute left-0 z-20 w-64 p-4 ml-8 -mt-20 transition duration-150 ease-in-out bg-indigo-700 rounded shadow-lg"
//           >
//             <svg
//               className="absolute top-0 bottom-0 left-0 h-full -ml-2"
//               width="9px"
//               height="16px"
//               viewBox="0 0 9 16"
//               version="1.1"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//             >
//               <g
//                 id="Page-1"
//                 stroke="none"
//                 strokeWidth={1}
//                 fill="none"
//                 fillRule="evenodd"
//               >
//                 <g
//                   id="Tooltips-"
//                   transform="translate(-874.000000, -1029.000000)"
//                   fill="#4c51bf"
//                 >
//                   <g
//                     id="Group-3-Copy-16"
//                     transform="translate(850.000000, 975.000000)"
//                   >
//                     <g id="Group-2" transform="translate(24.000000, 0.000000)">
//                       <polygon
//                         id="Triangle"
//                         transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
//                         points="4.5 57.5 12.5 66.5 -3.5 66.5"
//                       />
//                     </g>
//                   </g>
//                 </g>
//               </g>
//             </svg>
//             <p className="pb-1 text-sm font-bold text-white">
//               Keep track of follow ups
//             </p>
//             <p className="pb-3 text-xs leading-4 text-white">
//               Reach out to more prospects at the right moment.
//             </p>
//             <div className="flex justify-between">
//               <div className="flex items-center">
//                 <span className="text-xs font-bold text-white">
//                   Step 1 of 4
//                 </span>
//               </div>
//               <div className="flex items-center">
//                 <span className="mr-2 text-xs text-white underline cursor-pointer">
//                   Skip Tour
//                 </span>
//                 <button className="px-5 py-1 text-xs text-indigo-700 transition duration-150 ease-in-out bg-white rounded focus:outline-none hover:bg-gray-200">
//                   Next
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Tooltip;
