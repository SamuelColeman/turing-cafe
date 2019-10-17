import React, { Component } from 'react';

export default class Form extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			date: '',
			time: '',
			guests: 0
		}
	}

	render() {
		return (
			<form>
				<input
					type='text'
					placeholder='Name'
					value={this.state.name || ''}
				/>
				<input
					type='text'
					placeholder='Name'
					value={this.state.date || ''}
					/>
				<input
					type='text'
					placeholder='Name'
					value={this.state.time || ''}
				/>
				<input
					type='text'
					placeholder='Name'
					value={this.state.guests}
				/>
				<button>Make Reservation</button>
			</form>
		)
	}
}