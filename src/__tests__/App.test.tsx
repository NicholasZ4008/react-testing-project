import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("App Tests", () => {
  it("should render the App", () => {
    render(<App />);
    const HEADER_ELEMENT = screen.getByText(/App/i); //test the actual app landing page and all it's elements.
    expect(HEADER_ELEMENT).toBeInTheDocument();
  });

  test("the plus button should be clicked once", () => {
    render(<App />);
    // find the button element
    const plusButton = screen.getByText(/\+/i);
    expect(plusButton).toBeInTheDocument();

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
    expect(minusButton).toBeInTheDocument();

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
    const inputField = screen.getByPlaceholderText(/input text/i);
    expect(inputField).toBeInTheDocument();

    if (inputField) {
      //change the text
      fireEvent.change(inputField, { target: { value: "test" } });

      //assert that it was changed
      expect(inputField.value).toBe("test");
    }
  });
});
