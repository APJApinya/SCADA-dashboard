import { useState } from "react";
import axios from "axios";

const API_URL = "https://wy9dediidb.execute-api.ap-southeast-2.amazonaws.com";

const StartStopButtons = () => {
  // using state hook to control the button
  const [isGenerating, setIsGenerating] = useState(false);

  const startSensorData = async () => {
    const response = await axios.post(`${API_URL}/start`);
    console.log(response.data);
    setIsGenerating(true);
  };

  const stopSensorData = async () => {
    const response = await axios.post(`${API_URL}/stop`);
    console.log(response.data);
    setIsGenerating(false);
  };

  return (
    <div className="flex space-x-4 mt-4">
      {!isGenerating && (
        <button
          onClick={startSensorData}
          className="px-4 py-2 text-white font-semibold rounded-lg shadow-md bg-green-500 hover:bg-green-600 transition"
        >
          Start
        </button>
      )}
      {isGenerating && (
        <button
          onClick={stopSensorData}
          className="px-4 py-2 text-white font-semibold rounded-lg shadow-md bg-red-500 hover:bg-red-600 transition"
        >
          Stop
        </button>
      )}
    </div>
  );
};

export default StartStopButtons;
