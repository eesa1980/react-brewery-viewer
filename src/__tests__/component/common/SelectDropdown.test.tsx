import React from "react";
import SelectDropdown from "../../../component/common/SelectDropdown";
import { assertComponent } from "../../helper";

it("Renders dropdown", () => {
  assertComponent(<SelectDropdown dropdownOpts={["one", "two", "three"]} />);
});