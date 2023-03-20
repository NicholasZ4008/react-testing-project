import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react'
import App from '../App';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'


describe('App Tests', ()=>{
    it('should render the App', ()=>{
        render(<App/>);
        const HEADER_ELEMENT = screen.getByText(/App/i)
        expect(HEADER_ELEMENT).toBeInTheDocument();
    });

    test('the start button should be clicked 3 times', ()=>{
        render(<App/>)
        // find the button element
        const startButton = screen.getByText(/start/i)
        expect(startButton).toBeInTheDocument();

        // click the button element
        userEvent.tripleClick(startButton)


        // assert that it was clicked
        const countContainer = document.querySelector('.count-container')
        expect(countContainer).toContainHTML("<span class='count-container'>3</span>")
    })
})



/*
test('triple click', ()=>{
    const onChange = jest.fn()
    render(<input type="checkbox" onChange={onChange} />)
    const checkbox = screen.getByRole('checkbox')
    userEvent.tripleClick(checkbox)
    expect(onChange).toHaveBeenCalledTimes(3)
    expect(checkbox).not.toBeChecked()
})

userEvent.click(screen.getByText('3'))
expect(screen.getByLabelText('3')).toBeChecked()
*/
