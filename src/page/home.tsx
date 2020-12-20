import React, { useCallback, useEffect, useMemo, useState } from "react";
import useRouteHelper from "../component/hooks/useRouteHelper";
import axios, { AxiosResponse } from "axios";
import { IBrewery } from "../interface/IBrewery";
import { useHistory } from "react-router-dom";
import { BreweryType, Direction, SortBy } from "../enum";
import { Divider, DropdownProps, Icon, Form } from "semantic-ui-react";
import SelectDropdown from "../component/common/SelectDropdown";
import Items from "../component/home/Items";
import Layout from "../component/layout/Layout";
import styled from "styled-components";
import { BASE } from "../component/Constant";

const PER_PAGE = 10;

const HomePage: React.FC = () => {
  const [isLoadingBreweries, setIsLoadingBreweries] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [breweries, setBreweries] = useState<IBrewery[]>([]);
  const history = useHistory();

  const { processUrlParams } = useRouteHelper();
  const params = processUrlParams("sort_by", "direction", "by_type");

  const processSortByVal = useMemo(() => {
    return Object.values(SortBy).includes(params.sort_by)
      ? params.sort_by
      : SortBy.NAME;
  }, [params]);

  const processByTypeVal = useMemo(() => {
    return Object.values(BreweryType).includes(params.by_type)
      ? params.by_type
      : BreweryType.ALL;
  }, [params]);

  useEffect(() => {
    /**
     * Makes API call to get breweries and add to state object
     */
    const getBreweries = async (): Promise<void> => {
      setIsLoadingBreweries(true);

      params.sort_by = processSortByVal;
      params.by_type = processByTypeVal;

      if (params.by_type === BreweryType.ALL) {
        delete params.by_type;
      }

      const sort =
        (params.direction === Direction.ASC ? "-" : "+") + params.sort_by;
      delete params.direction;
      delete params.sort_by;

      const response: AxiosResponse<IBrewery[]> = await axios({
        url: BASE,
        params: {
          ...params,
          sort,
          page,
          per_page: PER_PAGE,
        },
      });

      let val: IBrewery[] = response?.data;

      if (page > 1) {
        /**
         * Sometimes, hot reload will cause state issue, so reset and make API call again if this happens
         */
        if (breweries.length / PER_PAGE !== page - 1) {
          return setPage(1);
        }

        val = [...breweries, ...response?.data];
      }

      setIsLoadingBreweries(false);

      return setBreweries(val);
    };

    void getBreweries();
  }, [history.location, page]);

  /**
   * When the sort by dropdown changes
   *
   * @param _
   * @param {DropdownProps} data
   */
  const onChangeSortByHandler = useCallback(
    (_, data: DropdownProps) => {
      setPage(1);
      params.sort_by = data.value;

      history.push({
        search: new URLSearchParams(params).toString(),
      });
    },
    [params, history]
  );

  /**
   * When the change by dropdown changes
   *
   * @param _
   * @param {DropdownProps} data
   */
  const onChangeByTypeHandler = useCallback(
    (_, data: DropdownProps) => {
      setPage(1);

      const { value } = data;
      params.by_type = value;

      history.push({
        search: new URLSearchParams(params).toString(),
      });
    },
    [params, history]
  );

  return (
    <Layout
      title={
        <>
          Breweries
          <Icon className={"beer"} color={"teal"} />
        </>
      }
      subtitle={
        "Select a brewery, click on a location or click a website link to view more information"
      }
    >
      <FormWrapper$>
        <Form>
          <Form.Group widths="equal">
            <SelectDropdown
              label={
                <>
                  Sort by <Icon className={"sort amount down"} />
                </>
              }
              value={processSortByVal}
              selection
              dropdownOpts={(SortBy as unknown) as string[]}
              onChange={onChangeSortByHandler}
            />

            <SelectDropdown
              label={
                <>
                  Filter by type <Icon className={"filter"} />
                </>
              }
              value={processByTypeVal}
              selection
              dropdownOpts={(BreweryType as unknown) as string[]}
              onChange={onChangeByTypeHandler}
            />
          </Form.Group>
        </Form>
      </FormWrapper$>

      <Items
        onClickShowMore={() => setPage(page + 1)}
        breweries={breweries}
        isLoading={isLoadingBreweries}
      />
      <Divider horizontal />
    </Layout>
  );
};

export default HomePage;

const FormWrapper$ = styled.div`
  position: sticky;
  top: 50px;
  padding: 20px 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 70%,
    transparent 100%
  );
`;