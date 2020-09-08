import React from "react";
import { render, within, fireEvent } from "@testing-library/react";
import { Home } from "./Profile";

describe("Home", () => {});
it("menu options should only be visible when drawer is expanded", () => {
  const { getByTestId, getByText } = render(<Header />);

  expect(getByText("HOME")).not.toBeVisible();
  expect(getByText("PROFILE")).not.toBeVisible();
  expect(getByText("AVAILABILITIES")).not.toBeVisible();
  expect(getByText("ROSTER")).not.toBeVisible();
  expect(getByText("MEMBERS")).not.toBeVisible();

  fireEvent.click(getByTestId("menuIcon"));

  expect(getByText("HOME")).toBeVisible();
  expect(getByText("PROFILE")).toBeVisible();
  expect(getByText("AVAILABILITIES")).toBeVisible();
  expect(getByText("ROSTER")).toBeVisible();
  expect(getByText("MEMBERS")).toBeVisible();
});
