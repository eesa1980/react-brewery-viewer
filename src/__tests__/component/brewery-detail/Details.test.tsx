import React from "react";
import Details from "../../../component/brewery-detail/Details";
import { brewery } from "../../mocks";
import { assertComponent } from "../../helper";

it("Renders Details component", async () => {
  assertComponent(<Details brewery={brewery} />);
});