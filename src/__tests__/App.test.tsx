import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("App Tests", () => {
  it("should render the App and all of it's components", () => {
    render(<App />);
    const HEADER_ELEMENT = screen.getByText(/App/i); //make sure header renders
    expect(HEADER_ELEMENT).toBeInTheDocument();

    const PLUS_BUTTON = screen.getByText(/\+/i);
    expect(PLUS_BUTTON).toBeInTheDocument();

    const MINUS_BUTTON = screen.getByText(/\-/i);
    expect(MINUS_BUTTON).toBeInTheDocument();

    const INPUT_FIELD = screen.getByPlaceholderText(/input text/i);
    expect(INPUT_FIELD).toBeInTheDocument();

    const COUNTER = screen.getByText(/Counter/i);
    expect(COUNTER).toBeInTheDocument();

    const INPUT_REFLECTION = screen.getByText(/the number you typed:/i);
    expect(INPUT_REFLECTION).toBeInTheDocument();

    const DIFFERENCE = screen.getByText(/Counter and Input Difference/i);
    expect(DIFFERENCE).toBeInTheDocument();
  });

  test("the plus button should be clicked once", () => {
    render(<App />);
    // find the button element
    const plusButton = screen.getByText(/\+/i);
    //expect(plusButton).toBeInTheDocument();

    // click the button element
    fireEvent.click(plusButton);

    // assert that it was clicked
    const countContainer = screen.getByText(/1/i);
    expect(countContainer).toBeInTheDocument(); //check if the count-container value is actually one
  });

  test("the minus button should be clicked once", () => {
    render(<App />);
    // find the button element
    const minusButton = screen.getByText(/\-/i);
    //expect(minusButton).toBeInTheDocument();

    // click the button element
    fireEvent.click(minusButton);

    // assert that it was clicked
    const countContainer = screen.getByText(/-1/i); //three clicks instead
    expect(countContainer).toBeInTheDocument();
  });

  it("input field should work with a fixed test", () => {
    const { debug } = render(<App />);
    debug();
    // find the input field
    const inputField = screen.getByPlaceholderText(/input a number/i);
    //expect(inputField).toBeInTheDocument();

    if (inputField) {
      //change the text
      fireEvent.change(inputField, { target: { value: 1 } });

      //assert that it was changed
      expect(inputField.value).toBe(1);
    }
  });

  test("Should test an unorthodox pattern of clicks and numeral inputs", () => {
    //render all required elements
    const COUNTER = screen.getByText(/Counter/i);
    const INPUT_FIELD = screen.getByPlaceholderText(/input text/i);
    const PLUS_BUTTON = screen.getByText(/\+/i);
    const MINUS_BUTTON = screen.getByText(/\-/i);

    //sequence of fire Events
    fireEvent.click(PLUS_BUTTON);
    fireEvent.click(PLUS_BUTTON);

    fireEvent.click(MINUS_BUTTON);
    fireEvent.click(MINUS_BUTTON);

    fireEvent.click(PLUS_BUTTON);

    fireEvent.change(INPUT_FIELD, { target: { value: 5 } });

    const countContainer = screen.getByText(/1/i);
    expect(countContainer).toBe(1);
  });
});
