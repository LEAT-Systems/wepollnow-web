import React from "react";

const CreatePollModal = ({ open, handleClose, nextPage }) => {
  return (
    <>
      <form className='flex flex-col justify-between items-center w-full my-2 hover:bg-transparent'>
        {/* First Form */}
        <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
          <label className='custom__select__container'>
            Poll Type
            <select
              name='poll__type'
              id='poll__type'
              className='custom__select'
            >
              <option value='Select Poll Type'>Select Poll Type</option>
              <option>President Poll</option>
              <option>Gubernational Poll</option>
              <option>Governorship Poll</option>
            </select>
          </label>
        </div>

        {/*  */}
        <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
          <label className='w-full relative'>
            Start Date
            <input
              type='date'
              name='start__data'
              id='start__data'
              className='font-medium text-base text-[#616b62] uppercase h-full w-full border-2 border-gray-300 rounded-md py-3 px-3'
              placeholder='DD/MM/YY'
            />
          </label>
          <label className='w-full relative'>
            End Date
            <input
              type='date'
              name='end__date'
              id='end__date'
              className='font-medium text-base text-[#616b62] uppercase h-full w-full border-2 border-gray-300 rounded-md py-3 px-3'
              placeholder='DD/MM/YY'
            />
          </label>
        </div>

        {/* Second Form */}
        <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
          <label className='custom__select__container'>
            State
            <select name='state' id='state' className='custom__select'>
              <option value='Select state'>Select State</option>
              <option>Abia</option>
              <option>Adamawa</option>
              <option>Akwa Ibom</option>
              <option>Anambra</option>
              <option>Bauchi</option>
              <option>Bayelsa</option>
              <option>Benue</option>
              <option>Borno</option>
              <option>Cross River</option>
              <option>Delta</option>
              <option>Ebonyi</option>
              <option>Edo</option>
              <option>Ekiti</option>
              <option>Enugu</option>
              <option>Fct</option>
              <option>Gombe</option>
              <option>Imo</option>
              <option>Jigawa</option>
              <option>Kaduna</option>
              <option>Kano</option>
              <option>Katsina</option>
              <option>Kebbi</option>
              <option>Kogi</option>
              <option>Kwara</option>
              <option>Lagos</option>
              <option>Nasarawa</option>
              <option>Niger</option>
              <option>Ogun</option>
              <option>Ondo</option>
              <option>Osun</option>
              <option>Oyo</option>
              <option>Plateau</option>
              <option>Rivers</option>
              <option>Sokoto</option>
              <option>Taraba</option>
              <option>Yobe</option>
              <option>Zamfara</option>
            </select>
          </label>
        </div>

        {/* Third Form */}
        <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
          <label className='custom__select__container'>
            Senetorial District
            <select
              name='poll__type'
              id='poll__type'
              className='custom__select'
            >
              <option value='Select Poll Type'>
                Select Senetorial District
              </option>
              <option>This is a Senetorial District</option>
              <option>This is a Senetorial District</option>
              <option>This is a Senetorial District</option>
            </select>
          </label>

          <label className='custom__select__container'>
            LGA
            <select name='lga' id='lga' className='custom__select'>
              <option value='Select Poll Type'>Select LGA</option>
              <option>This is an LGA</option>
              <option>This is an LGA</option>
              <option>This is an LGA</option>
            </select>
          </label>
        </div>

        {/* Final Form */}
        <div className='flex flex-col md:flex-row my-2 justify-center items-center w-full gap-3 md:gap-5'>
          <label className='custom__select__container'>
            Zone
            <select name='zone' id='zone' className='custom__select'>
              <option value='Select Zone'>Select Zone</option>
              <option>1</option>
              <option>2</option>
              <option>2</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </label>
        </div>

        {/* Buttons */}
        <div className='flex justify-end items-center w-full my-2'>
          <button
            className='flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full'
            onClick={handleClose}
          >
            cancel
          </button>
          <button
            className='flex items-center justify-center rounded-md py-3 px-5 h-full cursor-pointer text-sm bg-green-500 text-white capitalize transition-all duration-400 ease-in-out hover:bg-green-500 hover:text-white hover:rounded-full'
            onClick={() => {
              nextPage();
            }}
          >
            confirm
          </button>
        </div>
      </form>
    </>
  );
};

export default CreatePollModal;
