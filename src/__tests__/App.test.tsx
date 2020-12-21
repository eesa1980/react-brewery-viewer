import React from 'react';
import App from "../App";
import './setupTests';
import {renderWithRouter} from "./setupTests";

test('renders App', () => {
  const {container} = renderWithRouter(<App />);
  expect(container).toBeDefined();
  expect(container).toMatchSnapshot();
});
