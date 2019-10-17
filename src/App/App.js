import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
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
    return (
      <main>
        <h1>Turing Cafe</h1>
        <Form />
      </main>
    )
  }
}
