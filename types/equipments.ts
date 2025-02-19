// defines the TypeScript interface for sensor dara
export interface EquipmentData {
    machine_id: string;
    temperature: number;
    pressure: number;
    humidity: number;
    timestamp: string;
}