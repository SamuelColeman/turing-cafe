import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form/Form';

describe('Form', () => {
	let wrapper

	beforeEach(() => {
		let mockAddReservation = jest.fn();
    wrapper = shallow(<Form addReservation={mockAddReservation} />)
  });

  it('should match the snapshot', () => {
  	expect(wrapper).toMatchSnapshot();
  })

  it('should update state when handle change is called', () => {
  	let mockEvent = {target: {name: 'name', value: 'Sam'}}
  	let expected = 'Sam'
  	wrapper.instance().handleChange(mockEvent);
  	expect(wrapper.state('name')).toEqual(expected)
  })

  it('should clear the state when clearInputs is invoked', () => {
  	let expected = {
			name: '',
			date: '',
			time: '',
			number: ''
		}
		wrapper.instance().setState({
			name: "Leta",
			date: "4/5",
			time: "7:00",
			number: 2
		})
		wrapper.instance().clearInputs();
		expect(wrapper.state()).toEqual(expected)
  })

  it('should invoke clearInputs when submitNewReservation is called', () => {
  	wrapper.instance().clearInputs = jest.fn();
  	let mockEvent = { preventDefault: jest.fn() };
  	wrapper.instance().submitNewReservation(mockEvent);
  	expect(wrapper.instance().clearInputs).toHaveBeenCalled();
  })

  it('should invoke handleChange when input field value is changed', () => {
  	let mockEvent = {target: {name: 'name', value: 'Sam'}}
  	wrapper.instance().handleChange = jest.fn();
  	wrapper.find('input').at(0).simulate('change', mockEvent);
  	wrapper.instance().forceUpdate();
  	expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent);
  })

  it('should invoke submitNewReservation when button is clicked', () => {
  	let mockEvent = { preventDefault: jest.fn() };
  	wrapper.instance().submitNewReservation = jest.fn();
  	wrapper.find('button').simulate('click', mockEvent);
  	wrapper.instance().forceUpdate();
  	expect(wrapper.instance().submitNewReservation).toHaveBeenCalledWith(mockEvent);
  })
})