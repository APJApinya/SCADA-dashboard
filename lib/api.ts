import axios from "axios";
import { EquipmentData } from "@/types/equipments";

const API_URL =
  "https://v906edlnt1.execute-api.ap-southeast-2.amazonaws.com/prod/equipment-data";

export const getEquipmentData = async (): Promise<EquipmentData | null> => {
  try {
    const response = await axios.get(API_URL);

    const data =
      typeof response.data.body === "string"
        ? JSON.parse(response.data.body)
        : response.data.body;

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.message);
    } else {
      console.error("Unexpected Error:", error);
    }
    return null;
  }
};
