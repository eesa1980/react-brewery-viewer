import {renderWithRouter} from '../../setupTests';
import Routes from "../../../component/common/Routes";
import {render, screen} from "@testing-library/react";
import React from "react";

const assertionHelper = async (text: string, url? :string) => {
    const {container} = renderWithRouter(<Routes/>, url);
    await expect(screen.findByText(text)).resolves.toBeDefined();
    expect(container).toMatchSnapshot();
}

it('Shows home page', async () => {
    await assertionHelper('Home Page');
})

it('Shows brewery-detail page', async () => {
    await assertionHelper('Brewery Detail', "/brewery-detail/123456");
})

it('Fails to show brewery-detail page as no id', async () => {
    await assertionHelper('Error: Page not found', "/brewery-detail");
})

it('Shows error page', async () => {
    await assertionHelper('Error: Page not found', "/fake-route");
})

