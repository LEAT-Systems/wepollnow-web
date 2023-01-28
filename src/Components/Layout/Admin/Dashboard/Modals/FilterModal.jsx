/** @format */

import React, { useContext, useState, useEffect } from "react";
import { Close, Streetview } from "@mui/icons-material";
import {
  FormControl,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import swal from "sweetalert";
import ModalFormContext from "../../../../../ModalFormContextAdmin/ModalFormContext";
import axios from "../../../../../api/axios";

const FilterModal = ({ refineResult, handleCloseRefineResult }) => {
  const { selectedState } = useContext(ModalFormContext);
  const [view, setView] = useState("default");
  const [state, setState] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  const [gender, setGender] = useState();
  const [firstTimeVoter, setFirstTimeVoter] = useState(false);
  const [validVotersCard, setValidVotersCard] = useState(false);
  const [diasporaVoter, setDiasporaVoter] = useState(false);
  const [residenceLga, setResidenceLga] = useState("");
  const [residentState, setResidentState] = useState();
  const [origin, setOrigin] = useState();
  const [ageRange, setAgeRange] = useState("");
  const [religion, setReligion] = useState("");
  const [maritialStatus, setMaritialStatus] = useState();
  const [employmenStatus, setEmploymenStatus] = useState();
  const [propertyStatus, setPropertyStatus] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("/poll/poll_result_filter/", {
        poll_id: localStorage.getItem("tableData"),
        gender: gender,
        firstTimeVoter: JSON?.parse(firstTimeVoter),
        validVotersCard: JSON?.parse(validVotersCard),
        diaspora_voter: JSON?.parse(diasporaVoter),
        residence_state: residentState,
        residence_lga: residenceLga,
        state_of_origin: origin,
        age_range: ageRange,
        religion: religion,
        marital_status: maritialStatus,
        employment_status: employmenStatus,
        property_status: propertyStatus,
      })
      .then((res) => {
        console.log(res);
        swal({
          title: "Success",
          text: "Poll Result Filtered!",
          icon: "success",
          buttons: [
            {
              color: "success",
              label: "OK",
              isCancel: true,
            },
          ],
        });
        setGender("");
        setFirstTimeVoter(false);
        setDiasporaVoter(false);
        setResidenceLga("");
        setOrigin("");
        setAgeRange(false);
        setReligion("");
        setMaritialStatus("");
        setEmploymenStatus("");
        setPropertyStatus("");
      })
      .catch((err) => {
        if (!err?.response) {
          swal({
            title: "Error",
            text: "Check Your Internet Connection",
            icon: "error",
            buttons: [
              {
                color: "error",
                label: "OK",
                isCancel: true,
              },
            ],
          });
        } else if (err.response?.status === 400) {
          console.log(err);
          swal({
            title: "Error",
            text: "Something went wrong",
            icon: "error",
            buttons: [
              {
                color: "error",
                label: "OK",
                isCancel: true,
              },
            ],
          });
        } else if (err.response?.status === 401) {
          console.log(err);
          swal({
            title: "Error",
            text: "Check Your Internet Connection",
            icon: "error",
            buttons: [
              {
                color: "error",
                label: "OK",
                isCancel: true,
              },
            ],
          });
        } else if (err.response?.status === 500) {
          console.log(err);
          swal({
            title: "Error",
            text: "Internal server error",
            icon: "error",
            buttons: [
              {
                color: "error",
                label: "OK",
                isCancel: true,
              },
            ],
          });
        } else {
          swal({
            title: "Error",
            text: "Filter Poll Result Failed",
            icon: "error",
            buttons: [
              {
                color: "error",
                label: "OK",
                isCancel: true,
              },
            ],
          });
        }
      });

    window.location.reload();
  };

  /* Get State */
  useEffect(() => {
    const getState = async () => {
      await axios
        .get("/utilities/states/")
        .then((res) => setState(res.data))
        .catch((err) => console.log(err));
    };
    getState();
  }, [setState]);

  console.log(selectedState);
  /* Get Senetorial District */
  useEffect(() => {
    const getSenetorial = async () => {
      await axios
        .get(`/utilities/senatorial/${residentState}`)
        .then((res) => setDistrictData(res.data))
        .catch((err) => console.log(err));
    };
    getSenetorial();
  }, [residentState, setDistrictData]);

  return (
    <form className="w-full">
      <Modal
        open={refineResult}
        onClose={() => {
          handleCloseRefineResult();
          setGender("");
          setFirstTimeVoter(false);
          setDiasporaVoter(false);
          setResidenceLga("");
          setOrigin("");
          setAgeRange(false);
          setReligion("");
          setMaritialStatus("");
          setEmploymenStatus("");
          setPropertyStatus("");
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowY: "auto",
          outline: "none",
          ":focus": {
            outline: "none",
            border: "none",
          },
        }}
      >
        <div className="flex flex-col items-start justify-start px-6 py-4 my-auto mx-auto h-auto w-[95%] sm:w-5/6 md:w-2/5 bg-white rounded-lg overflow-y-auto focus:outline-none">
          <header className="flex justify-between items-center w-full border-b-2 border-solid border-gray-300 mb-3 py-2">
            <h2 className="font-extrabold text-lg md:text-xl text-[#082a0f] capitalize">
              Refine Results
            </h2>
            <button
              className="flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base bg-[#fcf0f0] text-red-500"
              onClick={() => {
                handleCloseRefineResult();
                setGender("");
                setFirstTimeVoter(false);
                setDiasporaVoter(false);
                setResidenceLga("");
                setOrigin("");
                setAgeRange(false);
                setReligion("");
                setMaritialStatus("");
                setEmploymenStatus("");
                setPropertyStatus("");
              }}
            >
              <Close />
            </button>
          </header>

          <div className="flex flex-col justify-start items-center w-full my-2">
            {/* First Form */}
            <div className="flex flex-col my-2 justify-start items-start w-full gap-3 px-6 py-4 bg-[#edfff0] rounded-xl">
              <div className="w-full">
                {/* Title */}
                <div className="flex items-center w-full border-b-2 border-solid border-gray-300 mb-3 pb-2">
                  <h2 className="font-extrabold text-[1.05rem] text-[#082a0f] capitalize">
                    Table view
                  </h2>
                </div>
                <FormControl
                  onChange={(e) => {
                    setView(e.target.value);
                    console.log(e.target.value);
                  }}
                  sx={{ width: "100%" }}
                >
                  <RadioGroup>
                    <FormControlLabel
                      value="default"
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Table View - Default"
                    />
                    <FormControlLabel
                      value="state"
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Table View - State"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            {/* First Form */}
            <div className="flex flex-col my-2 justify-start items-start w-full gap-3">
              <div className="w-full">
                {/* Title */}
                <div className="modal__header__title">
                  <h4 className="capitalize">Gender</h4>
                  <p></p>
                  <span></span>
                </div>
                <FormControl
                  onChange={(e) => {
                    console.log(e.target.value);
                    setGender(e.target.value);
                  }}
                  sx={{ width: "100%" }}
                >
                  <RadioGroup>
                    <FormControlLabel
                      value={1}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Male"
                    />
                    <FormControlLabel
                      value={2}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            {/* Second Form */}
            <div className="flex flex-col my-2 justify-start items-start w-full gap-3">
              <div className="w-full">
                {/* Title */}
                <div className="modal__header__title">
                  <h4 className="capitalize">category</h4>
                  <p></p>
                  <span></span>
                </div>
                <FormControl
                  onChange={(e) => {
                    console.log(e.target.value);
                    setFirstTimeVoter(e.target.value);
                  }}
                  sx={{ width: "100%" }}
                >
                  <RadioGroup>
                    <FormControlLabel
                      value={true}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="First Time Voter"
                    />
                    <FormControlLabel
                      value={false}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Returning Voter"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            {/* Third */}
            <div className="flex flex-col my-2 justify-start items-start w-full gap-3">
              <div className="w-full">
                {/* Title */}
                <div className="modal__header__title">
                  <h4 className="capitalize">voting residence</h4>
                  <p></p>
                  <span></span>
                </div>
                <FormControl
                  onChange={(e) => {
                    setDiasporaVoter(e.target.value);
                    console.log(e.target.value);
                  }}
                  sx={{ width: "100%" }}
                >
                  <RadioGroup>
                    <FormControlLabel
                      value={true}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Diaspora Voter"
                    />

                    {/*                     
                    <label className='custom__select__container after:!top-[2.2rem]'>
                      <select
                        name='country'
                        id='country'
                        className='custom__select'
                      >
                        <option value='Filter by Country'>
                          Select Country
                        </option>
                        <option>Poll Unit 1</option>
                        <option>Poll Unit 2</option>
                        <option>Poll Unit 3</option>
                        <option>Poll Unit 4</option>
                        <option>Poll Unit 5</option>
                      </select>
                    </label> */}
                    {/*<FormControl
                      onChange={(e) => {
                      console.log(e.target.value)
                    }}
                      sx={{ width: "100%", mt: ".9rem" }}
                    > 
                      */}

                    <FormControlLabel
                      value={false}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Resident Voter"
                    />

                    <label className="custom__select__container after:!top-[2.2rem] mb-2">
                      <select
                        name="state"
                        id="state"
                        className="custom__select"
                        value={residentState}
                        onChange={(e) => {
                          setResidentState(e.target.value);
                        }}
                      >
                        <option value="Filter by States">
                          Filter by State
                        </option>
                        {state?.map((state) => {
                          return (
                            <option
                              key={state?.id}
                              value={state?.id}
                              data-valuename={state?.name}
                            >
                              {state?.name}
                            </option>
                          );
                        })}
                      </select>
                    </label>
                    <label className="custom__select__container after:!top-[2.2rem] mb-2">
                      <select
                        name="lga"
                        id="lga"
                        className="custom__select"
                        value={residenceLga}
                        onChange={(e) => {
                          setResidenceLga(e.target.value);
                        }}
                      >
                        <option value="Filter by Local Government">
                          Select Local Government
                        </option>
                        {districtData?.map((data) => {
                          return (
                            <option
                              key={data?.id}
                              value={data?.id}
                              data-valuename={data?.name}
                            >
                              {data?.name}
                            </option>
                          );
                        })}
                      </select>
                    </label>
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            {/* Fourth */}
            <div className="flex flex-col my-2 justify-start items-start w-full gap-3">
              <div className="w-full">
                {/* Title */}
                <div className="modal__header__title">
                  <h4 className="capitalize">state of origin</h4>
                  <p></p>
                  <span></span>
                </div>
                <FormControl
                  onChange={(e) => {
                    setOrigin(e.target.value);
                    console.log(e.target.value);
                  }}
                  sx={{ width: "100%" }}
                >
                  <label className="custom__select__container after:!top-[2.2rem]">
                    <select
                      name="poll__type"
                      id="poll__type"
                      className="custom__select"
                    >
                      <option value="">Select Origin</option>
                      {state?.map((state) => {
                        return (
                          <option
                            key={state?.id}
                            value={state?.id}
                            data-valuename={state?.name}
                          >
                            {state?.name}
                          </option>
                        );
                      })}
                    </select>
                  </label>
                </FormControl>
              </div>
            </div>

            {/* Fifth */}
            <div className="flex flex-col my-2 justify-start items-start w-full gap-3">
              <div className="w-full">
                {/* Title */}
                <div className="modal__header__title">
                  <h4 className="uppercase">pvc</h4>
                  <p></p>
                  <span></span>
                </div>
                <FormControl
                  onChange={(e) => {
                    setValidVotersCard(e.target.value);
                    console.log(e.target.value);
                  }}
                  sx={{ width: "100%" }}
                >
                  <RadioGroup>
                    <FormControlLabel
                      value="false"
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Voter Without PVC"
                    />
                    <FormControlLabel
                      value={true}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Voter With PVC"
                    />
                  </RadioGroup>
                  {/*                  
                   <label className='custom__select__container after:!top-[2.2rem]'>
                    <select
                      name='poll__type'
                      id='poll__type'
                      className='custom__select'
                    >
                      <option value='Select Poll Type'>Select Poll Type</option>
                      <option>Poll Unit 1</option>
                      <option>Poll Unit 2</option>
                      <option>Poll Unit 3</option>
                      <option>Poll Unit 4</option>
                      <option>Poll Unit 5</option>
                    </select>
                  </label> */}
                </FormControl>
              </div>
            </div>

            {/* Sixth */}
            <div className="flex flex-col my-2 justify-start items-start w-full gap-3">
              <div className="w-full">
                {/* Title */}
                <div className="modal__header__title">
                  <h4 className="capitalize">age range</h4>
                  <p></p>
                  <span></span>
                </div>
                <FormControl
                  onChange={(e) => {
                    setAgeRange(e.target.value);
                    console.log(e.target.value);
                  }}
                  sx={{ width: "100%" }}
                >
                  <RadioGroup>
                    <FormControlLabel
                      value={1}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="18-29"
                    />
                    <FormControlLabel
                      value={2}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="30-39"
                    />
                    <FormControlLabel
                      value={3}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="40-49"
                    />
                    <FormControlLabel
                      value={4}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="50-59"
                    />
                    <FormControlLabel
                      value={5}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Above 59"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            {/* seventh */}
            <div className="flex flex-col my-2 justify-start items-start w-full gap-3">
              <div className="w-full">
                {/* Title */}
                <div className="modal__header__title">
                  <h4 className="capitalize">religion</h4>
                  <p></p>
                  <span></span>
                </div>
                <FormControl
                  onChange={(e) => {
                    setReligion(e.target.value);
                    console.log(e.target.value);
                  }}
                  sx={{ width: "100%" }}
                >
                  <RadioGroup>
                    <FormControlLabel
                      value={1}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Christianity"
                    />
                    <FormControlLabel
                      value={2}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Islam"
                    />
                    <FormControlLabel
                      value={3}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Traditional"
                    />
                    <FormControlLabel
                      value={4}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Others"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            {/* eighth */}
            <div className="flex flex-col my-2 justify-start items-start w-full gap-3">
              <div className="w-full">
                {/* Title */}
                <div className="modal__header__title">
                  <h4 className="capitalize">marital status</h4>
                  <p></p>
                  <span></span>
                </div>
                <FormControl
                  onChange={(e) => {
                    setMaritialStatus(e.target.value);
                    console.log(e.target.value);
                  }}
                  sx={{ width: "100%" }}
                >
                  <RadioGroup>
                    <FormControlLabel
                      value={1}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Married"
                    />
                    <FormControlLabel
                      value={2}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Single"
                    />
                    <FormControlLabel
                      value={3}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Divorced"
                    />
                    <FormControlLabel
                      value={4}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Widowed"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            {/* nineth */}
            <div className="flex flex-col my-2 justify-start items-start w-full gap-3">
              <div className="w-full">
                {/* Title */}
                <div className="modal__header__title">
                  <h4 className="capitalize">Employment Status</h4>
                  <p></p>
                  <span></span>
                </div>
                <FormControl
                  onChange={(e) => {
                    setEmploymenStatus(e.target.value);
                    console.log(e.target.value);
                  }}
                  sx={{ width: "100%" }}
                >
                  <RadioGroup>
                    <FormControlLabel
                      value={1}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Student"
                    />
                    <FormControlLabel
                      value={2}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Employed"
                    />
                    <FormControlLabel
                      value={3}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Unemployed"
                    />
                    <FormControlLabel
                      value={4}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Self-Employed"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            {/* Final Form */}
            <div className="flex flex-col my-2 justify-start items-start w-full gap-3">
              <div className="w-full">
                {/* Title */}
                <div className="modal__header__title">
                  <h4 className="capitalize">Property Status</h4>
                  <p></p>
                  <span></span>
                </div>
                <FormControl
                  onChange={(e) => {
                    setPropertyStatus(e.target.value);
                    console.log(e.target.value);
                  }}
                  sx={{ width: "100%" }}
                >
                  <RadioGroup>
                    <FormControlLabel
                      value={1}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Home owner"
                    />
                    <FormControlLabel
                      value={2}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="Renting"
                    />
                    <FormControlLabel
                      value={3}
                      className="text-[#616b62] font-medium"
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label="None"
                    />
                    {/* <FormControlLabel
                      value='living__with__friends'
                      className='text-[#616b62] font-medium'
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label='Living with friend'
                    />
                    <FormControlLabel
                      value='living__on__your__own'
                      className='text-[#616b62] font-medium'
                      control={
                        <Radio
                          sx={{
                            color: "#616b62",
                            "&.Mui-checked": {
                              color: "#616b62",
                            },
                          }}
                        />
                      }
                      label='Living on your own'
                    /> */}
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end items-center w-full my-2">
            <button
              className="flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full"
              onClick={() => {
                handleCloseRefineResult();
                setGender("");
                setFirstTimeVoter(false);
                setDiasporaVoter(false);
                setResidenceLga("");
                setOrigin("");
                setAgeRange(false);
                setReligion("");
                setMaritialStatus("");
                setEmploymenStatus("");
                setPropertyStatus("");
              }}
            >
              cancel
            </button>
            <button
              className="flex items-center justify-center rounded-md py-3 px-5 h-full cursor-pointer text-sm bg-green-500 text-white capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full"
              onClick={(e) => {
                handleSubmit(e);
                handleCloseRefineResult();
              }}
            >
              confirm
            </button>
          </div>
        </div>
      </Modal>
    </form>
  );
};

export default FilterModal;
