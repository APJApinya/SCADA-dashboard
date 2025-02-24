import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://wy9dediidb.execute-api.ap-southeast-2.amazonaws.com";

const StartStopButtons = () => {
  // using state hook to control the button
  const [isGenerating, setIsGenerating] = useState(false);
  const [countdown, setCountdown] = useState(60);

  // Timer function
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isGenerating) {
      // update countdown timer every second
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            return 60; // reset timer when it reaches to 0
          }
          return prev - 1; // decrease by 1
        });
      }, 1000);
    } else {
      setCountdown(60); // reset countdown when stopped
    }

    return () => clearInterval(timer);
  }, [isGenerating]);

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
      {isGenerating ? (
        <>
          <p className="text-lg font-semibold text-blue-500">
            Next update in: {countdown} seconds
          </p>
          <button
            onClick={stopSensorData}
            className="px-4 py-2 text-white font-semibold rounded-lg shadow-md bg-red-500 hover:bg-red-600 transition"
          >
            Stop
          </button>
        </>
      ) : (
        <button
          onClick={startSensorData}
          className="px-4 py-2 text-white font-semibold rounded-lg shadow-md bg-green-500 hover:bg-green-600 transition"
        >
          Start
        </button>
      )}
    </div>
  );
};

export default StartStopButtons;
