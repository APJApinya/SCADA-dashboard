# 🚀 Cloud-Based Industrial IoT (IIoT) Monitoring System with AWS
**Try the Live Demo Here** 👉 [https://main.da3mnmg18wb1q.amplifyapp.com/](https://main.da3mnmg18wb1q.amplifyapp.com/)


## Overview
The Remote Equipment Monitoring System is a cloud-integrated SCADA (Supervisory Control and Data Acquisition) system that enables real-time monitoring of industrial equipment using AWS services.
This project demonstrates the integration of **AWS IoT Core, DynamoDB, API Gateway, Lambda, EventBridge, and SNS** to collect, process, and visualize equipment data.

This project showcases:
- **Cloud-based industrial monitoring** with AWS IoT Core and MQTT.
- **A serverless architecture** using AWS Lambda, DynamoDB, and API Gateway.
- **A real-time dashboard** built with Next.js and Tailwind CSS.
- **Automated alerting** via AWS SNS for abnormal equipment conditions.
---
## Live Demo
[Try the Web Dashboard](https://main.da3mnmg18wb1q.amplifyapp.com/)

**Features you can test:**
- View real-time sensor data (temperature, pressure, humidity).
- Start/Stop simulated sensor data generation.
- Receive warnings when **temperature exceeds 80°C**.

---
## Tech Stack & AWS Services Used
**Frontend**:
- **Next.js (TypeScript)** - Web dashboard for real-time data visualization.
- **Tailwind CSS** - Modern UI styling.
- **React Hooks** - For state and data fetching logic.

**Backend**:
- **AWS IoT Core** - Handles MQTT-based data transmission from sensors.
- **AWS Lambda** - Serverless backend functions for data processing.
- **AWS DynamoDB** - NoSQL database for storing historical equipment data.
- **AWS API Gateway** - Secure REST API for frontend-backend communication.
- **AWS SNS** - Sends email alerts for critical equipment issues.
- **AWS EventBridge** - Triggers automated data generation every minute.
- 
---
## Features
**Real-Time Equipment Monitoring**:  
- Uses **AWS IoT Core + MQTT** to collect and send live sensor data.

**Cloud-Based Data Storage & Retrieval**:  
- Data is stored in **AWS DynamoDB** and accessed via API Gateway.

**Interactive Web Dashboard**:  
- Displays sensor data dynamically using a **Next.js frontend**.

**Alert System for Critical Conditions**:  
- **AWS SNS sends alerts** when temperature exceeds 80°C.

**Automated Data Simulation**:  
- Uses **AWS EventBridge** to trigger **Lambda-based data generation**.
---
## Architecture Overview
![AWS Architecture Diagram](./SCADA-dashboard.drawio.png)

---
## Challenges and Learnings
- **Efficiently processing real-time IoT data streams** with AWS Lambda.
- **Building a cloud-native alternative to SCADA** for remote monitoring.
- **Optimizing data storage and retrieval** with DynamoDB indexes.
---
## Future Improvements
- **Predictive Maintenance with Machine Learning** 
- **Mobile App Integration** 
- **Integration with Industrial Protocols (OPC UA, Modbus) and with Ignition** 
