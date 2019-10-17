import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Reservations from '../Reservations/Reservations';
import { getReservations, postReservation } from '../apiCalls/apiCalls'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      isLoading: true,
      error: ''
    }
  }

  componentDidMount() {
    getReservations()
      .then(reservations => this.setState({ reservations, isLoading: false}))
      .catch(error => this.setState({ isLoading: false, error: error.message}))
  }

  addReservation = newReservation => {
    const options = {
      method: 'POST',
      body: JSON.stringify(newReservation),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    postReservation(options)
      .then(reservation => this.setState({ reservations: [...this.state.reservations, reservation]}))
      .catch(error => this.setState({ error: error.message }))
  }

  render() {
    const { reservations, isLoading, error } = this.state;
    return (
      <main className='App'>
        <h1 className='app-title'>Turing Cafe</h1>
        <Form addReservation={this.addReservation}/>
        {isLoading && <h1>Loading</h1>}
        {error && <h1>{error}</h1>}
        <Reservations reservations={reservations} />
      </main>
    )
  }
}
