/** @format */

import { useState, createContext } from "react";
const ModalFormContext = createContext();

export const ModalFormProvider = ({ children }) => {
  const [pollType, setPollType] = useState([]);
  const [pollTypeData, setPollTypeData] = useState([]);
  const [pollTypeName, setPollTypeName] = useState("");
  const [pollName, setPollName] = useState("");
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [district, setDistrict] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  const [party, setParty] = useState([]);
  const [partyData, setPartyData] = useState([]);
  const [parties, setParties] = useState([]);
  const [zone, setZone] = useState([]);
  const [zoneData, setZoneData] = useState([]);
  const [formTwoData, setFormTwoData] = useState([]);
  const [selectedParty, setSelectedParty] = useState([]);
  const [mainCandidate, setMainCandidate] = useState(false);
  const [runningMate, setRunningMate] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  /* Table State */
  const [tableRowID, setTableRowID] = useState("");

  /* Edit Poll Data  */
  const [editPollData, setEditPollData] = useState([])

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
        setEditPollData
      }}
    >
      {children}
    </ModalFormContext.Provider>
  );
};

export default ModalFormContext;
