/** @format */

import { useState, createContext } from "react";
const ModalFormContext = createContext();

export const ModalFormProvider = ({ children }) => {
  /* Value ID's */
  const [pollType, setPollType] = useState([]);
  const [pollTypeName, setPollTypeName] = useState("");
  const [pollName, setPollName] = useState("");
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [district, setDistrict] = useState([]);
  const [party, setParty] = useState([]);
  const [zone, setZone] = useState([]);
  const [selectedParty, setSelectedParty] = useState([]);
  const [mainCandidate, setMainCandidate] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  /* Data's  */
  const [pollTypeData, setPollTypeData] = useState([]);
  const [state, setState] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  const [partyData, setPartyData] = useState([]);
  const [parties, setParties] = useState([]);
  const [zoneData, setZoneData] = useState([]);
  const [formTwoData, setFormTwoData] = useState([]);

  /* Poll Table State */
  const [tableRowID, setTableRowID] = useState("");
  /* Poll Table State */
  const [candidateRowID, setCandidateRowID] = useState("");
  /* Edit Poll Data  */
  const [editPollData, setEditPollData] = useState([]);

  return (
    <ModalFormContext.Provider
      value={{
        pollType,
        pollTypeData,
        startDate,
        endDate,
        state,
        selectedState,
        district,
        districtData,
        party,
        partyData,
        zone,
        zoneData,
        selectedParty,
        mainCandidate,
        formTwoData,
        setPollType,
        setPollTypeData,
        setStartDate,
        setEndDate,
        setState,
        setSelectedState,
        setDistrict,
        setDistrictData,
        setParty,
        setPartyData,
        setZone,
        setZoneData,
        setSelectedParty,
        setMainCandidate,
        setFormTwoData,
        setParties,
        parties,
        setPollName,
        pollName,
        pollTypeName,
        setPollTypeName,
        successMessage,
        setSuccessMessage,

        /* Table State */
        tableRowID,
        setTableRowID,

        /* Edit Poll Data */
        editPollData,
        setEditPollData,
      }}
    >
      {children}
    </ModalFormContext.Provider>
  );
};

export default ModalFormContext;
