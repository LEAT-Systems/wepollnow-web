import axios from "axios"
import Data from "../Data.json"
export const api = axios.create({ baseURL: "https://" })

export const getTableData = async () => {
  const response = await api.get("/")
  return response.data
}

export const jsonData = () => {
  const response = JSON.stringify(Data)
  return response
}