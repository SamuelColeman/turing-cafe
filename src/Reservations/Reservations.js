import React from 'react';
import Card from '../Card/Card';

const Reservations = ({ reservations }) => {
	const filteredReservations = reservations.map(reservation => {
		return <Card 
			key={reservation.id}
			id={reservation.id}
			name={reservation.name}
			date={reservation.date}
			time={reservation.time}
			guests={reservation.guests}
			/>
	})
	return (
		<section>
			{filteredReservations}
		</section>
	)
}

export default Reservations;