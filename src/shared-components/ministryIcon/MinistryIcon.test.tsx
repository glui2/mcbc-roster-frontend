import React from "react";
import { render, within, fireEvent } from "@testing-library/react";
import { MinistryIcon } from "./MinistryIcon";

describe("MinistryIcon", () => {
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
  it.each`
    ministryName       | expectedIcon           | expectedLabel
    ${"Announcements"} | ${"AnnouncementsIcon"} | ${"Announcements"}
    ${"AV"}            | ${"AVIcon"}            | ${"AV"}
    ${"BibleReading"}  | ${"Bible ReadingIcon"} | ${"Bible Reading"}
    ${"Communion"}     | ${"CommunionIcon"}     | ${"Communion"}
    ${"Offering"}      | ${"OfferingIcon"}      | ${"Offering"}
    ${"Worship"}       | ${"WorshipIcon"}       | ${"Worship"}
  `(
    `should show $expectedIcon and $expectedLabel label for the $ministryName ministry`,
    ({ ministryName, expectedIcon, expectedLabel }) => {
      //arrange
      const ministry = ministryName;
      const isLabelVisible = true;
      //act
      const { getByTestId, getByText } = render(
        <MinistryIcon ministry={ministry} labelIsVisible={isLabelVisible} />
      );
      //assert
      expect(getByTestId(expectedIcon)).toBeInTheDocument();
      expect(getByText(expectedLabel)).toBeVisible();
    }
  );
});
