import { render, renderWithRouter } from "../setupTests";
import React from "react";

export const assertComponent = (Component: React.ReactElement, r: typeof render | typeof renderWithRouter = render, url?: string) => {
  const { container } = r(Component, url);
  expect(container).toBeDefined();
  expect(container).toMatchSnapshot();
  return container;
};