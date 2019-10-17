import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Reservations from '../Reservations/Reservations';
import { getReservations } from '../apiCalls/apiCalls'

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

  render() {
    const { reservations, isLoading, error } = this.state;
    return (
      <main>
        <h1>Turing Cafe</h1>
        <Form />
        <Reservations reservations={reservations} />
      </main>
    )
  }
}
