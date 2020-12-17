import {useLocation} from "react-router-dom";
import {useCallback} from "react";

const useRouteHelper = () => {
    const {search} = useLocation();

    /**
     * Extracts URL params and returns an object with values
     *
     * @param {string[]} params - The params in the url
     */
    const processUrlParams = useCallback(
        (...params: string[]) => {
        const query = new URLSearchParams(search);
        const obj: Record<string, any> = {};

        params.forEach(p => {
            const val: string | null = query.get(p);

            if (!val) {
                return;
            }

            obj[p] = val;

        });

        return obj;
    }, [search]);

    return {processUrlParams}
}

export default useRouteHelper;