import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const firstName = "Jonah";
  const lastName = "Tillman";
  const address = "1212 Some St";
  const city = "NewOrleans";
  const state = "LA";
  const zip = "70001";

  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);

  userEvent.type(firstNameInput, firstName);
  userEvent.type(lastNameInput, lastName);
  userEvent.type(addressInput, address);
  userEvent.type(cityInput, city);
  userEvent.type(stateInput, state);
  userEvent.type(zipInput, zip);

  const button = screen.getByRole("button");
  userEvent.click(button);

  const successMessage = screen.getByTestId("successMessage");

  expect(successMessage).toBeInTheDocument;
  expect(successMessage).toBeTruthy;
});
