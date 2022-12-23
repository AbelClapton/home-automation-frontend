const sensorIcons = {
	Temperatura: 'temperature-high',
	Humedad: 'water',
	Calor: 'gauge-high',
	Energia: 'bolt',
}

export const getSensorIcon = (sensorType) => {
	return sensorIcons[sensorType]
}
