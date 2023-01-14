import React, { useEffect, useState } from "react";
import Edit from "../../assets/edit@2x.png";
import Delete from "../../assets/trash@2x.png";
import { baseUrl } from "../../../../../store/baseUrl";
import swal from "sweetalert";
import { Modal } from "@mui/material";
import { Close } from "@mui/icons-material";

const ManageAdminTableRow = ({ tableData }) => {
  const [id, setID] = useState();
  const [deleteRequest, setDeleteRequest] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleOpen = (id) => {
    setOpen(!open);
    setID(id);
  };

  // Function to get a user
  const getUser = async () => {
    const requestOptions = {
      method: "GET",
    };

    const response = await fetch(baseUrl + `user/admin/${id}/`, requestOptions);

    if (!response.ok) {
      swal({
        title: "Action Failed",
        icon: "error",
        buttons: {
          confirm: {
            text: "Close",
            className: "swalButton",
          },
        },
      });
    } else {
      const res = await response.json();
      setName(res.name);
      setEmail(res.email);
      setRole(res.is_superuser === true ? "Super Admin" : "Admin");
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        role: role.toUpperCase(),
      }),
    };

    const response = await fetch(baseUrl + `user/admin/${id}/`, requestOptions);
    const result = await response.json();
    console.log(result);

    if (!response.ok) {
      swal({
        title: "Action Failed",
        icon: "error",
        buttons: {
          confirm: {
            text: "Close",
            className: "swalButton",
          },
        },
      });
    } else {
      swal({
        title: "Update Successful",
        icon: "success",
        buttons: {
          confirm: {
            text: "Close",
            className: "swalButton",
          },
        },
      }).then(() => window.location.reload());
    }
  };

  // Function to Delete a User
  const deleteUser = async () => {
    const requestOptions = {
      method: "DELETE",
    };

    const response = await fetch(baseUrl + `user/admin/${id}/`, requestOptions);
    if (!response.ok) {
      swal({
        title: "Action Failed",
        icon: "error",
        buttons: {
          confirm: {
            text: "Close",
            className: "swalButton",
          },
        },
      });
    } else {
      swal({
        title: "Deleted Successfully",
        icon: "success",
        buttons: {
          confirm: {
            text: "Close",
            className: "swalButton",
          },
        },
      }).then(() => window.location.reload());
    }
  };

  // Runs when the id to delete is !undefined and delete request !false
  useEffect(() => {
    if (id !== undefined && deleteRequest === true) {
      deleteUser();
    }
    if (id !== undefined) {
      getUser();
    }
  }, [id]);

  return (
    <>
      <tr className="table-row">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          <span className="text-white font-bold capitalize bg-green-900 mr-4 rounded-xl p-[.6rem] cursor-pointer">
            {tableData.symbol}
          </span>{" "}
          {tableData.name}
        </th>
        <td className="px-6 py-4 cursor-pointer">{tableData.email}</td>
        <td className="px-6 py-4 cursor-pointer">{tableData.superUser}</td>
        <td className="px-6 py-4 cursor-pointer">{tableData.active}</td>
        <td className="flex flex-row px-6 py-4 space-x-2">
          <button
            onClick={() => handleOpen(tableData.id)}
            className="text-blue-500 cursor-pointer"
          >
            <img src={Edit} alt="Edit" className="w-[1.1rem] h-[1.1rem]" />
          </button>
          <button
            onClick={() => {
              setID(tableData.id);
              setDeleteRequest(true);
            }}
            className="text-red-500 cursor-pointer"
          >
            <img src={Delete} alt="Trash" className="w-[1.1rem] h-[1.1rem]" />
          </button>
        </td>
      </tr>
      {/* Edit Admin Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={updateUser}
          className="flex flex-col items-center justify-center px-6 py-4 mx-auto h-auto w-[95%] sm:w-5/6 md:w-3/5 bg-white rounded-lg space-y-6"
        >
          <header className="flex items-center justify-between w-full pb-3 mb-3 border-b-2 border-gray-300 border-solid">
            <h2 className="font-extrabold text-lg md:text-xl text-[#082a0f] capitalize">
              Edit Admin
            </h2>
            <button
              type="button"
              className="flex items-center justify-center border border-1 rounded-md py-[2px] px-[2px] cursor-pointer text-sm md:text-base bg-[#fcf0f0] text-red-500"
              onClick={() => setOpen(false)}
            >
              <Close />
            </button>
          </header>
          <div className="flex flex-col items-center justify-center w-full">
            <label className="relative w-full font-semibold">
              Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="Enter Name"
                className="font-medium text-base text-[#616b62] capitalize h-full w-full border-2 border-gray-300 rounded-md py-4 px-3 placeholder:text-[#616b62]"
              />
            </label>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <label className="relative w-full font-semibold">
              Email Address
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="font-medium text-base text-[#616b62] capitalize h-full w-full border-2 border-gray-300 rounded-md py-4 px-3 placeholder:text-[#616b62]"
              />
            </label>
          </div>

          {/* ZONE */}
          <div className="flex flex-col items-center justify-center w-full gap-3 my-2 md:flex-row md:gap-5">
            <label className="font-semibold custom_select_container">
              <span className="font-semibold">Role</span>
              <select
                onChange={(e) => setRole(e.target.value)}
                name="zone"
                value={role}
                id="zone"
                required
                className="custom_select disabled:bg-gray-200 disabled:cursor-not-allowed"
              >
                <option value="admin">admin</option>
                <option value="superadmin">superadmin</option>
              </select>
            </label>
          </div>

          <div className="flex items-center justify-end w-full my-2">
            <button
              type="button"
              className="flex items-center justify-center border-2 border-gray-300 py-3 px-5 h-full cursor-pointer text-sm rounded-md capitalize mr-4 transition-all duration-400 ease-in-out hover:bg-[#f3dddd] hover:text-red-600 hover:rounded-full"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`flex items-center justify-center h-full px-5 py-3 text-sm text-white capitalize transition-all ease-in-out 
                bg-green-500 rounded-md cursor-pointer duration-400 hover:bg-green-500 hover:text-white hover:rounded-full 
            `}
            >
              confirm
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ManageAdminTableRow;
