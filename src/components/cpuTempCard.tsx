import React, { useEffect, useState } from "react";
import '../styles/cpu.module.css'

const CpuTemperature: React.FC = () => {
	const [logs, setLogs] = useState("");

	useEffect(() => {
		const socket = new WebSocket("ws://localhost:8085");

		socket.onmessage = (event) => {
			setLogs((prev) => prev + event.data + "\n");
		};

		socket.onerror = () => {
			setLogs((prev) => prev + "500\n");
		};

		return () => socket.close();
	}, []);

	return <>{logs}</>;
};

export default CpuTemperature;
