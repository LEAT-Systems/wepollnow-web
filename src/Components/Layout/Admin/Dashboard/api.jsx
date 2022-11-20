import axios from "../../../../api/axios";

/* Get Table Data */
const getTableData = async () => {
  try {
    const response = await axios.get(
      "https://wepollnow.azurewebsites.net/",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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
}

/****************** Get All States ******************/
const getState = async () => {
  try {
    const response = await axios.get(
      "https://wepollnow.azurewebsites.net/",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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
}

/*********************** Get District ************************/
const getDistrict = async () => {
  try {
    const response = await axios.get(
      "https://wepollnow.azurewebsites.net/",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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
}

/*********************** Get LGA's ************************/
const getLGA = async () => {
  try {
    const response = await axios.get(
      "https://wepollnow.azurewebsites.net/",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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
}

/*********************** Get Zone ************************/
const getZone = async () => {
  try {
    const response = await axios.get(
      "https://wepollnow.azurewebsites.net/",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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
}

/*********************** Get Poll Type ************************/
const getPollType = async () => {
  try {
    const response = await axios.get("https://wepollnow.azurewebsites.net/", {
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
  let formData = new FormData()
  formData.append("candidate__image", file)

  axios.post("PATH", formData, {
    headers: {
      "Content-Type": "application/json"
    },
    onUploadProgress: (ProgressEvent) => {
      const { loaded, total } = ProgressEvent;
      let percent = Math.round(loaded * 100 / total)
      console.log(`${loaded}kb of ${total}kb | ${percent}%`);
    }
  }).then(res => console.log(res))
};


export { getTableData, getState, getZone, getDistrict, getLGA, getPollType, postImage };