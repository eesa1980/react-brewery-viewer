import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { IBrewery } from "../interface/IBrewery";
import { Divider, Header } from "semantic-ui-react";
import Layout from "../component/layout/Layout";
import styled from "styled-components";
import Details from "../component/brewery-detail/Details";
import { BASE } from "../component/Constant";

const BreweryDetail: React.FC = () => {
  const breweryPath = useRouteMatch<{ id?: string }>("/brewery-detail/:id");
  const [brewery, setBrewery] = useState<IBrewery | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    /**
     * Makes API call to get breweries and add to state object
     */
    const getBrewery = async (): Promise<void> => {
      const response: AxiosResponse<IBrewery> = await axios({
        url: BASE + breweryPath?.params.id,
      });

      setBrewery(response.data);
      setIsLoading(false);
    };

    void getBrewery();
  }, [breweryPath?.params.id]);

  return (
    <Layout isLoading={isLoading}>
      <Heading$>
        <Header as={"h1"} size={"huge"} color={undefined}>
          {brewery?.name}
        </Header>
      </Heading$>

      <Divider horizontal />

      <Details brewery={brewery} />
    </Layout>
  );
};

export default BreweryDetail;

const Heading$ = styled.div`
  background: #00b5ad;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 250px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top-right-radius: 75px;
  border-bottom-left-radius: 75px;
  box-shadow: -10px 10px rgba(0, 0, 0, 0.05);

  .header {
    color: #ffffff;
  }
`;
