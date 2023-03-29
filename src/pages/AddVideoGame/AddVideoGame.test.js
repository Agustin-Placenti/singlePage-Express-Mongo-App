/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddVideoGame from "./AddVideoGame";
import { HashRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom'
import mockAxios from 'jest-mock-axios';

afterEach(() => {
  // cleaning up the mess left behind the previous test
  mockAxios.reset();
});

describe("Register component", () => {
  it("should render AddVideoGame component correctly", () => {
    render(<AddVideoGame />, {wrapper: Router})
    const heading = screen.getByRole("heading", { hidden: true });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Add videoGame");
  });

  it("should perform on submit after filling all required fields", () => {
    render(<AddVideoGame />, {wrapper: Router})
    const nameInput = screen.getByPlaceholderText("Name");
    const priceInput = screen.getByPlaceholderText("Price");
    const evaluationInput = screen.getByPlaceholderText("Evaluation");
    const saveButton = screen.getByText("Save");
    fireEvent.change(nameInput, {target: {value: 'testName'}});
    fireEvent.change(priceInput, {target: {value: 40}});
    fireEvent.change(evaluationInput, {target: {value: 6}});
    fireEvent.click(saveButton);
    expect(mockAxios.post).toHaveBeenCalled();
  })
});
