import {screen} from "@testing-library/react";
import React from "react";
import DetailItem from "../../../component/brewery-detail/DetailItem";
import { assertComponent } from "../../helper";

it("Renders DetailItem component", async () => {
     assertComponent(<DetailItem title={"Mock Title"}/>);
    await expect(screen.findByText("Mock Title")).resolves.toBeDefined();
})