export const getReservations = () => {
	return fetch('http://localhost:3001/api/v1/reservations')
		.then(response => response.json())
		.then(data => data)
}

export const postReservation = (options) => {
	return fetch('http://localhost:3001/api/v1/reservations', options)
		.then(response => response.json())
}