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
  const [presidentialName, setPresidentialName] = useState("");
  const [senatorialName, setSenatorialName] = useState("");
  const [gubernationalName, setGubernationalName] = useState("");
  const [zonelName, setZonelName] = useState("");

  /* Edit Data's Based of Table Row Selected */
  const [editableID, setEditableID] = useState("");
  const [editablePollData, setEditablePollData] = useState("");
  const [editableStartDate, setEditableStartDate] = useState("");
  const [editableEndDate, setEditableEndDate] = useState("");
  const [editableState, setEditableState] = useState("");
  const [editableDistrict, setEditableDistrict] = useState("");
  const [editableZone, setEditableZone] = useState("");
  const [editStartDate, setEditStartDate] = useState(editableStartDate);
  const [editEndDate, setEditEndDate] = useState(editableEndDate);
  /* Poll Table State */
  const [tableRowID, setTableRowID] = useState("");
  /* Poll Table State */
  const [candidateID, setCandidateID] = useState("");
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
        presidentialName,
        setPresidentialName,
        senatorialName,
        setSenatorialName,
        gubernationalName,
        setGubernationalName,
        zonelName,
        setZonelName,
        successMessage,
        setSuccessMessage,
        editEndDate,
        setEditEndDate,
        editStartDate,
        setEditStartDate,

        /* Poll Table State */
        tableRowID,
        setTableRowID,

        /* Candidate Table State */
        candidateID,
        setCandidateID,

        /* Edit Poll Data */
        editPollData,
        setEditPollData,

        /* Edit Data's Based of Table Row Selected */
        editableID,
        setEditableID,
        editablePollData,
        setEditablePollData,
        editableStartDate,
        setEditableStartDate,
        editableEndDate,
        setEditableEndDate,
        editableState,
        setEditableState,
        editableDistrict,
        setEditableDistrict,
        editableZone,
        setEditableZone,
      }}
    >
      {children}
    </ModalFormContext.Provider>
  );
};

export default ModalFormContext;
