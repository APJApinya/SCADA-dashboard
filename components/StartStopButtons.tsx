import { useState } from "react";
import axios from "axios";

const API_URL = "https://wy9dediidb.execute-api.ap-southeast-2.amazonaws.com"

const StartStopButtons = () => {
    // using state hook to control the button
    const [isGenerating, setIsGenerating] = useState(false);

    const startSensorData = async() => {
        const response = await axios.post(`${API_URL}/start`);
        console.log(response.data);
        setIsGenerating(true);
    };

    const stopSensorData = async() => {
        const response = await axios.post(`${API_URL}/stop`);
        console.log(response.data);
        setIsGenerating(false);
    };

    return (
        <div>
            <button onClick={startSensorData} disabled={isGenerating}>Start the engine</button>
            <button onClick={stopSensorData} disabled={!isGenerating}>Stop the engine</button>
        </div>
    );
};

export default StartStopButtons;