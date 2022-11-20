import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import {  ArrowDropDown, LibraryBooks } from "@mui/icons-material";
import MENU from '../../assets/menu.jpg';

export default function DropDown({ handleList, handleGrid, handleBar, handlePie }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <main className='border rounded-md my-auto flex w-auto hover:cursor-pointer'>
      <Button
        className='flex'
        id='fade-button'
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ padding: ".6rem .6rem", color: "#616b62" }}
      >
        <img
          src={MENU}
          alt='menu'
          className='w-[1.2rem] h-[1.2rem] bg-transparent mr-[.3rem] my-auto'
        />
        <ArrowDropDown sx={{ fontSize: "1rem", margin: "auto" }} />
      </Button>
      <Menu
        id='fade-menu'
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{
          borderRadius: "3rem !important",
        }}
      >
        <div className='py-1 px-4'>
          <MenuItem
            onClick={() => {
              handleClose();
              handleList();
            }}
            sx={{
              borderBottom: "1px solid grey",
              padding: "0.7rem 0",
              fontSize: ".9rem",
              color: "#616b62",
              "&:hover": {
                background: "transparent",
              },
            }}
          >
            <img
              src={MENU}
              alt='menu'
              className='w-[1.2rem] h-[1.2rem] bg-transparent mr-[1rem]'
            />
            Table View - Default
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              handleGrid();
            }}
            sx={{
              borderBottom: "1px solid grey",
              padding: "0.7rem 0",
              fontSize: ".9rem",
              color: "#616b62",
            }}
          >
            <img
              src={MENU}
              alt='menu'
              className='w-[1.2rem] h-[1.2rem] bg-transparent mr-[1rem]'
            />
            Table View - States
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              handleBar();
            }}
            sx={{
              borderBottom: "1px solid grey",
              padding: "0.7rem 0",
              fontSize: ".9rem",
              color: "#616b62",
            }}
          >
            <img
              src={MENU}
              alt='menu'
              className='w-[1.2rem] h-[1.2rem] bg-transparent mr-[1rem]'
            />
            Bar Chart
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              handlePie();
            }}
            sx={{
              padding: "0.7rem 0",
              fontSize: ".9rem",
              color: "#616b62",
            }}
          >
            <img
              src={MENU}
              alt='menu'
              className='w-[1.2rem] h-[1.2rem] bg-transparent mr-[1rem]'
            />
            Pie Chart
          </MenuItem>
        </div>
      </Menu>
    </main>
  );
}