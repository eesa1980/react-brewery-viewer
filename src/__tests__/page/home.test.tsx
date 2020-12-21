import {screen, waitFor} from "@testing-library/react";
import React from "react";
import {renderWithRouter, server} from "../setupTests";
import HomePage from "../../page/home";
import {breweries} from "../mocks";

it('Shows home page with mocked results', async () => {
    const mockFn = jest.fn();
    const url = {
        local: "/",
        openBrewery: "https://api.openbrewerydb.org/breweries",
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
            return res(ctx.json(breweries));
        }
    });

    localhostMockCall.listen();
    breweriesMock.listen();

    await fetch(url.openBrewery);

    const {container} = renderWithRouter(<HomePage/>);

    await waitFor(() => {
        for (const r of breweries) {
            expect(screen.getByText(r.name)).toBeDefined();
        }
    })

    expect(container).toMatchSnapshot();
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(container.querySelectorAll('.brewery-item').length).toEqual(4);

    localhostMockCall.close();
    breweriesMock.close();
});


