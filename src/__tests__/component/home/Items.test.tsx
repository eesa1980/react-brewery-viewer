import { assertComponent } from "../../helper";
import React from "react";
import Items from "../../../component/home/Items";
import { breweries, breweriesFull, brewery } from "../../mocks";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithRouter } from "../../setupTests";
import { IBrewery } from "../../../interface/IBrewery";

it("Renders Items Component", () => {
  assertComponent(
    <Items
      breweries={breweriesFull}
      isLoading={true}
      onClickShowMore={() => false}
    />,
    renderWithRouter
  );
});

it("Renders Items Component and clicks show more button", () => {
  const mockFn = jest.fn();
  assertComponent(
    <Items
      breweries={breweriesFull}
      isLoading={false}
      onClickShowMore={mockFn}
    />,
    renderWithRouter
  );
  fireEvent.click(screen.getByText("Show more"));
  expect(mockFn).toHaveBeenCalledTimes(1);
});

it("Doesn't click show more as there's no more results to show, so button disabled", () => {
  const mockFn = jest.fn();
  assertComponent(
    <Items
      breweries={breweries as IBrewery[]}
      isLoading={false}
      onClickShowMore={mockFn}
    />,
    renderWithRouter
  );
  fireEvent.click(screen.getByText("Show more"));
  expect(mockFn).toHaveBeenCalledTimes(0);
});
