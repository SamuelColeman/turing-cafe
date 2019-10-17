import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import { getReservations, postReservation } from '../apiCalls/apiCalls';

jest.mock('../apiCalls/apiCalls.js')

describe('App', () => {
	beforeEach(() => {
		getReservations.mockImplementation(() => {
			return Promise.resolve([{
				id: 1,
				name: "Christie",
				date: "12/29",
				time: "7:00",
				number: 12
				}])
		})
		const mockReservation = {
				id: 1,
				name: "Christie",
				date: "12/29",
				time: "7:00",
				number: 12
				}
	})

	it('should match the snapshot', () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toMatchSnapshot();
	})

	it('should mount after retrieving', () => {
		shallow(<App />);
		expect(getReservations).toHaveBeenCalled();
	})

	it('should update state with new reservation when addReservation is invoked', async () => {
		const wrapper = shallow(<App />);
		const mockReservations = {
			id: 2,
			name: "Leta",
			date: "4/5",
			time: "7:00",
			number: 2
			}
		const expected = [{
				id: 1,
				name: "Christie",
				date: "12/29",
				time: "7:00",
				number: 12
				}, mockReservations]
		postReservation.mockImplementation(() => {
			return Promise.resolve(mockReservations)
		})
		await wrapper.instance().addReservation(mockReservations)
		expect(wrapper.state('reservations')).toEqual(expected)
	})
})