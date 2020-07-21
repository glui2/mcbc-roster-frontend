import React from "react";
import { render, within } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {});
it("drawer should not be visible", () => {
  const { getByTestId } = render(<Header />);

  const drawer = getByTestId("MenuDrawer");
  expect(within(drawer)).not.toBeVisible();
});

// describe("")
// it("drawer button should open drawer when clicked", () => {
//     const { getBy } = render(<Header/>);

// });
