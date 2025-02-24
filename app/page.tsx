"use client"; // Enables Client Component to use useState and useEffect

import { useState, useEffect } from "react";
import { getEquipmentData } from "@/lib/api";
import { EquipmentData } from "@/types/equipments";
import StartStopButtons from "@/components/StartStopButtons";

const Dashboard: React.FC = () => {
    const [data, setData] = useState<EquipmentData | null>(null);

    useEffect(() => {
        const fetchData = async() => {
            const result = await getEquipmentData();
            setData(result);
        };

        fetchData();
        const interval = setInterval(fetchData, 10000); // Auto-refresh every 10 sec

        return () => clearInterval(interval);
    },[]);

    if (!data) return <p>Loading data...</p>

    const tempClass = data.temperature > 80 ? "bg-red-500/50 text-white font-bold" : "bg-sky-500/50";

    return (
        <div style={{ padding: "20px" }}>
        <h1 className="text-2xl font-bold">Remote Equipment Monitoring</h1>
        <StartStopButtons /> 
        
        {data.temperature > 80 && (<p className="text-red-700 font-bold text-lg mt-2">Warning! High Temperature Detected!</p>)}

        <p><strong>Machine ID:</strong><a className="bg-sky-500/50"> {data.machine_id}</a></p>
        <p><strong>Temperature:</strong><a className={tempClass}> {data.temperature} °C</a></p>
        <p><strong>Pressure:</strong><a className="bg-sky-500/50"> {data.pressure} Pa</a></p>
        <p><strong>Humidity:</strong><a className="bg-sky-500/50"> {data.humidity} %</a></p>
        <p><strong>Timestamp:</strong><a className="bg-sky-500/50"> {data.timestamp}</a></p>
      </div>
    );
};

export default Dashboard;