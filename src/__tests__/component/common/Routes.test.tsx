import { renderWithRouter } from "../../setupTests";
import Routes from "../../../component/common/Routes";
import { screen } from "@testing-library/react";
import React from "react";
import { assertComponent } from "../../helper";

it("Shows home page", async () => {
  assertComponent(<Routes />, renderWithRouter, "/");
  await expect(screen.findByText("Breweries")).resolves.toBeDefined();
});

it("Shows brewery-detail page", async () => {
  assertComponent(<Routes />, renderWithRouter, "/brewery-detail/12345");
  await expect(screen.findByText("Loading")).resolves.toBeDefined();
});

it("Fails to show brewery-detail page as no id", async () => {
  assertComponent(<Routes />, renderWithRouter, "/brewery-detail");
  expect(await screen.findByText("404 Error - Page not found")).toBeDefined();
});

it("Shows error page", async () => {
  assertComponent(<Routes />, renderWithRouter, "/fake-route");
  expect(await screen.findByText("404 Error - Page not found")).toBeDefined();
});
