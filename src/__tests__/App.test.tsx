import React from 'react';
import { render } from '@testing-library/react';
import App from "../App";
import './setupTests';

test('renders App', () => {
  const el = render(<App />);
  expect(el).toBeDefined();
  expect(el).toMatchSnapshot();
});
