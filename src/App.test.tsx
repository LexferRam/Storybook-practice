import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { DataProvider} from './Context/DataContext';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(
  <DataProvider>
    <App />
  </DataProvider>
  
  )
})

it("Should render 3 buttons", () => {
  expect(screen.getByText("Increment")).toBeInTheDocument()
  expect(screen.getByText("Decrement")).toBeInTheDocument()
  expect(screen.getByText("Reset")).toBeInTheDocument()
})

it("Count should be 0 on first load", () => {
  // screen.debug()
  expect(screen.getByTestId("counter")).toHaveTextContent("0")
})

it("Counter should increment to 1 when increment button is clicked", () => {
  userEvent.click(screen.getByRole("button", {name: "Increment"}))
  expect(screen.getByTestId("counter")).toHaveTextContent("1")
})