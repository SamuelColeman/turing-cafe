import React from 'react';

const Card = ({ name, date, time, number }) => {
	return (
		<section>
			<h1>{name}</h1>
			<p>{date}</p>
			<p>{time}</p>
			<p>Number of Guests: {number}</p>
			<button>Cancel</button>
		</section>
	)
}

export default Card