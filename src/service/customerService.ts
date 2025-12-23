import axios from "axios";
import type { Customer } from "../model/customer";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_URL =  `${API_BASE_URL}/api/customers`

export const getCustomers = async (): Promise<Customer[]> => {
  const response = await axios.get<Customer[]>(API_URL);
  return response.data;
};