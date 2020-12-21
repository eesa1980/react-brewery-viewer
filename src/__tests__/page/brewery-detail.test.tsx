import {renderWithRouter, server} from "../setupTests";
import {screen, waitFor} from "@testing-library/react";
import React from "react";
import BreweryDetail from "../../page/brewery-detail";
import {brewery} from "../mocks";

it('Shows brewery detail page with mocked results', async () => {
    const mockFn = jest.fn();
    const url = {
        local: "/brewery-detail/7325",
        openBrewery: "https://api.openbrewerydb.org/breweries/7325",
    }

    const localhostMockCall = server({
        url: url.local,
        callback: (res, ctx) => {
            mockFn();
            return res(ctx.json({}));
        }
    });

    const breweriesMock = server({
        url: url.openBrewery,
        callback: (res, ctx) => {
            mockFn();
            return res(ctx.json(brewery));
        }
    });

    localhostMockCall.listen();
    breweriesMock.listen();

    await fetch(url.openBrewery);

    const {container} = renderWithRouter(<BreweryDetail/>, url.local);

    await waitFor(() => {
        expect(screen.getByText('101 Brewery')).toBeDefined();
        expect(screen.getByText('Brewpub')).toBeDefined();
        expect(screen.getByText('http://www.101brewery.com')).toBeDefined();
    })

    expect(container).toMatchSnapshot();
    expect(mockFn).toHaveBeenCalledTimes(2);

    localhostMockCall.close();
    breweriesMock.close();
});