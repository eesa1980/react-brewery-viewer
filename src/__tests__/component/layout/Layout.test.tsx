import { assertComponent } from "../../helper";
import Layout from "../../../component/layout/Layout";
import React from "react";
import { screen } from "@testing-library/react";

it('Renders Layout component', async () => {
  assertComponent(<Layout title={"Mock Title"} subtitle={"Mock Subtitle"}/>);
  expect(await screen.findByText('Mock Title')).toBeDefined();
  expect(await screen.findByText('Mock Subtitle')).toBeDefined();
});

it('Renders Layout component with loading overlay', async () => {
  assertComponent(<Layout title={"Mock Title"} subtitle={"Mock Subtitle"} isLoading={true}/>);
  expect(await screen.findByText('Loading')).toBeDefined();
})