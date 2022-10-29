import axios from "axios"

export const api = axios.create({ baseURL: "https://" })

export const getTableData = async () => {
  const response = await api.get("/")
  return response.data
}