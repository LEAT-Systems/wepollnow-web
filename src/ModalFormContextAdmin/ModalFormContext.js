import { useState, createContext } from 'react'
const ModalFormContext = createContext();

export const ModalFormProvider = ({children}) => {
  const  [pollType, setPollType] = useState([])
  const  [pollTypeData, setPollTypeData] = useState([])
  const  [startDate, setStartDate] = useState([])
  const  [endDate, setEndDate] = useState([])
  const  [state, setState] = useState([])
  const  [selectedState, setSelectedState] = useState('')
  const  [district, setDistrict] = useState([])
  const  [districtData, setDistrictData] = useState([])
  const  [party, setParty] = useState([])
  const  [partyData, setPartyData] = useState([])
  const  [zone, setZone] = useState([])
  const  [zoneData, setZoneData] = useState([])
  const [formTwoData, setFormTwoData] = useState([]);
  const  [selectedParty, setSelectedParty] = useState([])
  const  [mainCandidate, setMainCandidate] = useState([])
  const  [runningMate, setRunningMate] = useState([])

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
        runningMate,
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
        setRunningMate,
        setFormTwoData,
      }}
    >
      {children}
    </ModalFormContext.Provider>
  );
}

export default ModalFormContext;