import axios from "../../../../api/axios";

/* Get Table Data */
const getTableData = async () => {
  try {
    const response = await axios.get("/", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Log data to terminal to check
    console.log(response);
  } catch (err) {
    if (err?.response) {
      console.log("Status Code is: ", err.response.status);
    } else if (err.response?.status === 404) {
      console.log("Status Code is: ", err.response.status);
    } else if (err?.response.status === 200) {
      console.log("Status Code is: ", err.response.status);
    } else if (err.response?.status === 401) {
      console.log("Status Code is: ", err.response.status);
    } else {
      console.log("Status Code is: ", err.response.status);
    }
  }
};

/****************** Get All States ******************/
const getState = async () => {
  axios
    .get("/utilities/states/")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

/****************** Get Senetorial ******************/
const getSenatorial = async ({ state_id }) => {
  axios
    .get(
      `/utilities/senatorial/${state_id}/`
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

/*********************** Get LGA's ************************/
const getLGA = async () => {
  try {
    const response = await axios.get("/", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Log data to terminal to check
    console.log(response);
  } catch (err) {
    if (err?.response) {
      console.log("Status Code is: ", err.response.status);
    } else if (err.response?.status === 404) {
      console.log("Status Code is: ", err.response.status);
    } else if (err?.response.status === 200) {
      console.log("Status Code is: ", err.response.status);
    } else if (err.response?.status === 401) {
      console.log("Status Code is: ", err.response.status);
    } else {
      console.log("Status Code is: ", err.response.status);
    }
  }
};

/*********************** Get Zone ************************/
const getZone = async () => {
  try {
    const response = await axios.get("/", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Log data to terminal to check
    console.log(response);
  } catch (err) {
    if (err?.response) {
      console.log("Status Code is: ", err.response.status);
    } else if (err.response?.status === 404) {
      console.log("Status Code is: ", err.response.status);
    } else if (err?.response.status === 200) {
      console.log("Status Code is: ", err.response.status);
    } else if (err.response?.status === 401) {
      console.log("Status Code is: ", err.response.status);
    } else {
      console.log("Status Code is: ", err.response.status);
    }
  }
};

/*********************** Get Poll Type ************************/
const getPollType = async () => {
  try {
    const response = await axios.get("/", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Log data to terminal to check
    console.log(response);
  } catch (err) {
    if (err?.response) {
      console.log("Status Code is: ", err.response.status);
    } else if (err.response?.status === 404) {
      console.log("Status Code is: ", err.response.status);
    } else if (err?.response.status === 200) {
      console.log("Status Code is: ", err.response.status);
    } else if (err.response?.status === 401) {
      console.log("Status Code is: ", err.response.status);
    } else {
      console.log("Status Code is: ", err.response.status);
    }
  }
};

/*********************** Upload Image ************************/
const postImage = async (file, onUploadProgress) => {
  let formData = new FormData();
  formData.append("candidate__image", file);

  axios
    .post("PATH", formData, {
      headers: {
        "Content-Type": "application/json",
      },
      onUploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent;
        let percent = Math.round((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
      },
    })
    .then((res) => console.log(res));
};

/*********************** Contact List ************************/
const getContactList = async () => {
  axios
    .get(`/utilities/contact_list/`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

/*********************** Contact List ************************/
const getEmails = async () => {
  axios
    .get(`/utilities/subscriber/`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export {
  getTableData,
  getState,
  getSenatorial,
  getZone,
  getLGA,
  getPollType,
  postImage,
  getContactList,
  getEmails,
};
