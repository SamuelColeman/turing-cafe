import React from 'react';

const Card = ({ name, date, time, guests }) => {
	return (
		<section>
			<h1>{name}</h1>
			<p>{date}</p>
			<p>{time}</p>
			<p>{guests}</p>
			<button>Cancel</button>
		</section>
	)
}

export default Card