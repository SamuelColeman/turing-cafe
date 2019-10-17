import React from 'react';
import Card from '../Card/Card';

const Reservations = ({ reservations }) => {
	const filteredReservations = reservations.map(reservation => {
		console.log(reservation.id)
		return <Card 
			key={reservation.id}
			id={reservation.id}
			name={reservation.name}
			date={reservation.date}
			time={reservation.time}
			number={reservation.number}
			/>
	})
	return (
		<section>
			{filteredReservations}
		</section>
	)
}

export default Reservations;