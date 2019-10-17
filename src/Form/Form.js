import React, { Component } from 'react';

export default class Form extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			date: '',
			time: '',
			number: 0
		}
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	submitNewReservation = e => {
		e.preventDefault();
		const { addReservation } = this.props;
		const newReservation = {...this.state, id: Date.now()};
		addReservation(newReservation);
		this.clearInputs();
	}

	clearInputs = () => {
		this.setState({
			name: '',
			date: '',
			time: '',
			number: ''
		})
	}

	render() {
		return (
			<form>
				<input
					type='text'
					placeholder='Name'
					name="name"
					value={this.state.name || ''}
					onChange={this.handleChange}
				/>
				<input
					type='text'
					placeholder='Date'
					name="date"
					value={this.state.date || ''}
					onChange={this.handleChange}
					/>
				<input
					type='text'
					placeholder='Time'
					name="time"
					value={this.state.time || ''}
					onChange={this.handleChange}
				/>
				<input
					type='number'
					placeholder='Number of Guests'
					name="number"
					value={this.state.guests}
					onChange={this.handleChange}
				/>
				<button onClick={this.submitNewReservation}>Make Reservation</button>
			</form>
		)
	}
}