import React from "react";
import Address from "../../../component/common/Address";
import { brewery } from "../../mocks";
import { assertComponent } from "../../helper";

it("Renders Address component", () => {
  const container = assertComponent(<Address brewery={brewery} />);
  expect(container.querySelector(".google-maps-button")).toBeNull();
});

it("Renders Address component with button", () => {
  const container = assertComponent(
    <Address brewery={brewery} showBtn={true} />
  );
  expect(container.querySelector(".google-maps-button")).not.toBeNull();
});
