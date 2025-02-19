"use client"; // Enables Client Component behavior in the App Router

import { useState, useEffect } from "react";
import { getEquipmentData } from "@/lib/api";
import { EquipmentData } from "@/types/equipments";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Dashboard: React.FC = () => {
    const [data, setData] = useState<EquipmentData | null>(null);

    useEffect(() => {
        const fetchData = async() => {
            const result = await getEquipmentData();
            setData(result);
        };

        fetchData();
        const interval = setInterval(fetchData, 5000); // Auto-refresh every 5 sec

        return () => clearInterval(interval);
    },[]);

    if (!data) return <p>Loading data...</p>

    return (
        <div style={{ padding: "20px" }}>
        <h1>Remote Equipment Monitoring</h1>
        <p><strong>Machine ID:</strong> {data.machine_id}</p>
        <p><strong>Temperature:</strong> {data.temperature} °C</p>
        <p><strong>Pressure:</strong> {data.pressure} Pa</p>
        <p><strong>Humidity:</strong> {data.humidity} %</p>
        <p><strong>Timestamp:</strong> {data.timestamp}</p>
      </div>
    );
};

export default Dashboard;