import '@testing-library/jest-dom';
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import 'jest-styled-components';
import {setupServer} from "msw/node";
import {ResponseComposition, rest} from "msw";
import {RestContext} from "msw/lib/types/rest";

interface ServerArgs {
    url: string;
    obj?: Record<string, any>;
    callback?: (res: ResponseComposition<any>, ctx: RestContext) => any;
}


export const renderWithRouter = (ui: JSX.Element, route = '/') => {
    window.history.pushState({}, 'Test page', route);
    return render(ui, {wrapper: BrowserRouter});
}

export const server = ({url, callback, obj = {}}: ServerArgs) => setupServer(
    rest.get(url, (req, res, ctx) => {
        if (!callback) {
            return res(ctx.json(obj));
        }

        return callback(res, ctx);
    })
)

export {render} from "@testing-library/react";
