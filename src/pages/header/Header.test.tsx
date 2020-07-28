import React from "react";
import { render, within, fireEvent } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {});
it("menu options should only be visible when drawer is expanded", () => {
  const { getByTestId } = render(<Header />);

  expect(getByTestId("HOME")).not.toBeVisible();
  expect(getByTestId("PROFILE")).not.toBeVisible();
  expect(getByTestId("AVAILABILITIES")).not.toBeVisible();
  expect(getByTestId("ROSTER")).not.toBeVisible();
  expect(getByTestId("MEMBERS")).not.toBeVisible();

  fireEvent.click(getByTestId("menuIcon"));

  expect(getByTestId("HOME")).toBeVisible();
  expect(getByTestId("PROFILE")).toBeVisible();
  expect(getByTestId("AVAILABILITIES")).toBeVisible();
  expect(getByTestId("ROSTER")).toBeVisible();
  expect(getByTestId("MEMBERS")).toBeVisible();
});

