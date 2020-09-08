import React from "react";
import { render, within, fireEvent } from "@testing-library/react";
import { MinistryIcon } from "./MinistryIcon";

describe("MinistryIcon", () => {
  it("should display label if labelIsVisible prop is true", () => {
    // arrange
    const ministry = "Worship";
    const isLabelVisible = true;
    // act
    const { getByText } = render(
      <MinistryIcon ministry={ministry} labelIsVisible={isLabelVisible} />
    );
    // assert
    expect(getByText("Worship")).toBeInTheDocument();
  });
  it("should not display label if labelIsVisible prop is false", () => {
    // arrange
    const ministry = "Worship";
    const isLabelVisible = false;
    // act
    const { getByText } = render(
      <MinistryIcon ministry={ministry} labelIsVisible={isLabelVisible} />
    );
    // assert
    expect(getByText("Worship")).not.toBeVisible();
  });
  it("should be able to display corresponding icon image for worship ministry", () => {
    // arrange
    const ministry = "Worship";
    const isLabelVisible = true;
    // act
    const { getByTestId } = render(
      <MinistryIcon ministry={ministry} labelIsVisible={isLabelVisible} />
    );
    // assert
    expect(getByTestId("WorshipIcon")).toBeInTheDocument();
  });
});
