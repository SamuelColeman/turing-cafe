export const getReservations = () => {
	fetch('http://localhost:3001/api/v1/reservation')
		.then(response => response.json())
		.then(data => data)
}