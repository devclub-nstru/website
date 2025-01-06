import axios from "axios";
import { showError /*showSuccess, showWarning*/ } from "../utils/toastUtil";

const BASE_URL = "https://api.example.com/events"; // Replace with actual API endpoint

export const getEvent = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    showError("Error fetching event data");
    return [];
  }
};
